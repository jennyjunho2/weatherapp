import { IBuildingTypeProps } from "../../../utils/interfaces";
import Bridge from "../Bridge/Bridge";
import BuildingTypeFive from "../Building/TypeFive/BuildingTypeFive";
import BuildingTypeFour from "../Building/TypeFour/BuildingTypeFour";
import BuildingTypeOne from "../Building/TypeOne/BuildingTypeOne";
import BuildingTypeThree from "../Building/TypeThree/BuildingTypeThree";
import BuildingTypeTwo from "../Building/TypeTwo/BuildingTypeTwo";

function BuildingRowOne({ leftOffset, opacity }: IBuildingTypeProps) {
  return (
    <>
      <BuildingTypeThree
        leftOffset={leftOffset + 0}
        opacity={opacity}
      />
      <BuildingTypeOne
        leftOffset={leftOffset + 120}
        opacity={opacity}
        isShadow={true}
      />
      <BuildingTypeTwo
        leftOffset={leftOffset + 260}
        opacity={opacity}
      />
      <Bridge
        leftOffset={leftOffset + 443}
        opacity={opacity}
      />
      <BuildingTypeFour
        leftOffset={leftOffset + 650}
        opacity={opacity}
      />
      <BuildingTypeFive
        leftOffset={leftOffset + 833}
        opacity={opacity}
      />
      <BuildingTypeFour
        leftOffset={leftOffset + 1200}
        opacity={opacity}
      />
    </>
  );
}

export default BuildingRowOne;