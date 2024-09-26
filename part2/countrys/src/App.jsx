import { useState, useEffect } from "react"
import serviceCountry from './services/countries'
import CountryList from "./components/countryList";


const App = () => {

  const [findcountry, setFindCountry] = useState('');
  const [countries, setCountries] = useState('');



  useEffect(()=>{
    serviceCountry
      .getAll()
      .then(response => {
        setCountries(response)
        // console.log(countries)
    })  
  },[])


  return(
    <div>
      <CountryList countries={countries} findcountry={findcountry} setFindCountry={setFindCountry}/>
    </div>
  )

}

export default App
