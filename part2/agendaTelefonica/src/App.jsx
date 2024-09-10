import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const addPerson = (event) =>{
    event.preventDefault()

    const personObject = {
      name: newName,
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
    console.log(event.target.value)
    

      
      setNewName(event.target.value)

  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input  value={newName} onChange={handlePersonChange}/>
        </div>
        <div>debug: {newName}</div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
          {
            persons.map((person)=> 
              <h3 key={person.id}>
                {person.name}
              </h3>
          )}
      </div>
    </div>
  )
}

export default App