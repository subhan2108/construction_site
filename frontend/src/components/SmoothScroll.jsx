import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function SmoothScroll({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0,       // how long the scroll takes (seconds)
      easing: (t) => t,    // easing function, linear by default
      smoothWheel: true,   // smooth scrolling with mouse wheel
      smoothTouch: false,  // keep touch scrolling natural
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy(); // cleanup on unmount
    };
  }, []);

  return <>{children}</>;
}
