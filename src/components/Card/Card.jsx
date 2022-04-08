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
        <div className={styles.center}>
          <h1>{weather.day_name}</h1>
          <img src={weather.icon} alt="weather icon" />
          <p>{weather.icon_text}</p>
        </div>

        <p>
          <a>Temp avg:</a> {weather.temp_avg}
        </p>
        <p>
          <a>Temp max:</a> {weather.temp_max}
        </p>
        <p>
          <a>Temp min:</a> {weather.temp_min}
        </p>
        <p>
          <a>Humidity</a> {weather.humidity_avg}%
        </p>
      </div>
    </div>
  );
};
