import { useRecoilValue } from 'recoil';
import { isDayAtom, isRainingAtom } from '../../../utils/atoms';
import './_styles_Sky.scss';

function Sky() {
  const isDay = useRecoilValue<boolean>(isDayAtom);

  return (
    <div className={`Sky ${isDay ? `Sky-Day` : `Sky-Night`}`}>
    </div>
  );
}

export default Sky;
