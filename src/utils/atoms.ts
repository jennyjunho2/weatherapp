import { atom } from "recoil";
import { position, WeatherInfo } from "./interfaces";

export const isCelsiusAtom = atom<boolean>({
  key: "isCelsius",
  default: true,
});

export const currentCoordinateAtom = atom<position>({
  key: "currentCoordinate",
  default: {
    longitude: 126.8682,
    latitude: 37.5179,
  },
});

export const isDayAtom = atom<boolean>({
  key: "isDay",
  default: true,
});

export const isRainingAtom = atom<boolean>({
  key: "isRaining",
  default: false,
});

export const isSearchActiveAtom = atom<boolean>({
  key: "searchActive",
  default: false,
});

export const isLoadingAtom = atom<boolean>({
  key: "loading",
  default: false,
});

export const weatherDataAtom = atom<WeatherInfo>({
  key: "weatherData",
  default: {
    city: "Seoul",
    windDirection: "N",
    windSpeed: 0,
    humidity: 0,
    clouds: 0,
    pressure: 0,
    current: {
      weatherID: 800,
      temp: 0,
      max: 0,
      min: 0,
      feel: 0,
      description: "",
    },
    oneAfter: {
      weatherID: 800,
      temp: 0,
      max: 0,
      min: 0,
      feel: 0,
      description: "",
    },
    twoAfter: {
      weatherID: 800,
      temp: 0,
      max: 0,
      min: 0,
      feel: 0,
      description: "",
    },
    threeAfter: {
      weatherID: 800,
      temp: 0,
      max: 0,
      min: 0,
      feel: 0,
      description: "",
    },
  },
});
