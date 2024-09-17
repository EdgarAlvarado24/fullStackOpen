const Filter = ({filterNames, setFilterNames}) =>{
    // console.log(filterNames,handleFilterChange)

    const handleFilterChange = (event) =>{
        setFilterNames(event.target.value)
      }
    
    return(
        <div>
            filter shown with <input value={filterNames} onChange={handleFilterChange}/>
        </div>
    )

}

export default Filter;