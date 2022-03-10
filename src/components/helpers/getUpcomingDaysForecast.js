const getUpcomingDaysForecast = (data) => {
  const items = data.list.map((day) => ({
    temp: day.main.temp + " °C",
  }));
  return items;
};

export default getUpcomingDaysForecast;
