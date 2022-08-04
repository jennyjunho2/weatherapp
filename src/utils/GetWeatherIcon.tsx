import { TiWeatherSunny } from "@react-icons/all-files/ti/TiWeatherSunny";
import { TiWeatherCloudy } from "@react-icons/all-files/ti/TiWeatherCloudy";
import { TiWeatherPartlySunny } from "@react-icons/all-files/ti/TiWeatherPartlySunny";
import { TiWeatherSnow } from "@react-icons/all-files/ti/TiWeatherSnow";
import { TiWeatherStormy } from "@react-icons/all-files/ti/TiWeatherStormy";
import { TiWeatherDownpour } from "@react-icons/all-files/ti/TiWeatherDownpour";
import { TiWeatherWindy } from "@react-icons/all-files/ti/TiWeatherWindy";
import { TiWiFiOutline } from "@react-icons/all-files/ti/TiWiFiOutline";
import { IconContext } from "@react-icons/all-files";
import '../App.scss';

interface Props {
  weather: "sunny" | "cloudy" | "partlysunny" | "snow" | "stormy" | "rainy" | "windy"
}

function GetWeatherIcon({ weather }: Props) {
  const Icon = (param: string) => {
    switch (param) {
      case "sunny": return (<TiWeatherSunny />)
      case "cloudy": return (<TiWeatherCloudy />)
      case "partlysunny": return (<TiWeatherPartlySunny />)
      case "snow": return (<TiWeatherSnow />)
      case "stormy": return (<TiWeatherStormy />)
      case "rainy": return (<TiWeatherDownpour />)
      case "windy": return (<TiWeatherWindy />)
      default: return (<TiWiFiOutline />)
    }
  }

  return (
    <div>
      <IconContext.Provider value={{ className: 'Icons' }}>
        {Icon(weather)}
      </IconContext.Provider>
    </div>
  )
};

export default GetWeatherIcon;