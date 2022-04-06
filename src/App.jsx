import { Box } from "./components/Box/Box";
import { Forecast } from "./components/Forecast/Forecast";
import styles from "./App.module.scss";
import { useState } from "react";
function App() {
  const [forecast, setForecast] = useState();

  return (
    <div className={styles.app}>
      <div className={styles.wrapper}>
        <Box forecastWeather={(data) => setForecast(data)} />
      </div>

      <div className={styles.forecast}>
        {forecast !== undefined && <Forecast forecastWeather={forecast} />}
      </div>
    </div>
  );
}

export default App;
