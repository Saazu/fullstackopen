import React from 'react'
import Weather from './Weather'

const Country = ({ country}) => {
  const languagesSpoken = () => ( country.languages.map( language => <p key={language.iso639_1}>{language.name}</p>) );
  return (
    <div>
      <h1>{country.name}</h1>
        <p>Capital {country.capital} </p>
        <p>Population {country.population}</p>
        <h3>languages</h3>
        <>{languagesSpoken()}</>
        <img src={country.flag} alt={country.name} width="100px"/>
        <Weather city={country.capital}/>
    </div>
  );
}

export default Country;