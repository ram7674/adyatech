import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top when the route changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Use "smooth" for a smoother scroll
    });
  }, [location.pathname]);

  return null;
};

export default ScrollToTop;