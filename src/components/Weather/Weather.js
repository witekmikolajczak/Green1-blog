import React, { useState } from "react";

import Card from "../UI/Card";
import classes from "./Weather.module.css";
import { base_url } from "../api/url";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState([]);

  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${base_url}&q=${city}`)
        .then((response) => response.json())
        .then((result) => {
          setWeather(result);
          setCity("");
          console.log(result);
        });
    }
  };

  return (
    <Card
      className={
        typeof weather.main != "undefined"
          ? weather.main.temp > 15
            ? classes.warm
            : classes.cold
          : classes.card
      }
    >
      <div className={classes.weather}>
        <label htmlFor="city">
          <b>Search weather</b>
        </label>
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
          <p>
            City: {weather.name} {weather.sys.country}
          </p>
          <h2>{weather.main.temp} °C</h2>
          {/* <h2>Humidity: {weather.main.humidity} %</h2> */}
        </div>
      ) : (
        ""
      )}
    </Card>
  );
};

export default Weather;
