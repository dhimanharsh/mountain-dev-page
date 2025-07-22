import React from "react";
import { motion } from "framer-motion";

const languages = [
  "HTML5", "CSS3", "JavaScript", "ReactJs",
  "ExpressJs", "NodeJs", "MongoDB",
  "Tailwind CSS", "BootStrap", "GitHub", "Figma",
];

const TechStack = () => {
  const total = languages.length;
  const radiusByScreen = {
    base: 100, // Mobile
    sm: 130,
    md: 160,
    lg: 190,
  };

  return (
    <div className="min-h-screen bg-[#0f0f1a] text-white flex flex-col items-center justify-center px-4 py-16 overflow-hidden">
      <h2 className="text-3xl sm:text-4xl font-bold font-poppins mb-12">
        Our Tech Stack
      </h2>

      {/* Orbit Container */}
      <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px]">
        <motion.div
          className="absolute inset-0"
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
        >
          {languages.map((lang, index) => {
            const angle = (360 / total) * index;

            return (
              <div
                key={index}
                className="absolute left-1/2 top-1/2"
                style={{
                  transform: `
                    rotate(${angle}deg)
                    translateX(10rem) /* default desktop spacing */
                    rotate(-${angle}deg)
                  `,
                }}
              >
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0px 0px 20px rgba(255, 255, 255, 0.3)",
                  }}
                  className={`w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:w-[90px] md:h-[90px] lg:w-[100px] lg:h-[100px]
                    flex items-center justify-center rounded-full text-center font-semibold
                    text-[0.6rem] sm:text-sm md:text-base
                    bg-gradient-to-br from-[#1e1e2f] to-[#6c63ff] shadow-md`}
                >
                  {lang}
                </motion.div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default TechStack;
