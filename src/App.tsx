import { IconContext } from "@react-icons/all-files";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { MdMyLocation } from "@react-icons/all-files/md/MdMyLocation";
import React, { useEffect, useState } from 'react';
import { ReactSkycon, SkyconType } from 'react-skycons-extended';
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './App.scss';
import LoadingCircle from "./components/LoadingCircle";
import useMediaQuery from "./hooks/useMediaQuery";
import { position, searchLocation } from "./utils/interfaces";
import { celtoFar, degToDirection, getCurrentDate, IDtoAnimatedIcon } from "./utils/misc";

function App() {
  // about Layout
  const [isCelsius, setIsCelsius] = useState<boolean>(true);
  const [searchActive, setSearchActive] = useState<boolean>(false);

  // location hook
  const [pos, setPos] = useState<position>({ longitude: 126.8682, latitude: 37.5179 });
  const [city, setCity] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);

  // weather data hooks
  const [mainWeatherID, setMainWeatherID] = useState<number>(800);
  const [windDirection, setWindDirection] = useState<string | undefined>(undefined);
  const [windSpeed, setWindSpeed] = useState<number | undefined>(undefined);
  const [humidity, setHumidity] = useState<number | undefined>(undefined);
  const [clouds, setClouds] = useState<number>(0);
  const [temp, setTemp] = useState<number | undefined>(undefined);
  const [tempMax, setTempMax] = useState<number | undefined>(undefined);
  const [tempMin, setTempMin] = useState<number | undefined>(undefined);
  const [tempFeel, setTempFeel] = useState<number | undefined>(undefined);
  const [pressure, setPressure] = useState<number | undefined>(undefined);
  const [desc, setDesc] = useState<string | undefined>(undefined);

  const [tomorrowMainWeatherID, setTomorrowMainWeatherID] = useState<number>(800);
  const [tomorrowTemp, setTomorrowTemp] = useState<number | undefined>(undefined);
  const [tomorrowDesc, setTomorrowDesc] = useState<string | undefined>(undefined);
  const [twoMainWeatherID, setTwoMainWeatherID] = useState<number>(800);
  const [twoTemp, setTwoTemp] = useState<number | undefined>(undefined);
  const [twoDesc, setTwoDesc] = useState<string | undefined>(undefined);
  const [threeMainWeatherID, setThreeMainWeatherID] = useState<number>(800);
  const [threeTemp, setThreeTemp] = useState<number | undefined>(undefined);
  const [threeDesc, setThreeDesc] = useState<string | undefined>(undefined);

  // Get today Date and covert to Date String
  const today = new Date(Date.now()).toDateString();

  // get location
  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        setPos({
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude
        });
      }, (err) => { console.log(err) });
    } else {
      console.log("Cannot get geolocation");
    }
  };

  const setLocation = async (query: string) => {
    const API_KEY = process.env.REACT_APP_GETLOCATION_APIKEY;
    const BASE_URL = `http://api.positionstack.com/v1/forward?access_key=${API_KEY}&query=${query}&output=json`;
    setLoading(true);
    try {
      console.log("Start Fetching...");
      const rawJson = await (await fetch(BASE_URL)).json();

      const dataArray: searchLocation[] = rawJson.data;

      if (!dataArray.length) {
        toast.error('Search Failed. Try Another Search.');
      } else {
        for (const data of dataArray) {
          if (data.confidence > 0.8) {
            setPos({
              latitude: data.latitude,
              longitude: data.longitude
            });
            getWeather(pos);
            break;
          }
        }
      }
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
    setSearchActive(false);
  }

  // get Weather by API key
  const getWeather = async (location: position) => {
    const API_KEY = process.env.REACT_APP_WEATHER_APIKEY2;
    const BASE_URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${location.latitude}&lon=${location.longitude}&units=metric&cnt=4&lang=en&mode=json&APPID=${API_KEY}`;

    try {
      const res = await fetch(BASE_URL);
      const data = await res.json();

      const today = data.list[0];
      const tomorrow = data.list[1];
      const two = data.list[2];
      const three = data.list[3];
      setMainWeatherID(today.weather[0].id)
      setCity(data.city.name);
      setHumidity(today.main.humidity);
      setClouds(today.clouds.all);
      setWindDirection(degToDirection(today.wind.deg));
      setWindSpeed(today.wind.speed);
      setTemp(today.main.temp);
      setTempMax(today.main.temp_max);
      setTempMin(today.main.temp_min);
      setTempFeel(today.main.feels_like);
      setPressure(today.main.pressure);
      setDesc(today.weather[0].description);

      setTomorrowMainWeatherID(tomorrow.weather[0].id);
      setTwoMainWeatherID(two.weather[0].id);
      setTomorrowTemp(tomorrow.main.temp);
      setTwoTemp(two.main.temp);
      setThreeMainWeatherID(three.weather[0].id);
      setThreeTemp(three.main.temp);
      setTomorrowDesc(tomorrow.weather[0].description);
      setTwoDesc(two.weather[0].description);
      setThreeDesc(three.weather[0].description);
    } catch (err) {
      return console.log(err);
    }
  };

  const handleLocationClick = () => {
    getCurrentLocation();
    getWeather(pos);
  };

  const handleEnterPress = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === "Enter") {
      let keyword = (document.getElementById("SearchValue") as HTMLInputElement).value;
      setLocation(keyword);
    }
  }

  // Initial State
  useEffect(() => {
    getCurrentLocation();
    getWeather(pos);
  }, []);

  return (
    <div className="App">
      <aside className="SidebarContainer">
        <div className="SearchContainer">
          <div className="SearchBox" onFocus={() => setSearchActive(true)}>
            <input
              type="search"
              placeholder="Search City..."
              className="search"
              onKeyDown={handleEnterPress}
              id="SearchValue"
            />
            <span className="bar"></span>
          </div>
          <div className="LoadingCircle">
            {loading ? <LoadingCircle /> : null}
          </div>
          <div
            className="LocationContainer"
            onClick={handleLocationClick}
          >
            <IconContext.Provider value={{ className: "LocationIcon" }}>
              <MdMyLocation />
            </IconContext.Provider>
          </div>
        </div>
        <div
          className={`ExcludeSearchContainer ${searchActive ? "searchActive" : ""}`}
          onClick={() => setSearchActive(false)}
        >
          <div className="LocationCity">
            <h2>{city}</h2>
          </div>
          <div className="DescContainer">
            <h2>{desc}</h2>
          </div>
          <div className="SkyconContainer">
            <ReactSkycon
              color='white'
              icon={IDtoAnimatedIcon(mainWeatherID) || SkyconType.CLEAR_DAY}
              animate={true}
              size={useMediaQuery('(max-height: 650px') ? 150 : 260}
              resizeClear={true}
            />
          </div>
          <div className="TemperatureWrapper">
            <div className="TemperatureContainer">
              <h2>{isCelsius ? `${temp?.toFixed(2)}°C` : `${celtoFar(temp)?.toFixed(2)}°F`}</h2>
              <h3>But Feels like {isCelsius ? `${tempFeel?.toFixed(2)}°C` : `${celtoFar(tempFeel)?.toFixed(2)}°F`}!</h3>
            </div>
            <div className="TempMinMaxContainer">
              <h3>{isCelsius ? `${tempMin?.toFixed(2)}°C` : `${celtoFar(tempMin)?.toFixed(2)}°F`}</h3>
              <h3>{isCelsius ? `${tempMax?.toFixed(2)}°C` : `${celtoFar(tempMax)?.toFixed(2)}°F`}</h3>
            </div>
          </div>
          <div className="Date">
            <h1>{today.toString()}</h1>
          </div>
        </div>
      </aside >
      <div
        className={`MainContainer${searchActive ? " searchActive" : " "}`}
        onClick={() => { setSearchActive(false) }}
      >
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
                icon={IDtoAnimatedIcon(tomorrowMainWeatherID) || SkyconType.CLEAR_DAY}
                animate={true}
                size={60}
                resizeClear={true}
              />
              <span className="DescriptionSpan">
                {tomorrowDesc}
              </span>
              <span className="TemperatureSpan">
                {isCelsius ? `${tomorrowTemp?.toFixed(2)}°C` : `${celtoFar(tomorrowTemp)?.toFixed(2)}°F`}
              </span>
            </div>
            <div className="Card Tomorrow">
              <span className="DateSpan">{getCurrentDate(2)}</span>
              <ReactSkycon
                color='white'
                icon={IDtoAnimatedIcon(twoMainWeatherID) || SkyconType.CLEAR_DAY}
                animate={true}
                size={60}
                resizeClear={true}
              />
              <span className="DescriptionSpan">
                {twoDesc}
              </span>
              <span className="TemperatureSpan">
                {isCelsius ? `${twoTemp?.toFixed(2)}°C` : `${celtoFar(twoTemp)?.toFixed(2)}°F`}
              </span>
            </div>
            <div className="Card TomorrowTomorrow">
              <span className="DateSpan">{getCurrentDate(3)}</span>
              <ReactSkycon
                color='white'
                icon={IDtoAnimatedIcon(threeMainWeatherID) || SkyconType.CLEAR_DAY}
                animate={true}
                size={60}
                resizeClear={true}
              />
              <span className="DescriptionSpan">
                {threeDesc}
              </span>
              <span className="TemperatureSpan">
                {isCelsius ? `${threeTemp?.toFixed(2)}°C` : `${celtoFar(threeTemp)?.toFixed(2)}°F`}
              </span>
            </div>
          </div>
          <div className="MiddleSpan">
            <span>⚡Today's Summary⚡</span>
          </div>
          <div className="TodayHighlight">
            <div className="Bigcard">
              <span>Wind Status 🍃</span>
              <h2>{windSpeed}<span>mph</span></h2>
              <span>{windDirection}</span>
            </div>
            <div className="Bigcard">
              <span>Humidity 💧</span>
              <h2>{humidity}<span>%</span></h2>
              <progress
                value={humidity}
                max="100"
              ></progress>
            </div>
            <div className="Bigcard TwoElement">
              <span>Air Pressure 🌀</span>
              <h2>{pressure}<span>hPa</span></h2>
            </div>
            <div className="Bigcard TwoElement">
              <span>Clouds ☁️</span>
              <h2>{clouds}<span>%</span></h2>
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
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover
      />
    </div >
  );
}

export default App;
