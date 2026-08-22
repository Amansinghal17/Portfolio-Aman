import React, { useRef } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

const ResumeDownload = ({ variant = "button", className = "" }) => {
  const handleDownload = () => {
    // Replace 'Aman_Singhal_cv (3).pdf' with your actual resume filename
    const resumePath = "assets/resume/Aman_Singhal_cv (3).pdf";
    const link = document.createElement("a");
    link.href = resumePath;
    link.download = "Aman_Singhal_cv (3).pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Magnetic pull: the button leans slightly toward the cursor on hover.
  const btnRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 12 });
  const springY = useSpring(y, { stiffness: 150, damping: 12 });

  const handleMagneticMove = (e) => {
    const rect = btnRef.current.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set(relX * 0.35);
    y.set(relY * 0.35);
  };

  const handleMagneticLeave = () => {
    x.set(0);
    y.set(0);
  };

  if (variant === "icon") {
    return (
      <motion.button
        onClick={handleDownload}
        className={`flex items-center justify-center gap-2 px-6 py-2 rounded-md bg-gradient-to-r from-lavender to-purple-600 hover-animation text-white font-medium transition-all ${className}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        title="Download Resume"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
          />
        </svg>
        Resume
      </motion.button>
    );
  }

  return (
    <motion.button
      ref={btnRef}
      onClick={handleDownload}
      onMouseMove={handleMagneticMove}
      onMouseLeave={handleMagneticLeave}
      style={{ x: springX, y: springY }}
      className={`px-6 py-3 text-center rounded-md cursor-pointer bg-gradient-to-r from-lavender to-purple-600 hover-animation text-white font-medium transition-colors ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      Download Resume
    </motion.button>
  );
};

export default ResumeDownload;
