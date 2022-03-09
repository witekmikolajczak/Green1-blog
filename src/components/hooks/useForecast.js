import axios from "axios";
import { useState } from "react";
import { forecast_url } from "../api/url";

const useForecast = (props) => {
  const [isError, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [forecast, setForecast] = useState(null);

  const submitRequest = async (city) => {
    const { data } = await axios(`${forecast_url}&q=${city}`);
    if (!data || data.length === 0) {
      setError("No such location");
      return;
    }
    setForecast(data);
  };
  return { isError, isLoading, forecast, submitRequest };
};
//connect to Weather.js

export default useForecast;
