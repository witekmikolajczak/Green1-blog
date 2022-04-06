import { Card } from "../Card/Card";

import moment from "moment";
import styles from "./Forecast.module.scss";

export const Forecast = ({ forecastWeather }) => {
  const forecast = forecastWeather.forecastday.map((day) => ({
    day_name: moment(day.date).format("dddd"),
    temp_avg: day.day.avgtemp_c + "°C",
    temp_max: day.day.maxtemp_c + "°C",
    temp_min: day.day.mintemp_c + "°C",
    icon: day.day.condition.icon,
    icon_text: day.day.condition.text,
    humidity_avg: day.day.avghumidity,
  }));

  return (
    <div className={styles.forecast}>
      {forecast.map((items) => {
        return <Card weather={items} id={Math.random()} />;
      })}
    </div>
  );
};
