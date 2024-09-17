const Persons = ({persons, filterNames}) =>{

  let personsFilterList = persons.filter(person => person.name.toLowerCase().includes(filterNames) ? <h3>{person.name}</h3> : '')
    return(
        <div>
        {
          personsFilterList.map((filter)=> 
            <h3 key={filter.id}>
              {filter.name} {filter.number}
            </h3>
        )}
    </div>
    )
}

export default Persons