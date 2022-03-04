import Weather from "./components/UI/Weather.js";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "./components/UI/Button.js";
import Result from "./components/UI/Result.js";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState([]);
  const api = {
    key: "cf7c660938beef44011efd6e5378e6d8",
    url: `http://api.openweathermap.org/data/2.5/`,
  };

  let boolean = false;
  const search = () => {
    boolean = true;
    // if (e.key === "Enter") {
    axios
      .get(`${api.url}weather?q=${city}&units=metric&appid=${api.key}`)
      .then((response) => {
        setWeather(response);
        setCity("");
      });
    // }
  };

  // console.log(weather.data);

  return (
    <React.Fragment>
      <label htmlFor="city-name">City Name: </label>
      <input
        type="text"
        id="city-name"
        placeholder="Search..."
        onChange={(event) => setCity(event.target.value)}
        value={city}
        // onKeyPress={search}
      />
      <Button onClick={search}>Search</Button>
      {boolean ? <Result data={weather.data} /> : (boolean = false)}
    </React.Fragment>
  );
}

export default App;
