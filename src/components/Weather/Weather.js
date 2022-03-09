import React, { useState } from "react";

import Card from "../UI/Card";
import classes from "./Weather.module.css";
import { base_url } from "../api/url";

// custom hooks
import useForecast from "../hooks/useForecast";
import Forecast from "./Forecast";

const Weather = (props) => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState([]);
  const [showForecast, setShowForecast] = useState(false);

  // pass data from useForecast.js via props to Forecast component
  const [item, setItems] = useState();

  //connect to useForecast.js
  const { isError, isLoading, forecast, submitRequest } = useForecast();

  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${base_url}&q=${city}`)
        .then((response) => response.json())
        .then((result) => {
          setWeather(result);
          setCity("");
          submitRequest(city);
          setItems(forecast);
        });
    }
  };

  // handle button click to show forecast div
  const buttonHandler = () => {
    setShowForecast(true);
    props.onButtonClick(showForecast);
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
        <button id="btn" onClick={buttonHandler}>
          Forecast
        </button>
      </div>
      {typeof weather.main != "undefined" ? (
        <div className={classes.result}>
          <p>
            City: {weather.name} {weather.sys.country}
          </p>
          <h2>{weather.main.temp} °C</h2>
        </div>
      ) : (
        ""
      )}
      {/* pass data from state to Forecast component */}
      <div>{forecast && <Forecast passData={item} />}</div>
    </Card>
  );
};

export default Weather;
