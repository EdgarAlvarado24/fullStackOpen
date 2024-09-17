import { useState, useEffect } from 'react' // Importamos el hook useState de React para manejar el estado de los componentes.
import axios from 'axios'
import Note from './components/Note' // Importamos el componente Note que se encuentra en la ruta especificada.

// Definimos el componente principal App como una función flecha.
const App = () => {
  // Usamos el hook useState para crear un estado llamado 'notes' que almacenará un array de notas.
  // Inicializamos 'notes' como un array vacío.
  const [notes, setNotes] = useState([]) 

  // Creamos un estado llamado 'newNote' para almacenar el valor del input de nueva nota.
  // Inicializamos 'newNote' como un string vacío.
  const [newNote, setNewNote] = useState('') 

  // Creamos un estado llamado 'showAll' para controlar si se muestran todas las notas o solo las importantes.
  // Inicializamos 'showAll' como true, lo que significa que se mostrarán todas las notas al principio.
  const [showAll, setShowAll] = useState(true) 

  useEffect(()=>{
    console.log('effect')
    axios
      .get('http://localhost:3001/notes')
      .then(response =>{
        console.log('promise fulfilled')
        setNotes(response.data)
      })
  }, [])
  console.log('render', notes.length, 'notes')

  // Función que se ejecuta al enviar el formulario para agregar una nueva nota.
  const addNote = (event) => {
    // Prevenimos el comportamiento por defecto del formulario que es recargar la página.
    event.preventDefault() 

    // Creamos un objeto 'noteObject' que representa la nueva nota con su contenido, importancia e id.
    const noteObject = {
      content: newNote, // El contenido de la nota se toma del estado 'newNote'.
      important: Math.random() < 0.5, // La importancia se genera aleatoriamente.
      id: notes.length + 1, // El id se genera automáticamente incrementando el tamaño del array 'notes'.
    }
  
    // Actualizamos el estado 'notes' concatenando el nuevo objeto 'noteObject' al array existente.
    setNotes(notes.concat(noteObject)) 

    // Limpiamos el input de nueva nota estableciendo el estado 'newNote' como un string vacío.
    setNewNote('') 
  }

  // Función que se ejecuta cada vez que el valor del input de nueva nota cambia.
  const handleNoteChange = (event) => {
    // Imprimimos en consola el nuevo valor del input.
    console.log(event.target.value) 

    // Actualizamos el estado 'newNote' con el nuevo valor del input.
    setNewNote(event.target.value) 
  }

  // Creamos una variable 'notesToShow' que contendrá las notas que se mostrarán en la lista.
  // Si 'showAll' es true, se mostrarán todas las notas.
  // Si 'showAll' es false, se filtrarán las notas para mostrar solo las importantes.
  const notesToShow = showAll
  ? notes
  : notes.filter(note=> note.important )

  // Renderizamos el componente.
  return (
    <div>
      <h1>Notes</h1> {/* Título de la aplicación */}

      <div>
        {/* Botón para alternar entre mostrar todas las notas o solo las importantes */}
        <button onClick={()=> setShowAll(!showAll)}>show {showAll ? 'important':'all'}</button> 
      </div>

      <ul>
        {/* Mapeamos el array 'notesToShow' para renderizar un componente Note por cada nota */}
        {notesToShow.map(note => 
          <Note key={note.id} note={note} /> 
        )}
      </ul>

      {/* Formulario para agregar una nueva nota */}
      <form onSubmit={addNote}> 
        <input 
        value={newNote} // El valor del input está ligado al estado 'newNote'.
        onChange={handleNoteChange} // Se llama a la función 'handleNoteChange' cada vez que el valor del input cambia.
        />
        <button type="submit">save</button> {/* Botón para enviar el formulario */}
      </form>   
    </div>
  )
}

// Exportamos el componente App como el componente por defecto.
export default App 
