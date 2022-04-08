import { useState } from "react";

import { WeatherModal } from "../WeatherModal/WeatherModal";

import styles from "./Card.module.scss";

export const Card = ({ key_id, weather, onClick, ...props }) => {
  // console.log(weather);
  const [modal, setModal] = useState(false);

  return (
    <div className={styles.card} key={key_id}>
      {modal && (
        <WeatherModal
          onClick={() => setModal(false)}
          hourDetail={weather.hour}
        />
      )}
      <div className={styles.day} onClick={() => setModal(true)}>
        <h1>{weather.day_name}</h1>

        <img src={weather.icon} alt="weather icon" />
        <p>{weather.icon_text}</p>
        <p>Temp avg: {weather.temp_avg}</p>
        <p>Temp max: {weather.temp_max}</p>
        <p>Temp min: {weather.temp_min}</p>
        <p>Humidity {weather.humidity_avg}</p>
      </div>
    </div>
  );
};
