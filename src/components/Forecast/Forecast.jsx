import { Card } from "../Card/Card";

import moment from "moment";
import styles from "./Forecast.module.scss";

export const Forecast = ({ forecastWeather }) => {
  // console.log(forecastWeather);
  const forecastDay = forecastWeather.forecastday.map((day) => ({
    day_name: moment(day.date).format("dddd"),
    temp_avg: day.day.avgtemp_c + "°C",
    temp_max: day.day.maxtemp_c + "°C",
    temp_min: day.day.mintemp_c + "°C",
    icon: day.day.condition.icon,
    icon_text: day.day.condition.text,
    humidity_avg: day.day.avghumidity,

    hour: day.hour.map((data) => ({
      icon: data.condition.icon,
      icon_text: data.condition.text,
      temp: data.temp_c + "°C",
      time: moment(data.time).format("hh:mm:ss"),
      humidity: data.humidity,
    })),
  }));

  return (
    <div className={styles.forecast}>
      {forecastDay.map((items) => {
        return <Card weather={items} key={Math.random()} />;
      })}
    </div>
  );
};
