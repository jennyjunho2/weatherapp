import { IconContext } from "@react-icons/all-files";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { TiChevronLeft } from "@react-icons/all-files/ti/TiChevronLeft";
import { useEffect } from 'react';
import { Link } from "react-router-dom";
import { ReactSkycon, SkyconType } from 'react-skycons-extended';
import { useRecoilState, useRecoilValue } from "recoil";
import { fetchWeather } from "../../api/fetchWeather";
import Sidebar from "../../components/Sidebar/Sidebar";
import { currentCoordinateAtom, isCelsiusAtom, isSearchActiveAtom, weatherDataAtom } from "../../utils/atoms";
import { position, WeatherInfo } from "../../utils/interfaces";
import { celtoFar, degToDirection, getCurrentDate, IDtoAnimatedIcon } from "../../utils/misc";
import './_styles_Summary.scss';

function Summary() {
  // about Layout
  const [isCelsius, setIsCelsius] = useRecoilState<boolean>(isCelsiusAtom);
  const searchActive = useRecoilValue<boolean>(isSearchActiveAtom);

  // location hook
  const [coordinate, setCoordinate] = useRecoilState<position>(currentCoordinateAtom);

  // weather data state
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

  //////////////////////////////////////////////////////////////////////////////////////////
  // Initial State
  useEffect(() => {
    getCurrentLocation();
    getWeather(coordinate);
  }, [weatherData.city]);

  return (
    <div className="App">
      <Sidebar />
      <div
        className={`MainContainer${searchActive ? " searchActive" : " "}`}
      >
        <div className="BackToMainPage">
          <Link to="/">
            <IconContext.Provider value={{ className: "Icon" }}>
              <TiChevronLeft />
            </IconContext.Provider>
          </Link>
        </div>
        <div className="MainPage">
          <header>
            <div
              className={`TempIcon${!isCelsius ? " active" : " "}`}
              onClick={() => { setIsCelsius(false); }}
            >
              °F
            </div>
            <div
              className={`TempIcon${isCelsius ? " active" : " "}`}
              onClick={() => { setIsCelsius(true); }}
            >
              °C
            </div>
          </header>
          <div className="WeekWeather">
            <div className="Card Today">
              <span className="DateSpan">{getCurrentDate(1)}</span>
              <ReactSkycon
                color='white'
                icon={IDtoAnimatedIcon(weatherData.oneAfter.weatherID) || SkyconType.CLEAR_DAY}
                animate={true}
                size={60}
                resizeClear={true}
              />
              <span className="DescriptionSpan">
                {weatherData.oneAfter.description}
              </span>
              <span className="TemperatureSpan">
                {isCelsius ? `${weatherData.oneAfter.temp?.toFixed(2)}°C` : `${celtoFar(weatherData.oneAfter.temp)?.toFixed(2)}°F`}
              </span>
            </div>
            <div className="Card Tomorrow">
              <span className="DateSpan">{getCurrentDate(2)}</span>
              <ReactSkycon
                color='white'
                icon={IDtoAnimatedIcon(weatherData.twoAfter.weatherID) || SkyconType.CLEAR_DAY}
                animate={true}
                size={60}
                resizeClear={true}
              />
              <span className="DescriptionSpan">
                {weatherData.twoAfter.description}
              </span>
              <span className="TemperatureSpan">
                {isCelsius ? `${weatherData.twoAfter.temp?.toFixed(2)}°C` : `${celtoFar(weatherData.twoAfter.temp)?.toFixed(2)}°F`}
              </span>
            </div>
            <div className="Card TomorrowTomorrow">
              <span className="DateSpan">{getCurrentDate(3)}</span>
              <ReactSkycon
                color='white'
                icon={IDtoAnimatedIcon(weatherData.threeAfter.weatherID) || SkyconType.CLEAR_DAY}
                animate={true}
                size={60}
                resizeClear={true}
              />
              <span className="DescriptionSpan">
                {weatherData.threeAfter.description}
              </span>
              <span className="TemperatureSpan">
                {isCelsius ? `${weatherData.threeAfter.temp?.toFixed(2)}°C` : `${celtoFar(weatherData.threeAfter.temp)?.toFixed(2)}°F`}
              </span>
            </div>
          </div>
          <div className="MiddleSpan">
            <span>⚡Today's Summary⚡</span>
          </div>
          <div className="TodayHighlight">
            <div className="Bigcard">
              <span>Wind Status 🍃</span>
              <h2>{weatherData.windSpeed}<span>mph</span></h2>
              <span>{weatherData.windDirection}</span>
            </div>
            <div className="Bigcard">
              <span>Humidity 💧</span>
              <h2>{weatherData.humidity}<span>%</span></h2>
              <progress
                value={weatherData.humidity}
                max="100"
              ></progress>
            </div>
            <div className="Bigcard TwoElement">
              <span>Air Pressure 🌀</span>
              <h2>{weatherData.pressure}<span>hPa</span></h2>
            </div>
            <div className="Bigcard TwoElement">
              <span>Clouds ☁️</span>
              <h2>{weatherData.clouds}<span>%</span></h2>
            </div>
          </div>
          <footer>
            <a
              href="https://github.com/jennyjunho2/weatherapp"
              target="_blank"
              rel="noopener noreferrer"
              title="Repo Link"
            >
              <FaGithub className="GithubIcon" size="36" />
            </a>
          </footer>
        </div>
      </div>
    </div >
  );
}

export default Summary;