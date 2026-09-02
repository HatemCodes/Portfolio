import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Without this, clicking a nav link keeps your old scroll position on the new page.
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
