export interface position {
  latitude: number;
  longitude: number;
}

export interface searchLocation {
  confidence: number;
  latitude: number;
  longitude: number;
}

export interface IBuildingTypeProps {
  leftOffset: number;
  opacity: number;
}

export interface WeatherInfo {
  city: string;
  windDirection: string;
  windSpeed: number;
  humidity: number;
  clouds: number;
  pressure: number;
  current: {
    weatherID: number;
    temp: number;
    max: number;
    min: number;
    feel: number;
    description: string;
  };
  oneAfter: {
    weatherID: number;
    temp: number;
    max: number;
    min: number;
    feel: number;
    description: string;
  };
  twoAfter: {
    weatherID: number;
    temp: number;
    max: number;
    min: number;
    feel: number;
    description: string;
  };
  threeAfter: {
    weatherID: number;
    temp: number;
    max: number;
    min: number;
    feel: number;
    description: string;
  };
}
