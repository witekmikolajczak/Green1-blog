import React from "react";

import classes from "./UpcomingDaysForecastItem.module.css";

const UpcomingDaysForecastItem = (props) => {
  return (
    <div className={`${props.className} ${classes.weekday}`}>
      <li>
        <span>{props.key}</span>
        <span>{props.temp}</span>
      </li>
    </div>
  );
};
export default UpcomingDaysForecastItem;
