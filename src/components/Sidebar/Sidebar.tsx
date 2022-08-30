import { IconContext } from "@react-icons/all-files";
import { useRecoilState, useRecoilValue } from "recoil";
import { fetchWeather } from "../../api/fetchWeather";
import { currentCoordinateAtom, isSearchActiveAtom, isLoadingAtom, weatherDataAtom, isCelsiusAtom } from "../../utils/atoms";
import { position, WeatherInfo } from "../../utils/interfaces";
import { celtoFar, degToDirection, IDtoAnimatedIcon } from "../../utils/misc";
import LoadingCircle from "../LoadingCircle/LoadingCircle";
import SearchBox from "../SearchBox/SearchBox";
import { MdMyLocation } from "@react-icons/all-files/md/MdMyLocation";
import { ReactSkycon, SkyconType } from "react-skycons-extended";
import useMediaQuery from "../../hooks/useMediaQuery";
import "./_styles_Sidebar.scss";
import { memo } from "react";
import { BsCalendar } from "@react-icons/all-files/bs/BsCalendar";
import { Link } from "react-router-dom";

function Sidebar() {
  // Get today Date and covert to Date String
  const today = new Date(Date.now()).toDateString();

  // state whether api call is loading
  const [isLoading, setIsLoading] = useRecoilState<boolean>(isLoadingAtom);

  // state of current coordinate(location)
  const [coordinate, setCoordinate] = useRecoilState<position>(currentCoordinateAtom);

  // weather data state
  const [weatherData, setWeatherData] = useRecoilState<WeatherInfo>(weatherDataAtom);

  // state whether search is active
  const searchActive = useRecoilValue<boolean>(isSearchActiveAtom);

  // state whether is celsius
  const isCelsius = useRecoilValue<boolean>(isCelsiusAtom);

  // handle click on location "button"
  const handleLocationClick = async () => {
    setIsLoading(true);
    getCurrentLocation();
    getWeather(coordinate);
    setIsLoading(false);
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

  return (
    <aside className="SidebarContainer">
      <div className="SearchContainer">
        <SearchBox />
        <div className="LoadingCircle">
          {isLoading ? <LoadingCircle /> : null}
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
      >
        <div className="LocationCity">
          <h2>{weatherData.city}</h2>
        </div>
        <div className="DescContainer">
          <h2>{weatherData.current.description}</h2>
        </div>
        <div className="SkyconContainer">
          <ReactSkycon
            color='white'
            icon={IDtoAnimatedIcon(weatherData.current.weatherID) || SkyconType.CLEAR_DAY}
            animate={true}
            size={useMediaQuery('(max-height: 650px') ? 150 : 260}
            resizeClear={true}
          />
        </div>
        <div className="TemperatureWrapper">
          <div className="TemperatureContainer">
            <h2>{isCelsius ? `${weatherData.current.temp?.toFixed(2)}°C` : `${celtoFar(weatherData.current.temp)?.toFixed(2)}°F`}</h2>
            <h3>But Feels like {isCelsius ? `${weatherData.current.feel?.toFixed(2)}°C` : `${celtoFar(weatherData.current.feel)?.toFixed(2)}°F`}!</h3>
          </div>
          <div className="TempMinMaxContainer">
            <h3>{isCelsius ? `${weatherData.current.min?.toFixed(2)}°C` : `${celtoFar(weatherData.current.min)?.toFixed(2)}°F`}</h3>
            <h3>{isCelsius ? `${weatherData.current.max?.toFixed(2)}°C` : `${celtoFar(weatherData.current.max)?.toFixed(2)}°F`}</h3>
          </div>
        </div>
        <div className="ButtonContainer">
          <Link to="/summary/">
            <div className="ButtonWrapper">
              <span>
                <em>3-Day Summary</em>
                <i><BsCalendar /></i>
              </span>
            </div>
          </Link>
        </div>
        <div className="Date">
          <h1>{today.toString()}</h1>
        </div>
      </div>
    </aside >
  );
}

export default memo(Sidebar);