import { useRecoilValue } from "recoil";
import { isDayAtom } from "../../../../utils/atoms";
import { IBuildingTypeProps } from "../../../../utils/interfaces";
import "./_styles_BuildingTypeThree.scss";

function BuildingTypeThree({ leftOffset = 0, opacity }: IBuildingTypeProps) {
  const isDay = useRecoilValue<boolean>(isDayAtom);

  return (
    <div
      className={`BuildingTypeThree ${isDay ? "BuildingTypeThree-Day" : "BuildingTypeThree-Night"}`}
      style={{
        left: `${leftOffset}px`,
        opacity: `${opacity}`,
      }}
    >
      <div className={`BuildingTop FiveSec ${isDay ? "BuildingWindow-Day" : "BuildingWindow-Night"}`}></div>
      <div className={`BuildingWindow WindowTypeTwo TypeThreeOne SevenSec ${isDay ? "BuildingWindow-Day" : "BuildingWindow-Night"}`}></div>
      <div className={`BuildingWindow WindowTypeTwo TypeThreeTwo ${isDay ? "BuildingWindow-Day" : "BuildingWindow-Night"}`}></div>
      <div className={`BuildingWindow WindowTypeTwo TypeThreeThree SevenSec ${isDay ? "BuildingWindow-Day" : "BuildingWindow-Night"}`}></div>
      <div className={`BuildingWindow WindowTypeTwo TypeThreeFour ${isDay ? "BuildingWindow-Day" : "BuildingWindow-Night"}`}></div>
      <div className={`BuildingWindow WindowTypeTwo TypeThreeFive FiveSec ${isDay ? "BuildingWindow-Day" : "BuildingWindow-Night"}`}></div>
      <div className={`BuildingWindow WindowTypeTwo TypeThreeSix FiveSec ${isDay ? "BuildingWindow-Day" : "BuildingWindow-Night"}`}></div>
      <div className={`BuildingWindow WindowTypeTwo TypeThreeSeven FiveSec ${isDay ? "BuildingWindow-Day" : "BuildingWindow-Night"}`}></div>
    </div >
  );
}

export default BuildingTypeThree;