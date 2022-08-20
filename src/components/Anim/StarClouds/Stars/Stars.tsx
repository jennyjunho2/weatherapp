import { IconContext } from '@react-icons/all-files';
import { FaRegStar } from '@react-icons/all-files/fa/FaRegStar';
import './_styles_Stars.scss';

function Stars() {

  return (
    <div className="StarContainer">
      <IconContext.Provider value={{ className: "Star" }}>
        <div className="Pos1">
          <FaRegStar />
        </div>
        <div className="Pos2">
          <FaRegStar />
        </div>
        <div className="Pos3">
          <FaRegStar />
        </div>
        <div className="Pos4">
          <FaRegStar />
        </div>
        <div className="Pos5">
          <FaRegStar />
        </div>
        <div className="Pos6">
          <FaRegStar />
        </div>
        <div className="Pos7">
          <FaRegStar />
        </div>
        <div className="Pos8">
          <FaRegStar />
        </div>
        <div className="Pos9">
          <FaRegStar />
        </div>
      </IconContext.Provider>
    </div >
  );
}

export default Stars;
