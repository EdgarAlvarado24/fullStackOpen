const PersonForm = ({newName, setNewName, newNumber, setNewNumber, persons, setPersons}) =>{

    const addPerson = (event) =>{
        event.preventDefault()
    
        const personObject = {
          name: newName,
          number: newNumber,
          id:0
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

    return(
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
    )

}

export default PersonForm