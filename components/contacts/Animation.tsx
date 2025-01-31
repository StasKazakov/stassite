import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import animationData from '../../public/lottie/contact.json';

const Animation = () => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (container.current) {
      lottie.loadAnimation({
        container: container.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: animationData, 
      });
    }
  }, []);

  return <div ref={container} className='animation-container'></div>;
};

export default Animation;