import { useEffect, useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personsService from './services/persons'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterNames, setFilterNames] = useState([])
  const [newMessage, setNewMessage] = useState(null)
  const [newStatusMessage, setNewStatusMessage] = useState('')

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
    <Notification message={newMessage} status={newStatusMessage}/>
    <Filter  filterNames={filterNames} setFilterNames={setFilterNames} />
    <h3>Add a new</h3>
    <PersonForm newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber} persons={persons} setPersons={setPersons} setNewMessage={setNewMessage} setNewStatusMessage={setNewStatusMessage}/>
    <h2>Numbers</h2>
    <Persons persons={persons} filterNames={filterNames} setPersons={setPersons} setNewMessage={setNewMessage} setNewStatusMessage={setNewStatusMessage} />
    </div>
  )
}

export default App