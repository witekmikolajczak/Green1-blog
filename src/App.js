import React from "react";

import Weather from "./components/Weather/Weather.js";
import classes from "./App.module.css";

function App() {
  return (
    <div className={classes.app}>
      <Weather />
    </div>
  );
}

export default App;
