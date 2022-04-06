import moment from "moment";
export const getUpcomingDays = (data) => {
  const dailyForecast = data.daily.map((day) => ({
    date: moment(day.dt).format("MMM Do YY"),
    temp: day.temp.max,
    humidity: day.humidity,
  }));
  return dailyForecast;
};
