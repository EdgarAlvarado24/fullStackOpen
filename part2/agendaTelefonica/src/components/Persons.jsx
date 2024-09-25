import personsServices from '../services/persons'

const Persons = ({persons, filterNames, setPersons, setNewMessage, setNewStatusMessage}) =>{

  let personsFilterList = persons.filter(person => person.name.toLowerCase().includes(filterNames) ? <h3>{person.name}</h3> : '')
  // console.log(filterNames)
  // persons.filter(person => console.log(person.id))

  const deletePerson = (id) => {
    if (window.confirm(`Delete ${persons.find(p => p.id === id).name}?`)) {
      personsServices
        .remove(id)
        .then(() => {
          setPersons(persons.filter(person => person.id !== id));
        })
        .catch((error) => {
          setNewMessage(
            `${persons.find(p => p.id === id).name} was already deleted from the server.`
          )
          setNewStatusMessage('error')
          setPersons(persons.filter(n => n.id !== id));
        });
    }
  };
  
  return(
        <div>
        {
          personsFilterList.map((filter)=> 
            <h3 key={filter.id}>
              {filter.name} {filter.number}
              <button onClick={()=> deletePerson(filter.id)}>delete</button>
            </h3>
        )}
    </div>
    )
}

export default Persons