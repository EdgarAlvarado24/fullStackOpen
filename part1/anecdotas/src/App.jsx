import { useState } from "react";

const App = () => {
  // Lista de anécdotas
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  // Estado para la anécdota seleccionada actualmente
  const [selected, setSelected] = useState(0);

  // Estado para almacenar la cantidad de votos de cada anécdota
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));

  // Estado para almacenar el índice de la anécdota con más votos
  const [mostVoted, setMostVoted] = useState(0);

  // Función para obtener un número aleatorio y seleccionar una nueva anécdota
  const GetRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomNumber);
  };

  // Función para votar por la anécdota seleccionada
  const VoteToAnecdote = () => {
    const newVotes = [...votes]; // Crea una copia del estado de votos
    newVotes[selected] += 1; // Incrementa el voto de la anécdota seleccionada
    setVotes(newVotes); // Actualiza el estado de votos

    // Verifica si la anécdota votada es la nueva con más votos
    if (newVotes[selected] > newVotes[mostVoted]) {
      setMostVoted(selected); // Actualiza la anécdota con más votos
    }
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <div>
        <button onClick={VoteToAnecdote}>vote</button>
        <button onClick={GetRandomNumber}>next anecdote</button>
      </div>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[mostVoted]}</p>
      <p>has {votes[mostVoted]} votes</p>
    </div>
  );
};

export default App;
