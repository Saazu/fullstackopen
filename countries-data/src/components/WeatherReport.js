import React from 'react';

const WeatherReport = ({ weather }) => {
  if (!weather) {
    return <div></div>;
  }
  return (
    <div>
      <p><b>Temperature {weather.current.temp_c} C</b></p>
      <p><img src={weather.current.condition.icon} alt={weather.current.condition.text}/></p>
      <p><b>Wind {weather.current.wind_kph} km/h Direction {weather.current.wind_dir}</b></p>
    </div>
  );
}

export default WeatherReport