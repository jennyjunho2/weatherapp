import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";
import { useRecoilState } from "recoil";
import { currentLocationAtom } from "../../utils/atoms";
import "./_styles.scss";

interface ISearchBoxProps {
  onFocus: () => void;
}

function SearchBox({ onFocus }: ISearchBoxProps) {
  const [position, setPosition] = useRecoilState(currentLocationAtom);

  const handleSelect = async (query: string) => {
    const results = await geocodeByAddress(query);
    const latLng = await getLatLng(results[0]);
    setAddress(query);
    setCoordinates
  }

  return (
    <div>
      <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <>
            <div className="SearchBox" onFocus={onFocus}>
              <input
                {...getInputProps({
                  placeholder: "Search City...",
                  className: "search",
                  id: "SearchValue",
                })}
              />
              <span className="bar"></span>
            </div>
            <div className="dropdownContainer">
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                return (
                  <div
                    {...getSuggestionItemProps(suggestion)}
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

export default SearchBox;