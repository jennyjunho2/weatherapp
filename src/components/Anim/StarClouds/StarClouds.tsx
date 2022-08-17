import { useRecoilValue } from 'recoil';
import { isDayAtom } from '../../../utils/atoms';
import './_styles_StarClouds.scss';

function StarClouds() {
  const isDay = useRecoilValue<boolean>(isDayAtom);

  return (
    <div
      className={`StarCloudsContainer ${
        isDay ? StarCloudsDay : StarCloudsNight
      }`}
    >
      <div className="Star"></div>
      <div className="Star"></div>
      <div className="Star"></div>
    </div>
  );
}

export default StarClouds;
