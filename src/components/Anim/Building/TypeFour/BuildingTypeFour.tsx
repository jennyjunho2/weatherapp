import { useRecoilValue } from "recoil";
import { isDayAtom } from "../../../../utils/atoms";
import { IBuildingTypeProps } from "../../../../utils/interfaces";
import "./_styles_BuildingTypeFour.scss";

function BuildingTypeFour({ leftOffset, opacity }: IBuildingTypeProps) {
  const isDay = useRecoilValue<boolean>(isDayAtom);

  return (
    <div
      className={`BuildingTypeFour ${isDay ? "BuildingTypeFour-Day" : "BuildingTypeFour-Night"}`}
      style={{
        left: `${leftOffset}px`,
        opacity: `${opacity}`,
      }}
    >
      {isDay ? <div className="ledge"></div> : null}
      <div className={`BuildingTop ${isDay ? "BuildingWindow-Day" : "BuildingWindow-Night"}`}></div>
      <div className={`BuildingShadow ${isDay ? "BuildingShadow-Day" : "BuildingShadow-Night"}`}></div>
      <div className={`BuildingFour-Windows ${isDay ? "BuildingWindow-Day" : "BuildingWindow-Night"}`}>
        <div className="BuildingFour-WindowRowOne">
          <div className={`BuildingFour-Window FiveSec ${isDay ? "BuildingFour-Window-Day" : "BuildingFour-Window-Night"}`}></div>
          <div className={`BuildingFour-Window ${isDay ? "BuildingFour-NotWindow-Day" : "BuildingFour-NotWindow-Night"}`}></div>
          <div className={`BuildingFour-Window TenSec ${isDay ? "BuildingFour-Window-Day" : "BuildingFour-Window-Night"}`}></div>
        </div>
        <div className="BuildingFour-WindowRowTwo">
          <div className={`BuildingFour-Window SevenSec ${isDay ? "BuildingFour-Window-Day" : "BuildingFour-Window-Night"}`}></div>
          <div className={`BuildingFour-Window SevenSec ${isDay ? "BuildingFour-Window-Day" : "BuildingFour-Window-Night"}`}></div>
          <div className={`BuildingFour-Window ${isDay ? "BuildingFour-Window-Day" : "BuildingFour-Window-Night"}`}></div>
        </div>
        <div className="BuildingFour-WindowRowThree">
          <div className={`BuildingFour-Window TenSec ${isDay ? "BuildingFour-Window-Day" : "BuildingFour-Window-Night"}`}></div>
          <div className={`BuildingFour-Window FiveSec ${isDay ? "BuildingFour-Window-Day" : "BuildingFour-Window-Night"}`}></div>
          <div className={`BuildingFour-Window ${isDay ? "BuildingFour-NotWindow-Day" : "BuildingFour-NotWindow-Night"}`}></div>
        </div>
        <div className="BuildingFour-WindowRowFour">
          <div className={`BuildingFour-Window ${isDay ? "BuildingFour-NotWindow-Day" : "BuildingFour-NotWindow-Night"}`}></div>
          <div className={`BuildingFour-Window TenSec ${isDay ? "BuildingFour-Window-Day" : "BuildingFour-Window-Night"}`}></div>
          <div className={`BuildingFour-Window ${isDay ? "BuildingFour-NotWindow-Day" : "BuildingFour-NotWindow-Night"}`}></div>
        </div>
        <div className="BuildingFour-WindowRowFive">
          <div className={`BuildingFour-Window TenSec ${isDay ? "BuildingFour-Window-Day" : "BuildingFour-Window-Night"}`}></div>
          <div className={`BuildingFour-Window ${isDay ? "BuildingFour-NotWindow-Day" : "BuildingFour-NotWindow-Night"}`}></div>
          <div className={`BuildingFour-Window ${isDay ? "BuildingFour-NotWindow-Day" : "BuildingFour-NotWindow-Night"}`}></div>
        </div>
        <div className="BuildingFour-WindowRowSix">
          <div className={`BuildingFour-Window FiveSec ${isDay ? "BuildingFour-Window-Day" : "BuildingFour-Window-Night"}`}></div>
          <div className={`BuildingFour-Window SevenSec ${isDay ? "BuildingFour-Window-Day" : "BuildingFour-Window-Night"}`}></div>
          <div className={`BuildingFour-Window ${isDay ? "BuildingFour-NotWindow-Day" : "BuildingFour-NotWindow-Night"}`}></div>
        </div>
      </div>
    </div >
  );
}

export default BuildingTypeFour;