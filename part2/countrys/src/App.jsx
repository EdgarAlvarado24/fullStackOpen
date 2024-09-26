import { useState, useEffect } from "react"
import serviceCountry from './services/countries'


const App = () => {

  const [findcountry, setFindCountry] = useState('');
  const [countries, setCountries] = useState('');

  const handleFindCountry = (event) =>{
    // console.log(event.target.value)
    setFindCountry(event.target.value)
    
  }

  useEffect(()=>{
    serviceCountry
      .getAll()
      .then(response => {
        setCountries(response)
        // console.log(countries)
    })  
  },[])

  let listOfCountries = countries.map(country =>country.name.common)

  let countriesMatch = listOfCountries.filter(filterCountry => findcountry != '' ? filterCountry.toLowerCase().startsWith(findcountry) : '')


  console.log(countriesMatch.length)
  
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

export default App
