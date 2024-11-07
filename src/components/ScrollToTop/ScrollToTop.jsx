import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top
    window.scrollTo(0, 0);

    // Reinitialize AOS after page load to ensure animations work correctly
    setTimeout(() => {
      if (typeof window.AOS !== 'undefined') {
        window.AOS.refresh();  // Refresh AOS animations after navigation
      }
    }, 100); // A small delay ensures the page content is loaded before initializing AOS

  }, [pathname]);

  return null;
};

export default ScrollToTop;
