import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AOSInitializer = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,  // Adjust your settings here
      offset: 200,
      easing: 'ease-in-out',
      once: true,      // Whether animation should happen only once
    });
  }, []);

  return null; // This component doesn't need to render anything
};

export default AOSInitializer;
