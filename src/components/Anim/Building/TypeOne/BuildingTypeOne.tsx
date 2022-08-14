import { useRecoilValue } from "recoil";
import { isDayAtom } from "../../../../utils/atoms";
import { IBuildingTypeProps } from "../../../../utils/interfaces";
import "./_styles_BuildingTypeOne.scss";

interface IBuildingTypeOneProps extends IBuildingTypeProps {
  isShadow: boolean;
}

function BuildingTypeOne({ leftOffset = 0, opacity, isShadow }: IBuildingTypeOneProps) {
  const isDay = useRecoilValue<boolean>(isDayAtom);

  return (
    <div
      className={`BuildingTypeOne ${isDay ? "BuildingTypeOne-Day" : "BuildingTypeOne-Night"}`}
      style={{
        left: `${leftOffset}px`,
        opacity: `${opacity}`,
      }}
    >
      {isDay ? <div className="ledge"></div> : null}
      {isShadow ? <div className="TypeOneShadow"></div> : null}
      <div className={`BuildingTop FiveSec ${isDay ? "BuildingWindow-Day" : "BuildingWindow-Night"}`}></div>
      <div className={`BuildingWindow TypeOneOne SevenSec ${isDay ? "BuildingWindow-Day" : "BuildingWindow-Night"}`}></div>
      <div className={`BuildingWindow TypeOneTwo ${isDay ? "BuildingWindow-Day" : ""}`}></div>
      <div className={`BuildingWindow TypeOneThree SevenSec ${isDay ? "BuildingWindow-Day" : "BuildingWindow-Night"}`}></div>
      <div className={`BuildingWindow TypeOneFour ${isDay ? "BuildingWindow-Day" : ""}`}></div>
      <div className={`BuildingWindow TypeOneFive FiveSec ${isDay ? "BuildingWindow-Day" : "BuildingWindow-Night"}`}></div>
      <div className={`BuildingWindow TypeOneSix ${isDay ? "BuildingWindow-Day" : ""}`}></div>
      <div className={`BuildingWindow TypeOneSeven TenSec ${isDay ? "BuildingWindow-Day" : "BuildingWindow-Night"}`}></div>
      <div className={`BuildingWindow TypeOneEight ${isDay ? "BuildingWindow-Day" : ""}`}></div>
      <div className={`BuildingWindow TypeOneNine FiveSec ${isDay ? "BuildingWindow-Day" : "BuildingWindow-Night"}`}></div>
    </div >
  )
}

export default BuildingTypeOne;