
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import LogoAnimation from "./logoAnimation";
import "./Loader.css";

function Loader() {
  const loaderRef = useRef(null);

  useLayoutEffect(() => {
    const loader = loaderRef.current;
    if (!loader) return;

    const ctx = gsap.context(() => {
      const paths = gsap.utils.toArray(".logo-strokes path");

      paths.forEach((path) => {
        const length = path.getTotalLength();

        gsap.set(path, {
          strokeDasharray: length,
          strokeDashoffset: length,
        });
      });

      gsap.set("#logo-dot", {
        scale: 0,
        transformOrigin: "center",
      });

      gsap.set(".loader-origin", {
        autoAlpha: 0,
        scale: 0,
      });

      const tl = gsap.timeline({
        onComplete: () => setFinished(true),
      });

      // Draw J and A together
      tl.to("#letter-j", {
        strokeDashoffset: 0,
        duration: 0.65,
        ease: "power2.inOut",
      }, 0);

      tl.to(
        ["#letter-a-left", "#letter-a-right"],
        {
          strokeDashoffset: 0,
          duration: 0.65,
          ease: "power2.inOut",
        },
        0
      );

      tl.to("#letter-a-crossbar", {
        strokeDashoffset: 0,
        duration: 0.35,
        ease: "power2.out",
      }, 0.3);

      // Show the full stop
      tl.to("#logo-dot", {
        scale: 1,
        duration: 0.2,
        ease: "back.out(2)",
      });

      // Hold the completed logo briefly
      tl.to({}, { duration: 0.45 });

      // Fade out the ENTIRE loader overlay
      tl.to(loader, {
        autoAlpha: 0,
        duration: 0.8,
        ease: "power2.inOut",
      });
    }, loader);

    return () => ctx.revert();
  }, []);

  return (
    <div className="site-loader" ref={loaderRef}>
      <span className="loader-origin" />
      <div className="loader-mark">
        <LogoAnimation />
      </div>
    </div>
  );
}

export default Loader;
