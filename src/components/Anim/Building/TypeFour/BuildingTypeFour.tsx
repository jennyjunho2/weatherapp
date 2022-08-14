import { useRecoilValue } from "recoil";
import { isDayAtom } from "../../../../utils/atoms";
import { IBuildingTypeProps } from "../../../../utils/interfaces";
import "./_styles_BuildingTypeFour.scss";

function BuildingTypeFour({ leftOffset, opacity }: IBuildingTypeProps) {
  const isDay = useRecoilValue<boolean>(isDayAtom);

  //TODO: Make Building!
  return (
    <div
      className={`BuildingTypeFour ${isDay ? "BuildingTypeFour-Day" : "BuildingTypeFour-Night"}`}
      style={{
        left: `${leftOffset}px`,
        opacity: `${opacity}`,
      }}
    >
      <div className={`BuildingTop FiveSec ${isDay ? "BuildingWindow-Day" : "BuildingWindow-Night"}`}></div>
    </div >
  );
}

export default BuildingTypeFour;