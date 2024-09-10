import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addPerson = (event) =>{
    event.preventDefault()

    const personObject = {
      name: newName,
      number: newNumber,
    }

    const personsExist = (person) => person.name === newName
    
    if (persons.some(personsExist)){
      alert(`${newName} is already added to phonebook`)
    }else{
      setPersons(persons.concat(personObject))
    }

    setNewName('')
  }

  const handlePersonChange = (event) =>{
    // console.log(event.target.value)
         
    setNewName(event.target.value)

  }

  const handlNumberChange = (event) =>{
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input  value={newName} onChange={handlePersonChange}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handlNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
          {
            persons.map((person)=> 
              <h3 key={person.id}>
                {person.name} {person.number}
              </h3>
          )}
      </div>
    </div>
  )
}

export default App