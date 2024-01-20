import React from "react";

const Weather=({weatherData})=>{
    const threshold = 20;
    const TemperatureColor = weatherData.Temperature > threshold ? 'red' : 'blue';

    return(
        <div>
         <h2>Current Weather</h2>
      <p>
        Temperature: 
        <span style={{ color: TemperatureColor }}>
          {weatherData.Temperature}
        </span>
      </p>
      <p>Conditions: {weatherData.conditions}</p>
        </div>
    )
}
export default Weather;