import { useRecoilValue } from "recoil";
import { isDayAtom } from "../../../utils/atoms";
import "./_styles_SunMoon.scss";

function SunMoon() {
  const isDay = useRecoilValue(isDayAtom);

  return (
    <div className="SunMoon">
      <div className={`Circle ${isDay ? `SunMoon-Day` : `SunMoon-Night`}`}></div>
    </div>
  )
}

export default SunMoon;