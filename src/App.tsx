import { MdSearch } from "@react-icons/all-files/md/MdSearch";
import { useState } from 'react';
import './App.scss';
import GetWeatherIcon from "./utils/GetWeatherIcon";
import { getCurrentDate } from "./utils/misc";

function App() {
  const [isCelsius, setIsCelsius] = useState<boolean>(true);
  const handleF = () => {
    setIsCelsius(false);
  }

  const handleC = () => {
    setIsCelsius(true);
  }

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
            onClick={handleF}
          >
            °F
          </div>
          <div
            className={`TempIcon${isCelsius ? " active" : " "}`}
            onClick={handleC}
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
            <span>1</span>
          </div>
          <div className="Bigcard">
            <span>2</span>
          </div>
          <div className="Bigcard">
            <span>3</span>
          </div>
          <div className="Bigcard">
            <span>4</span>
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
