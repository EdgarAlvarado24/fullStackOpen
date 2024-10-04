import OneFilterCountry from "./OneFilterCountry";

const ListFiltersCountries = ({ countries, findcountry }) => {
    const filteredCountries = countries.filter((country) =>
      country.name.common.toLowerCase().includes(findcountry.toLowerCase())
    );
  
    return (
      <div>
        {filteredCountries.length === 1 ? (
            <OneFilterCountry filteredCountries={filteredCountries}/>
        ) : filteredCountries.length <= 10 ? (
          <ul>
            {filteredCountries.map((country) => (
              <li key={country.name.common}>{country.name.common}</li>
            ))}
          </ul>
        ) : (
          <p>Too many matches, specify another filter</p>
        )}
      </div>
    );
  };
  
  export default ListFiltersCountries;
  