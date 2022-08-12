import { position } from "../utils/interfaces";

export function fetchWeather(loc: position) {
  const API_KEY = process.env.REACT_APP_WEATHER_APIKEY2;
  const URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${loc.latitude}&lon=${loc.longitude}&units=metric&cnt=4&lang=en&mode=json&APPID=${API_KEY}`;
  return fetch(URL).then((res) => res.json());
}
