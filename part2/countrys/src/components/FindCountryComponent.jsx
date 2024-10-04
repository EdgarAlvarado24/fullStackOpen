const FindCountryComponent = ({setFindCountry}) =>{

    const handleFindCountry = (event) =>{
        // console.log(event.target.value)
        setFindCountry(event.target.value)
        
    }

    return(
        <div>
            <p>find countries:<input onChange={handleFindCountry}/></p>
        </div>
    )
}

export default FindCountryComponent