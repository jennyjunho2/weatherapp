import { position } from "../utils/interfaces";

export function fetchTimezone(loc: position) {
  const API_KEY = process.env.REACT_APP_GOOGLE_MAP;
  const targetDate = new Date();
  const timestamp =
    targetDate.getTime() / 1000 + targetDate.getTimezoneOffset() * 60;
  const URL = `https://maps.googleapis.com/maps/api/timezone/json?location=${loc.latitude},${loc.longitude}&timestamp=${timestamp}&key=${API_KEY}`;
  return fetch(URL).then((res) => res.json());
}
