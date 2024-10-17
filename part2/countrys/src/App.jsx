import { useState, useEffect } from "react"
import serviceCountry from './services/countries'
import FindCountryComponent from "./components/FindCountryComponent";
import ListFiltersCountries from "./components/ListFiltersCountries";


const App = () => {

  const [findcountry, setFindCountry] = useState('');
  const [countries, setCountries] = useState('');



  useEffect(()=>{
    serviceCountry
      .getAll()
      .then(response => {
        setCountries(response)
    })  
  },[])


  return(
    <div>
      <FindCountryComponent setFindCountry={setFindCountry}/>
      {countries.length > 0 &&(
      <ListFiltersCountries countries={countries} findcountry={findcountry}/>
      )}
    </div>
  )

}

export default App
