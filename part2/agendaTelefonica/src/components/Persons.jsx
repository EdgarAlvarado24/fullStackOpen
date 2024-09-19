import personsServices from '../services/persons'

const Persons = ({persons, filterNames, setPersons}) =>{

  let personsFilterList = persons.filter(person => person.name.toLowerCase().includes(filterNames) ? <h3>{person.name}</h3> : '')

  // persons.filter(person => console.log(person.name))

  const deletePerson = (id) =>{

      personsServices
      .remove(id)
      .then(returnedPerson => {
        setPersons(persons.map(person => 
          person.id !== id ? person: returnedPerson))
      })
      
  }
  
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