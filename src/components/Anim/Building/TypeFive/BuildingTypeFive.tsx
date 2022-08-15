import { useRecoilValue } from "recoil";
import { isDayAtom } from "../../../../utils/atoms";
import { IBuildingTypeProps } from "../../../../utils/interfaces";
import "./_styles_BuildingTypeFive.scss";

function BuildingTypeFive({ leftOffset, opacity }: IBuildingTypeProps) {
  const isDay = useRecoilValue<boolean>(isDayAtom);

  return (
    <div
      className={`BuildingTypeFive ${isDay ? "BuildingTypeFive-Day" : "BuildingTypeFive-Night"}`}
      style={{
        left: `${leftOffset}px`,
        opacity: `${opacity}`,
      }}
    >
      <div className="AntennaContainer">
        <div className={`Antenna ${isDay ? "Antenna-Day" : "Antenna-Night"}`}>
          <div className="AntennaTop"></div>
        </div>
        <div className={`Antenna ${isDay ? "Antenna-Day" : "Antenna-Night"}`}>
          <div className="AntennaTop"></div>
        </div>
      </div>
      {isDay ? <div className="ledge"></div> : null}
      <div className={`BuildingShadow ${isDay ? "BuildingShadow-Day" : "BuildingShadow-Night"}`}></div>
      <div className={`BuildingFive-Windows ${isDay ? "BuildingWindow-Day" : "BuildingWindow-Night"}`}>
        <div className="BuildingFive-WindowRowOne">
          <div className={`BuildingFive-Window FiveSec ${isDay ? "BuildingFive-Window-Day" : "BuildingFive-Window-Night"}`}></div>
          <div className={`BuildingFive-Window ${isDay ? "BuildingFive-NotWindow-Day" : "BuildingFive-NotWindow-Night"}`}></div>
          <div className={`BuildingFive-Window TenSec ${isDay ? "BuildingFive-Window-Day" : "BuildingFive-Window-Night"}`}></div>
        </div>
        <div className="BuildingFive-WindowRowTwo">
          <div className={`BuildingFive-Window SevenSec ${isDay ? "BuildingFive-Window-Day" : "BuildingFive-Window-Night"}`}></div>
          <div className={`BuildingFive-Window SevenSec ${isDay ? "BuildingFive-Window-Day" : "BuildingFive-Window-Night"}`}></div>
          <div className={`BuildingFive-Window ${isDay ? "BuildingFive-Window-Day" : "BuildingFive-Window-Night"}`}></div>
        </div>
        <div className="BuildingFive-WindowRowThree">
          <div className={`BuildingFive-Window TenSec ${isDay ? "BuildingFive-Window-Day" : "BuildingFive-Window-Night"}`}></div>
          <div className={`BuildingFive-Window FiveSec ${isDay ? "BuildingFive-Window-Day" : "BuildingFive-Window-Night"}`}></div>
          <div className={`BuildingFive-Window ${isDay ? "BuildingFive-NotWindow-Day" : "BuildingFive-NotWindow-Night"}`}></div>
        </div>
        <div className="BuildingFive-WindowRowFour">
          <div className={`BuildingFive-Window ${isDay ? "BuildingFive-NotWindow-Day" : "BuildingFive-NotWindow-Night"}`}></div>
          <div className={`BuildingFive-Window TenSec ${isDay ? "BuildingFive-Window-Day" : "BuildingFive-Window-Night"}`}></div>
          <div className={`BuildingFive-Window ${isDay ? "BuildingFive-NotWindow-Day" : "BuildingFive-NotWindow-Night"}`}></div>
        </div>
        <div className="BuildingFive-WindowRowFive">
          <div className={`BuildingFive-Window TenSec ${isDay ? "BuildingFive-Window-Day" : "BuildingFive-Window-Night"}`}></div>
          <div className={`BuildingFive-Window ${isDay ? "BuildingFive-NotWindow-Day" : "BuildingFive-NotWindow-Night"}`}></div>
          <div className={`BuildingFive-Window ${isDay ? "BuildingFive-NotWindow-Day" : "BuildingFive-NotWindow-Night"}`}></div>
        </div>
        <div className="BuildingFive-WindowRowSix">
          <div className={`BuildingFive-Window FiveSec ${isDay ? "BuildingFive-Window-Day" : "BuildingFive-Window-Night"}`}></div>
          <div className={`BuildingFive-Window SevenSec ${isDay ? "BuildingFive-Window-Day" : "BuildingFive-Window-Night"}`}></div>
          <div className={`BuildingFive-Window ${isDay ? "BuildingFive-NotWindow-Day" : "BuildingFive-NotWindow-Night"}`}></div>
        </div>
        <div className="BuildingFive-WindowRowSeven">
          <div className={`BuildingFive-Window FiveSec ${isDay ? "BuildingFive-NotWindow-Day" : "BuildingFive-Window-Night"}`}></div>
          <div className={`BuildingFive-Window SevenSec ${isDay ? "BuildingFive-Window-Day" : "BuildingFive-Window-Night"}`}></div>
          <div className={`BuildingFive-Window ${isDay ? "BuildingFive-NotWindow-Day" : "BuildingFive-NotWindow-Night"}`}></div>
        </div>
      </div>
    </div >
  )
}

export default BuildingTypeFive;