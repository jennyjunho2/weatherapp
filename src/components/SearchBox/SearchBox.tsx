import { KeyboardEvent, memo, useState } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";
import { useRecoilState, useSetRecoilState } from "recoil";
import { fetchWeather } from "../../api/fetchWeather";
import { currentCoordinateAtom, isSearchActiveAtom, weatherDataAtom } from "../../utils/atoms";
import { position, WeatherInfo } from "../../utils/interfaces";
import { degToDirection } from "../../utils/misc";
import "./_styles_SearchBox.scss";

function SearchBox() {
  const [address, setAddress] = useState<string>("");
  const setWeatherData = useSetRecoilState<WeatherInfo>(weatherDataAtom);
  const [searchActive, setSearchActive] = useRecoilState<boolean>(isSearchActiveAtom);
  const [coordinate, setCoordinate] = useRecoilState<position>(currentCoordinateAtom);

  const handleSelect = async (query: string) => {
    const results = await geocodeByAddress(query);
    const latLng = await getLatLng(results[0]);
    setAddress(query);
    setCoordinate({
      latitude: latLng.lat,
      longitude: latLng.lng
    });
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
  };

  const handleEnterPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      getWeather(coordinate);
      setSearchActive(false);
    }
  }

  return (
    <div className="SearchBoxWrapper">
      <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
        shouldFetchSuggestions={address.length > 2}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <>
            <div className="SearchBox"
              onFocus={() => { setSearchActive(true); }}
              onBlur={() => { setSearchActive(false); console.log("On BLur"); }}
            >
              <input
                {...getInputProps({
                  placeholder: "Search City...",
                  className: "search",
                  id: "SearchValue",
                  onKeyDown: handleEnterPress,
                })}
              />
              <span className="bar"></span>
              {searchActive &&
                <div
                  className="SearchButton"
                  onClick={() => {
                    console.log("I'm Clicked"!)
                    getWeather(coordinate);
                  }}
                >
                  <span>Search</span>
                </div>
              }
            </div>
            <div className="dropdownContainer">
              {suggestions.map((suggestion, idx) => {
                return (
                  <div
                    {...getSuggestionItemProps(suggestion)}
                    key={idx}
                    className="dropDownElement"
                  >
                    <span>{suggestion.description}</span>
                  </div>
                )
              })}
            </div>
          </>
        )}
      </PlacesAutocomplete>
    </div>
  );
}

export default memo(SearchBox);