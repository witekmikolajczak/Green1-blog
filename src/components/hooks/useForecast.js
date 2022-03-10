import axios from "axios";
import { useState } from "react";
import { forecast_url } from "../api/url";
import getUpcomingDaysForecast from "../helpers/getUpcomingDaysForecast";

const useForecast = (props) => {
  const [isError, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [forecast, setForecast] = useState(null);

  const gatherForecastData = (data) => {
    const upcomingDays = getUpcomingDaysForecast(data);
    setForecast({ upcomingDays });
  };

  const submitRequest = async (city) => {
    const { data } = await axios(`${forecast_url}&q=${city}`);
    if (!data || data.length === 0) {
      setError("No such location");
      return;
    }
    gatherForecastData(data);
  };
  return { isError, isLoading, forecast, submitRequest };
};
//connect to Weather.js

export default useForecast;
