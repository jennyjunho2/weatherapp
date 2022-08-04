import { MdSearch } from "@react-icons/all-files/md/MdSearch";
import { useState } from 'react';
import './App.scss';
import GetWeatherIcon from "./utils/GetWeatherIcon";
import { getCurrentDate } from "./utils/misc";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";

function App() {
  const [isCelsius, setIsCelsius] = useState<boolean>(true);
  const [humidity, setHumidity] = useState<number>(30);

  return (
    <div className="App">
      <div className="SidebarContainer">

        <button className="Search">
          <MdSearch />
          <span>Search Location</span>
        </button>
        <div className="Image">
          <h1>Image</h1>
        </div>
        <div className="Description">
          <h1>Description</h1>
        </div>
        <div className="location">
          <h1>Location</h1>
        </div>
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
            <span className="DateSpan">Today</span>
            <GetWeatherIcon weather="windy" />
            <span className="TemperatureSpan">30°C</span>
          </div>
          <div className="Card Tomorrow">
            <span className="DateSpan">{getCurrentDate(1)}</span>
            <GetWeatherIcon weather="sunny" />
            <span className="TemperatureSpan">30°C</span>
          </div>
          <div className="Card TomorrowTomorrow">
            <span className="DateSpan">{getCurrentDate(2)}</span>
            <GetWeatherIcon weather="partlysunny" />
            <span className="TemperatureSpan">30°C</span>
          </div>
        </div>
        <div className="MiddleSpan">
          <span>Today</span>
        </div>
        <div className="TodayHighlight">
          <div className="Bigcard">
            <span>Wind Status</span>
            <h2>1.62<span>mph</span></h2>
            <span>South</span>
          </div>
          <div className="Bigcard">
            <span>Humidity</span>
            <h2>{humidity}<span>%</span></h2>
            <progress
              value={humidity}
              max="100"
            ></progress>
          </div>
          <div className="Bigcard TwoElement">
            <span>Visibility</span>
            <h2>6.22<span>miles</span></h2>
          </div>
          <div className="Bigcard TwoElement">
            <span>Air Pressure</span>
            <h2>1010<span>hPa</span></h2>
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
    </div >
  );
}

export default App;
