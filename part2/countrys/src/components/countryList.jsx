const CountryList = ({countries, findcountry, setFindCountry}) =>{

    const handleFindCountry = (event) =>{
        // console.log(event.target.value)
        setFindCountry(event.target.value)
        
    }

    if(countries.length != 0){
        let listOfCountries = countries.map(country =>country.name.common)

        let countriesMatch = listOfCountries.filter(filterCountry => findcountry != '' ? filterCountry.toLowerCase().startsWith(findcountry) : '')

        if(findcountry == ''){
  
            return (
              <div>
                  <p>find countries:<input onChange={handleFindCountry}/></p>
                  <p></p>
              </div>
            )
        
          }else if(countriesMatch.length < 10) {
        
            return (
              <div>
                  <p>find countries:<input onChange={handleFindCountry}/></p>
                  {countriesMatch.map((country, index)=> <p key={index}> {country}</p>)}
              </div>
            )
        
          }else if(countriesMatch.length > 10){
            return (
              <div>
                  <p>find countries:<input onChange={handleFindCountry}/></p>
                  <p>Too many matches, specify another filter</p>
              </div>
            )
          }
    }


  
  
    // console.log(countriesMatch.length)
    


}

export default CountryList