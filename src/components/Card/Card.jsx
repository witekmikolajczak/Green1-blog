import styles from "./Card.module.scss";

export const Card = ({ key_id, weather, ...props }) => {
  //   console.log(weather);
  return (
    <div className={styles.card} key={key_id}>
      <h1>{weather.day_name}</h1>
      <p>Humidity {weather.humidity_avg}</p>
      <img src={weather.icon} alt="weather icon" />
      <p>{weather.icon_text}</p>
      <p>Temp avg: {weather.temp_avg}</p>
      <p>Temp max: {weather.temp_max}</p>
      <p>Temp min: {weather.temp_min}</p>
    </div>
  );
};
