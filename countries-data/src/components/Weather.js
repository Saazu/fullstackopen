import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherReport from './WeatherReport'

const Weather = ({ city }) => {
  const [ weather, setWeather ] = useState('');

  useEffect(() => {
    axios
      .get(`http://api.apixu.com/v1/current.json?key=7ee84da1f8df4b13914152558191207&q=${city}`)
      .then(response => {
        setWeather(response.data)
      })
  }, []);

  return (
    <div>
      <h2>Weather</h2>
      <WeatherReport weather={weather}/>
    </div>

  );
}

export default Weather