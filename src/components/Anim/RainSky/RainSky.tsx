import { useEffect } from 'react';
import { randRange } from '../../../utils/misc';
import './_styles_RainSky.scss';

interface IRainSkyProps {
  drops: number;
}

function RainSky({ drops }: IRainSkyProps) {
  const startRain = () => {
    const rainContainer = document.getElementById('Rain');

    for (let i = 1; i < drops; i++) {
      const dropLeft = randRange(0, 1600);
      const dropTop = randRange(-1000, 1400);

      const droplet = document.createElement('div');
      droplet.setAttribute('class', 'drop');
      droplet.setAttribute('id', `droplet${i}`);

      rainContainer?.appendChild(droplet);

      droplet.style.left = `${dropLeft}px`;
      droplet.style.top = `${dropTop}px`;
    }
  }

  useEffect(() => {
    startRain();
  }, []);

  return (
    <div className="RainSky">
      <div id="Rain"></div>
    </div>
  );
}

export default RainSky;
