import React from "react";

import Card from "../UI/Card";
import UpcomingDaysForecast from "../UI/UpcomingDaysForecast/UpcomingDaysForecast";
import classes from "./Forecast.module.css";

const Forecast = (props) => {
  const data = props.passForecast.upcomingDays;

  // const day = data.map((day) => ({
  //   id: Math.random(),
  //   weekDay: day.name,
  //   dayTemp: day.temp,
  // }));
  console.log(data);
  return (
    <div className={props.className}>
      <Card>
        <div>
          {/* Monday:
          {data.slice(1).map((day) => (
            <li key={day.id}>{day.temp}</li>
          ))}{" "} */}
          {/* {day.map((day) => (
            <li key={day.id}>{day.weekDay}</li>
          ))} */}
          <UpcomingDaysForecast days={data} temp="19*" />
        </div>
      </Card>
    </div>
  );
};

export default Forecast;
