import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ListCountries from './components/ListCountries';

const App = () => {
  const [ countries, setCountries] = useState([]);
  const [ filter, setFilter ] = useState('');

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      }, []);
  })

  const filterHandler = (event) => {
    setFilter(event.target.value);
  }

  return (
    <div>
      find countries <input value={filter} onChange={filterHandler}/>
      <ListCountries countries={countries} filterTerm={filter}/>
    </div>
  );
}

export default App;
