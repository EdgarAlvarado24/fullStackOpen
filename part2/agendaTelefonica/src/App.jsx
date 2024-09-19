import { useEffect, useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personsService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterNames, setFilterNames] = useState([])

  useEffect(()=>{
    personsService
    .getAll()
    .then(response=>{
      setPersons(response)
    })
  },[])

  return (
  <div>
    <h2>Phonebook</h2>
    <Filter  filterNames={filterNames} setFilterNames={setFilterNames}/>
    <h3>Add a new</h3>
    <PersonForm newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber} persons={persons} setPersons={setPersons}/>
    <h2>Numbers</h2>
    <Persons persons={persons} filterNames={filterNames} setPersons={setPersons}/>
    </div>
  )
}

export default App