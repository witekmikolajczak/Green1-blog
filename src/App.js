import React, { useState } from "react";

import Weather from "./components/Weather/Weather.js";
import Forecast from "./components/Weather/Forecast.js";
import classes from "./App.module.css";

function App() {
  const [buttonEvent, setButtonEvent] = useState(false);
  const [forecast, setForecast] = useState();

  const buttonClick = () => {
    setButtonEvent(true);
  };

  const forecastHandler = (data) => {
    setForecast(data);
  };
  return (
    <div className={classes.app}>
      <Weather onButtonClick={buttonClick} onForecast={forecastHandler} />
      {buttonEvent && (
        <Forecast className={classes.forecast} passForecast={forecast} />
      )}
    </div>
  );
}

export default App;
// buttonEvent={buttonEvent}
