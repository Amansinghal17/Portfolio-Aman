import React from "react";
import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";
import ResumeDownload from "./ResumeDownload";
import { mySocials } from "../constants";

const NAME = "Aman Singhal";

const letterContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.045, delayChildren: 0.9 },
  },
};

const letterVariant = {
  hidden: { opacity: 0, y: 40, rotateX: -90 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const AnimatedName = ({ className }) => (
  <motion.span
    className={`inline-flex flex-wrap ${className}`}
    style={{ perspective: 600 }}
    variants={letterContainer}
    initial="hidden"
    animate="visible"
  >
    {NAME.split("").map((char, i) => (
      <motion.span
        key={i}
        variants={letterVariant}
        style={{ display: "inline-block", transformStyle: "preserve-3d" }}
      >
        {char === " " ? "\u00A0" : char}
      </motion.span>
    ))}
  </motion.span>
);

const HeroText = () => {
  const words = ["Efficient", "Scalable", "User-Focused"];
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="relative z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
      {/* Desktop View */}
      <div className="flex-col hidden md:flex c-space">
        <motion.h1
          className="text-3xl font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5 }}
        >
          Hi, I’m <AnimatedName className="font-semibold text-white" />
        </motion.h1>

        <div className="flex flex-col items-start">
          <motion.p
            className="text-5xl font-medium text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            A Software Developer <br />
            Focused on Building
          </motion.p>

          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={words}
              className="font-black text-white text-8xl"
            />
          </motion.div>

          <motion.p
            className="text-4xl font-medium text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            Digital Products & Experiences
          </motion.p>

          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 2.1 }}
            className="flex items-center gap-4 mt-8"
          >
            <ResumeDownload />
            <div className="flex items-center gap-3">
              {mySocials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="grid transition-all border rounded-full size-10 place-content-center border-white/10 bg-white/5 hover:border-white/30 hover:-translate-y-1 duration-200"
                >
                  <img src={social.icon} className="size-4" alt={social.name} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="flex flex-col space-y-6 md:hidden">
        <motion.p className="text-4xl font-medium">
          Hi, I’m <AnimatedName className="font-semibold text-white" />
        </motion.p>

        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.5 }}
        >
          <motion.p className="text-5xl font-black text-neutral-300">
            Creating
          </motion.p>

          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            <FlipWords
              words={words}
              className="font-bold text-white text-7xl"
            />
          </motion.div>

          <motion.p
            className="text-4xl font-black text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            Web & Software Solutions
          </motion.p>
        </motion.div>

        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 2.1 }}
          className="flex flex-col items-center gap-4"
        >
          <ResumeDownload />
          <div className="flex items-center gap-3">
            {mySocials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="grid transition-all border rounded-full size-10 place-content-center border-white/10 bg-white/5 hover:border-white/30"
              >
                <img src={social.icon} className="size-4" alt={social.name} />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroText;
