import React from "react";
import UpcomingDaysForecastItem from "../UpcomingDaysForecastItem";
import classes from "./UpcomingDaysForecast.module.css";
const UpcomingDaysForecast = (props) => {
  return (
    <ul className={`${classes.weekList} d-flex justify-content-between p-0`}>
      {props.days.map((day) => {
        {
          console.log(day);
        }
        <UpcomingDaysForecastItem {...day} key={day.name} />;
      })}
    </ul>
  );
};
export default UpcomingDaysForecast;
