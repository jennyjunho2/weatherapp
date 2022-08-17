import { IBuildingTypeProps } from "../../../utils/interfaces";
import Bridge from "../Bridge/Bridge";
import BuildingTypeFive from "../Building/TypeFive/BuildingTypeFive";
import BuildingTypeFour from "../Building/TypeFour/BuildingTypeFour";
import BuildingTypeOne from "../Building/TypeOne/BuildingTypeOne";
import BuildingTypeThree from "../Building/TypeThree/BuildingTypeThree";
import BuildingTypeTwo from "../Building/TypeTwo/BuildingTypeTwo";
import Train from "../Train/Train";
import "./_styles_BuildingRowOne.scss";

function BuildingRowOne({ leftOffset, opacity }: IBuildingTypeProps) {
  return (
    <>
      <div className="Zindex2">
        <BuildingTypeThree
          leftOffset={leftOffset + 0}
          opacity={opacity}
        />
      </div>
      <div className="Zindex2">
        <BuildingTypeOne
          leftOffset={leftOffset + 120}
          opacity={opacity}
          isShadow={true}
        />
      </div>
      <div className="Zindex2">
        <BuildingTypeTwo
          leftOffset={leftOffset + 260}
          opacity={opacity}
        />
      </div>
      <div className="Zindex1">
        <Bridge
          leftOffset={leftOffset + 443}
          opacity={opacity}
        />
      </div>
      <div className="Zindex2">
        <BuildingTypeFour
          leftOffset={leftOffset + 650}
          opacity={opacity}
        />
      </div>
      <div className="Zindex2">
        <BuildingTypeFive
          leftOffset={leftOffset + 833}
          opacity={opacity}
        />
      </div>
      <div className="Zindex1">
        <Train
          leftOffset={leftOffset + 1033}
          opacity={opacity}
        />
      </div>
      <div className="Zindex2">
        <BuildingTypeFour
          leftOffset={leftOffset + 1200}
          opacity={opacity}
        />
      </div>
    </>
  );
}

export default BuildingRowOne;