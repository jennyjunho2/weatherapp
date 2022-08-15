import { useRecoilValue } from "recoil";
import { isDayAtom } from "../../../utils/atoms";
import { IBuildingTypeProps } from "../../../utils/interfaces";
import "./_styles_Bridge.scss";

function Bridge({ leftOffset, opacity }: IBuildingTypeProps) {
  const isDay = useRecoilValue<boolean>(isDayAtom);

  return (
    <div
      className="BridgeContainer"
      style={{
        left: `${leftOffset}px`,
        opacity: `${opacity}`,
      }}
    >
      <div className={`Bridge ${isDay ? "BridgeDay" : "BridgeNight"}`}></div>
      <div className={`Pillar ${isDay ? "PillarDay" : "PillarNight"}`} style={{ left: "25px" }}></div>
      <div className={`Pillar ${isDay ? "PillarDay" : "PillarNight"}`} style={{ left: "95px" }}></div>
      <div className={`Pillar ${isDay ? "PillarDay" : "PillarNight"}`} style={{ left: "165px" }}></div>
      {/* Lights */}
      <div className={`lights ${isDay ? "lightsDay" : "lightsNight"}`} style={{ left: "40px" }}></div>
      <div className={`lights ${isDay ? "lightsDay" : "lightsNight"}`} style={{ left: "150px" }}></div>
    </div>
  );
}

export default Bridge;