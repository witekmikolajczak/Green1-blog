import React from "react";

import Card from "../UI/Card";
import classes from "./Forecast.module.css";

const Forecast = (props) => {
  const buttonHandler = props.buttonEvent;
  console.log(props.passData);
  return (
    <Card
      className={buttonHandler ? classes.forecast : classes["forecast-hide"]}
    >
      <div></div>
    </Card>
  );
};

export default Forecast;
