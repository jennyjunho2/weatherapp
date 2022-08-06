import { SkyconType } from "react-skycons-extended";

export function getCurrentDate(offset: number = 0): string {
  const ArrayDayStr = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const ArrayMonthStr = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let today = new Date();
  today.setDate(today.getDate() + offset);
  let todayDay = ArrayDayStr[today.getDay()];
  let todayMonth = ArrayMonthStr[today.getMonth()];
  let todayDate = today.getDate();
  return `${todayDay}, ${todayMonth} ${todayDate < 10 ? "0" + todayDate.toString() : todayDate
    }`;
}

export function degToDirection(deg: number | undefined): string | undefined {
  if (deg === undefined) { return undefined }
  const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
  const dir = Math.round(deg * 8 / 360);
  return directions[(dir + 8) % 8];
}

export function celtoFar(temp: number | undefined) {
  return (temp === undefined) ? undefined : (1.8 * temp + 32.00);
}

export function IDtoAnimatedIcon(id: number) {
  const hours = new Date().getHours();
  const isDayTime = hours > 6 && hours < 20;

  if (200 <= id && id <= 232) {
    //ThunderStorm
    if ((200 <= id && id <= 202) || (230 <= id && id <= 232)) {
      return isDayTime ? SkyconType.THUNDER_SHOWERS_DAY : SkyconType.THUNDER_SHOWERS_NIGHT;
    } else {
      return SkyconType.THUNDER;
    }
  } else if (300 <= id && id <= 321) {
    // Drizzle
    return SkyconType.RAIN;
  } else if (500 <= id && id <= 531) {
    // Rain
    return isDayTime ? SkyconType.SHOWERS_DAY : SkyconType.SHOWERS_NIGHT;
  } else if (600 <= id && id <= 622) {
    // Snow
    if (600 <= id && id <= 602) {
      return SkyconType.SNOW;
    } else if (611 <= id && id <= 613) {
      return SkyconType.SLEET;
    } else if (615 <= id && id <= 616) {
      return isDayTime ? SkyconType.RAIN_SNOW_SHOWERS_DAY : SkyconType.RAIN_SNOW_SHOWERS_NIGHT;
    } else {
      return isDayTime ? SkyconType.SNOW_SHOWERS_DAY : SkyconType.SNOW_SHOWERS_NIGHT
    }
  } else if (700 <= id && id <= 781) {
    // Atmosphere
    if (700 <= id && id <= 721) {
      return SkyconType.FOG;
    } else {
      return SkyconType.WIND;
    }
  } else if (id === 800) {
    // Clear
    return isDayTime ? SkyconType.CLEAR_DAY : SkyconType.CLEAR_NIGHT;
  } else if (id === 801 || id === 802) {
    // Partly Cloud
    return isDayTime ? SkyconType.PARTLY_CLOUDY_DAY : SkyconType.PARTLY_CLOUDY_NIGHT;
  } else if (id === 803 || id === 804) {
    // Cloud
    return SkyconType.CLOUDY;
  } else {
    return SkyconType.CLEAR_DAY;
  }
}