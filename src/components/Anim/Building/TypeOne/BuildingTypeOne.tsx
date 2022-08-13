import { useRecoilValue } from "recoil";
import { isDayAtom } from "../../../../utils/atoms";
import "./_styles_BuildingTypeOne.scss";

interface IBuildingTypeOneProps {
  leftOffset?: number;
}

function BuildingTypeOne({ leftOffset = 0 }: IBuildingTypeOneProps) {
  const isDay = useRecoilValue<boolean>(isDayAtom);
  return (
    <div className={`BuildingTypeOne ${isDay ? "BuildingTypeOne-Day" : "BuildingTypeOne-Night"}`}>
      <div></div>
      <div className={`BuildingTop FiveSec ${isDay ? "BuildingWindow-Day" : "BuildingWindow-Night"}`}></div>
      <div className={`BuildingWindow One SevenSec ${isDay ? "BuildingWindow-Day" : "BuildingWindow-Night"}`}></div>
      <div className={`BuildingWindow Two ${isDay ? "BuildingWindow-Day" : ""}`}></div>
      <div className={`BuildingWindow Three SevenSec ${isDay ? "BuildingWindow-Day" : "BuildingWindow-Night"}`}></div>
      <div className={`BuildingWindow Four ${isDay ? "BuildingWindow-Day" : ""}`}></div>
      <div className={`BuildingWindow Five FiveSec ${isDay ? "BuildingWindow-Day" : "BuildingWindow-Night"}`}></div>
      <div className={`BuildingWindow Six ${isDay ? "BuildingWindow-Day" : ""}`}></div>
      <div className={`BuildingWindow Seven TenSec ${isDay ? "BuildingWindow-Day" : "BuildingWindow-Night"}`}></div>
      <div className={`BuildingWindow Eight ${isDay ? "BuildingWindow-Day" : ""}`}></div>
      <div className={`BuildingWindow Nine FiveSec ${isDay ? "BuildingWindow-Day" : "BuildingWindow-Night"}`}></div>
    </div >
  )
}

export default BuildingTypeOne;