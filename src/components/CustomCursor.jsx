import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

// A lightweight custom cursor: a dot that follows the mouse tightly, and a
// ring that trails slightly behind and expands over anything clickable.
// Disabled automatically on touch devices so mobile is untouched.
const CustomCursor = () => {
  const [isTouch, setIsTouch] = useState(true);
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const ringX = useSpring(mouseX, { damping: 25, stiffness: 300, mass: 0.5 });
  const ringY = useSpring(mouseY, { damping: 25, stiffness: 300, mass: 0.5 });

  useEffect(() => {
    const touchCapable = window.matchMedia("(pointer: coarse)").matches;
    setIsTouch(touchCapable);
    if (touchCapable) return;

    const move = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      const target = e.target;
      setIsPointer(
        !!target.closest(
          "a, button, input, textarea, [role='button'], .cursor-pointer"
        )
      );
    };
    const hide = () => setIsVisible(false);

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", hide);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", hide);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isTouch) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 z-[999] pointer-events-none rounded-full bg-white"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
          width: 6,
          height: 6,
          opacity: isVisible ? 1 : 0,
        }}
      />
      <motion.div
        className="fixed top-0 left-0 z-[998] pointer-events-none rounded-full border border-white/60"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 1 : 0,
        }}
        animate={{
          width: isPointer ? 56 : 28,
          height: isPointer ? 56 : 28,
          backgroundColor: isPointer ? "rgba(122,87,219,0.15)" : "rgba(255,255,255,0)",
          borderColor: isPointer ? "rgba(122,87,219,0.8)" : "rgba(255,255,255,0.5)",
        }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      />
    </>
  );
};

export default CustomCursor;
