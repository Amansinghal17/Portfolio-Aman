import React from "react";
import { motion, useScroll, useSpring } from "motion/react";

// Thin gradient bar pinned to the very top of the viewport that fills as
// the visitor scrolls through the page.
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-aqua via-lavender to-coral"
      style={{ scaleX }}
    />
  );
};

export default ScrollProgress;
