import { useRecoilValue } from "recoil";
import { isDayAtom } from "../../../utils/atoms";
import "./_styles_Bridge.scss";

function Bridge() {
  const isDay = useRecoilValue<boolean>(isDayAtom);

  return (
    <div className="BridgeContainer">

    </div>
  );
}

export default Bridge;