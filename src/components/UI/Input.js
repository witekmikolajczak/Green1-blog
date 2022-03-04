import React, { useState } from "react";
import axios from "axios";
import Button from "./Button";

import classes from "./input.module.css";

const Input = () => {
  const [inputValue, setInputValue] = useState();

  axios
    .get(
      `http://api.openweathermap.org/data/2.5/weather?q=${inputValue}&units=metric&appid=cf7c660938beef44011efd6e5378e6d8`
    )
    .then((res) => {
      const json_data = res.data;
      const data = {
        city: json_data["name"],
        temp: json_data["main"]["temp"] + " C",
      };
      console.log(data);
    });

  const addCityHandler = (event) => {
    event.preventDefault();
  };
  const inputChangeHandler = (event) => {
    console.log(event.target.value);
    setInputValue(event.target.value);
  };

  console.log(inputValue);
  return (
    <form className={classes.input} onSubmit={addCityHandler}>
      <label htmlFor="city-name">City Name: </label>
      <input
        type="text"
        id="city-name"
        value={inputValue}
        onChange={inputChangeHandler}
      />
      <h1>{inputValue}</h1>
      <Button type="submit">Search</Button>
    </form>
  );
};
export default Input;
