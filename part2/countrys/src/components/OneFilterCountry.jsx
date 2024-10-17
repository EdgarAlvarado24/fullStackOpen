const OneFilterCountry = ({filteredCountries}) =>{
    console.log(filteredCountries)
    return (
        <div>
            <p>{filteredCountries[0].name.common}</p>
            <p>{`capital ${filteredCountries[0].capital}`}</p>
            <p>{`area ${filteredCountries[0].area}`}</p>
            <div>
                <p>languajes:</p>
                <ul>
                    {Object.values(filteredCountries[0].languages).map((language) => (
                    <li key={language}>{language}</li> 
                    ))}
                </ul>
                {<img src={filteredCountries[0].flags.png}/>}
            </div>
        </div>
    )
}

export default OneFilterCountry