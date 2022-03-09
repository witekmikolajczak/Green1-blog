import React, { useState } from "react";

import Weather from "./components/Weather/Weather.js";
import Forecast from "./components/Weather/Forecast.js";
import classes from "./App.module.css";

function App() {
  const [buttonEvent, setButtonEvent] = useState(false);

  const buttonClick = () => {
    setButtonEvent(true);
  };

  return (
    <div className={classes.app}>
      <Weather onButtonClick={buttonClick} />
      <Forecast buttonEvent={buttonEvent} />
    </div>
  );
}

export default App;
