import moment from "moment";

const getUpcomingDaysForecast = (data) => {
  const items = data.list.map((day) => ({
    id: Math.random(),
    name: moment(day.dt_txt).format("dddd"),
    time: moment(day.dt_txt).format("h:mm:ss a"),
    temp: day.main.temp_max,
  }));
  return items;
};

export default getUpcomingDaysForecast;
