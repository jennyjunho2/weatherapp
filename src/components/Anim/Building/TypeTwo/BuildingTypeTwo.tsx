import { useRecoilValue } from "recoil";
import { isDayAtom } from "../../../../utils/atoms";
import { IBuildingTypeProps } from "../../../../utils/interfaces";
import "./_styles_BuildingTypeTwo.scss";

function BuildingTypeTwo({ leftOffset = 0, opacity }: IBuildingTypeProps) {
  const isDay = useRecoilValue<boolean>(isDayAtom);

  return (
    <div
      className={`BuildingTypeTwo ${isDay ? "BuildingTypeTwo-Day" : "BuildingTypeTwo-Night"}`}
      style={{
        left: `${leftOffset}px`,
        opacity: `${opacity}`,
      }}
    >
      {isDay ? <div className="ledge"></div> : null}
      <div className={`BuildingTop FiveSec ${isDay ? "BuildingWindow-Day" : "BuildingWindow-Night"}`}></div>
      <div className={`BuildingWindow WindowTypeOne TypeTwoOne SevenSec ${isDay ? "BuildingWindow-Day" : "BuildingWindow-Night"}`}></div>
      <div className={`BuildingWindow WindowTypeTwo TypeTwoTwo ${isDay ? "BuildingWindow-Day" : ""}`}></div>
      <div className={`BuildingWindow WindowTypeOne TypeTwoThree SevenSec ${isDay ? "BuildingWindow-Day" : "BuildingWindow-Night"}`}></div>
      <div className={`BuildingWindow WindowTypeOne TypeTwoFour ${isDay ? "BuildingWindow-Day" : ""}`}></div>
      <div className={`BuildingWindow WindowTypeTwo TypeTwoFive FiveSec ${isDay ? "BuildingWindow-Day" : "BuildingWindow-Night"}`}></div>
    </div >
  );
}

export default BuildingTypeTwo;