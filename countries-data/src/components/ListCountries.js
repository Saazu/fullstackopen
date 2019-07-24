import React from 'react';
import Country from './Country'

const ListCountries = ({ countries, filterTerm }) => {
  let countriesToShow = [];

  if (filterTerm) {
    countriesToShow = countries.filter( country => country.name.toLowerCase().includes(filterTerm.toLowerCase()))
  }

  if (countriesToShow.length > 10) {
    return <p>Too many matches, specify another filter</p>

  } else if (countriesToShow.length === 1 ) {
    return (
      <div>
        <Country country={countriesToShow[0]}/>
      </div>
    );
    
  }  else {
    const rows = () => {
      return countriesToShow.map( country => <p key={country.name}>{country.name}</p>)
    };
    return (
      <>{rows()}</>
    );
  }
}

export default ListCountries