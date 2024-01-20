
import React from "react";
import './../styles/App.css';
import Weather from "./Weather";

const App = () => {
  const weatherData = { temperature: 25, conditions: "Sunny" };

  return (
    <div>
        <Weather weatherData={weatherData}/>
    </div>
  )
}

export default App
