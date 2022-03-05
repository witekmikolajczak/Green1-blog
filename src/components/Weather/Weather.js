import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./Weather.module.css";

const Weather = (props) => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState([]);

  const api = {
    key: "cf7c660938beef44011efd6e5378e6d8",
    url: `http://api.openweathermap.org/data/2.5/`,
  };

  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${api.url}weather?q=${city}&units=metric&APPID=${api.key}`)
        .then((response) => response.json())
        .then((result) => {
          setWeather(result);
          setCity("");
          console.log(result);
        });
    }
  };

  return (
    <Card className={classes.input}>
      <div>
        <label htmlFor="city">Search weather</label>
        <input
          type="text"
          id="city"
          placeholder="Search..."
          onChange={(event) => setCity(event.target.value)}
          value={city}
          onKeyPress={search}
        />
      </div>
      {typeof weather.main != "undefined" ? (
        <div className={classes.result}>
          <ul>
            {weather.name}
            {weather.main.temp}
          </ul>
        </div>
      ) : (
        ""
      )}
    </Card>
  );
};

export default Weather;
