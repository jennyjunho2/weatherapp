import { useRecoilValue } from "recoil";
import { isDayAtom } from "../../../utils/atoms";
import { IBuildingTypeProps } from "../../../utils/interfaces";
import "./_styles_Train.scss";

function Train({ leftOffset, opacity }: IBuildingTypeProps) {
  const isDay = useRecoilValue<boolean>(isDayAtom)

  return (
    <div className="TrainContainer"
      style={{
        left: leftOffset,
        opacity: opacity
      }}
    >
      <div className="Train"></div>
      <div className={`Track ${isDay ? "TrackDay" : "TrackNight"}`}></div>
      <div className="Pillar" style={{ left: "30px" }}></div>
      <div className="Pillar" style={{ left: "110px" }}></div>
    </div>
  )
}

export default Train;