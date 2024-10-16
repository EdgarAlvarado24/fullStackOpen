import personsServices from '../services/persons'

const PersonForm = ({newName, setNewName, newNumber, setNewNumber, persons, setPersons, setNewMessage, setNewStatusMessage}) =>{

    const addPerson = (event) =>{
        event.preventDefault()
    
        const personObject = {
          name: newName,
          number: newNumber
        }

        const personsExist = persons.some((person) => person.name === newName)
        console.log('personsDontExist',!personsExist)
        if (!personsExist){
          setPersons(persons.concat(personObject))
          personsServices
          .create(personObject)
          .then(response => {
            console.log('response',response)
          })
          .then(returnedPerson =>{
            setPersons(persons.concat(returnedPerson))
            setNewMessage(`agregado ${newName}`)
            setNewStatusMessage('add')
            setTimeout(()=>{
                  setNewMessage(null)
            },3000)
          })
          .catch(response => 
            setNewMessage(response.toString()),
            setTimeout(()=>{
              setNewMessage(null)
            },5000),
            setPersons(persons.filter(person => person.name != personObject.name ? person : ''))
          )

        }else{
          // alert(`${newName} is already added to phonebook`)
          if (window.confirm(`${persons.find(person=> person.name === newName).name } ya existe, quieres cambiar el numero?`))
          personsServices
          .update(persons.find(person => person.name === newName).id, personObject)
          .then(returnedPerson =>{
            setPersons(persons.map(person => person.name != newName ? person : returnedPerson))
          })
          .catch(
            () =>{
              setNewMessage(
                `Information of ${persons.find(person=> person.name === newName).name} has already been removed from server`
              )
              setNewStatusMessage('error')
              setTimeout(()=>{
                setNewMessage(null)
              },3000)
            }
          )
          
        }
        setNewName('')
        setNewNumber('') 
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