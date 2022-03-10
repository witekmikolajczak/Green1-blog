import React from "react";

import Card from "../UI/Card";
import classes from "./Forecast.module.css";

const Forecast = (props) => {
  const data = props.passForecast;
  data.map((day) => {
    console.log(day);
  });
  return (
    <div className={props.className}>
      <Card>
        <div>Monday: </div>
      </Card>
    </div>
  );
};

export default Forecast;
