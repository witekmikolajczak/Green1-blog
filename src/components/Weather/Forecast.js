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
          {data.map((day) => {
            switch (day.name) {
              case "Wednesday":
                let max = [];

                console.log("max: " + Math.max(day.temp));
            }
          })}
        </div>
      </Card>
    </div>
  );
};

export default Forecast;
