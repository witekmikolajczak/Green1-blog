import React from "react";

import Card from "../UI/Card";
import UpcomingDaysForecast from "../UI/UpcomingDaysForecast/UpcomingDaysForecast";
import classes from "./Forecast.module.css";

const Forecast = (props) => {
  return (
    <div className={props.className}>
      <Card></Card>
    </div>
  );
};

export default Forecast;
