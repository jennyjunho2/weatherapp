import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { fetchWeather } from "../../api/fetchWeather";
import BuildingRowOne from "../../components/Anim/BuildingRowOne/BuildingRowOne";
import Fog from "../../components/Anim/Fog/Fog";
import RainSky from "../../components/Anim/RainSky/RainSky";
import River from "../../components/Anim/River/River";
import Sky from "../../components/Anim/Sky/Sky";
import Clouds from "../../components/Anim/StarClouds/Clouds/Clouds";
import Stars from "../../components/Anim/StarClouds/Stars/Stars";
import SunMoon from "../../components/Anim/SunMoon/SunMoon";
import Sidebar from "../../components/Sidebar/Sidebar";
import { currentCoordinateAtom, isCelsiusAtom, isDayAtom, isRainingAtom, isSearchActiveAtom, weatherDataAtom } from "../../utils/atoms";
import { position, WeatherInfo } from "../../utils/interfaces";
import { degToDirection } from "../../utils/misc";
import "./_styles_Mainpage.scss";

function Mainpage() {
  // about Layout
  const [isCelsius, setIsCelsius] = useRecoilState<boolean>(isCelsiusAtom);
  const searchActive = useRecoilValue<boolean>(isSearchActiveAtom);
  const [isDay, setIsDay] = useRecoilState<boolean>(isDayAtom);
  const [isRaining, setIsRaining] = useRecoilState<boolean>(isRainingAtom);
  const [rainDrops, setRainDrops] = useState<number>(100);
  const [isFog, setIsFog] = useState<boolean>(false);
  const [isWind, setIsWind] = useState<boolean>(false);

  // location hook
  const [coordinate, setCoordinate] = useRecoilState<position>(currentCoordinateAtom);

  // weather data hook
  const [weatherData, setWeatherData] = useRecoilState<WeatherInfo>(weatherDataAtom);

  // get location
  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        setCoordinate({
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude
        });
      }, (err) => { console.log(err) });
    } else {
      console.log("Cannot get geolocation");
    }
  };

  // Check is Day or Night
  const getIsDay = () => {
    const hours = new Date().getHours()
    if (hours > 6 && hours < 20) {
      setIsDay(true);
    } else {
      setIsDay(false);
    }
  }

  const getWeather = async (location: position) => {
    const weatherResponse: WeatherInfo = {
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
        description: ""
      },
      oneAfter: {
        weatherID: 800,
        temp: 0,
        max: 0,
        min: 0,
        feel: 0,
        description: ""
      },
      twoAfter: {
        weatherID: 800,
        temp: 0,
        max: 0,
        min: 0,
        feel: 0,
        description: ""
      },
      threeAfter: {
        weatherID: 800,
        temp: 0,
        max: 0,
        min: 0,
        feel: 0,
        description: ""
      }
    }
    await fetchWeather(location)
      .then((data) => {
        weatherResponse.current.weatherID = data.list[0].weather[0].id;
        weatherResponse.city = data.city.name;
        weatherResponse.humidity = data.list[0].main.humidity;
        weatherResponse.clouds = data.list[0].clouds.all;
        weatherResponse.windDirection = degToDirection(data.list[0].wind.deg);
        weatherResponse.windSpeed = data.list[0].wind.speed;
        weatherResponse.pressure = data.list[0].main.pressure;
        weatherResponse.current.temp = data.list[0].main.temp;
        weatherResponse.current.max = data.list[0].main.temp_max;
        weatherResponse.current.min = data.list[0].main.temp_min;
        weatherResponse.current.feel = data.list[0].main.feels_like;
        weatherResponse.current.description = data.list[0].weather[0].description;

        weatherResponse.oneAfter.weatherID = data.list[1].weather[0].id;
        weatherResponse.oneAfter.temp = data.list[1].main.temp;
        weatherResponse.oneAfter.max = data.list[1].main.temp_max;
        weatherResponse.oneAfter.min = data.list[1].main.temp_min;
        weatherResponse.oneAfter.feel = data.list[1].main.feels_like;

        weatherResponse.twoAfter.weatherID = data.list[2].weather[0].id;
        weatherResponse.twoAfter.temp = data.list[2].main.temp;
        weatherResponse.twoAfter.max = data.list[2].main.temp_max;
        weatherResponse.twoAfter.min = data.list[2].main.temp_min;
        weatherResponse.twoAfter.feel = data.list[2].main.feels_like;

        weatherResponse.threeAfter.weatherID = data.list[3].weather[0].id;
        weatherResponse.threeAfter.temp = data.list[3].main.temp;
        weatherResponse.threeAfter.max = data.list[3].main.temp_max;
        weatherResponse.threeAfter.min = data.list[3].main.temp_min;
        weatherResponse.threeAfter.feel = data.list[3].main.feels_like;

        setWeatherData(weatherResponse);
      })
      .catch((error) => console.log(error));
  }

  const getIsRaining = () => {
    const id = weatherData.current.weatherID;
    if (300 <= id && id <= 531) {
      setIsRaining(true);
      setIsDay(false);
      if (300 <= id && id <= 321) {
        setRainDrops(100);
      } else {
        setRainDrops(400);
      }
    } else {
      setIsRaining(false);
    }
  }

  const getAtmosphere = () => {
    const id = weatherData.current.weatherID;
    if (700 <= id && id <= 721) {
      setIsFog(true);
    } else if (id <= 781) {

    }
  }

  const toggleDayNnite = () => { setIsDay(prev => !prev) }
  const mkitRain = () => { setIsRaining(prev => !prev) }

  useEffect(() => {
    getCurrentLocation();
    getIsDay();
    getWeather(coordinate);
    getIsRaining();
  }, [])

  return (
    <div className="TopContainer">
      <Sidebar />
      <div
        className={`MainContainer${searchActive ? " searchActive" : " "}`}
      >
        <div className="MainCanvas">
          {isRaining ?
            <RainSky drops={rainDrops} /> : <Sky />}
          {isRaining ? null : isDay ? <Clouds /> : <Stars />}
          <header>
            <div
              className={`header-TempIcon${!isCelsius ? " activeTransparent" : " "}`}
              onClick={() => { setIsCelsius(false); }}
            >
              °F
            </div>
            <div
              className={`header-TempIcon${isCelsius ? " activeTransparent" : " "}`}
              onClick={() => { setIsCelsius(true); }}
            >
              °C
            </div>
            <button onClick={() => toggleDayNnite()}>Day and Nite</button>
            <button onClick={() => mkitRain()}>Make it Rain</button>
          </header>
          <div className="Zindex1">
            {isRaining ? null : <SunMoon />}
          </div>
          <River />
          <BuildingRowOne leftOffset={0} opacity={1} />
          <BuildingRowOne leftOffset={1400} opacity={1} />
          <Fog />
        </div>
      </div>
    </div>
  );
}

export default Mainpage;