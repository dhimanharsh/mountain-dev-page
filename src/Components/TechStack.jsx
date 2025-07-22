import React from "react";
import { motion } from "framer-motion";

const languages = [
  {
    name: "HTML5",
    icon: "/html-5-svgrepo-com.svg",
  },
  {
    name: "CSS3",
    icon: "/css-3-svgrepo-com.svg",
  },
  {
    name: "JavaScript",
    icon: "/js-svgrepo-com.svg",
  },
  {
    name: "ReactJs",
    icon: "react.svg",
  },
  {
    name: "ExpressJs",
    icon: "express.svg",
  },
  {
    name: "NodeJs",
    icon: "nodejs-icon-svgrepo-com.svg",
  },
  {
    name: "MongoDB",
    icon: "mongodb-logo-svgrepo-com.svg",
  },
  {
    name: "Tailwind CSS",
    icon: "tailwind.svg",
  },
  {
    name: "BootStrap",
    icon: "bootstrap.svg",
  },
  {
    name: "GitHub",
    icon: "github.svg",
  },
  {
    name: "Figma",
    icon: "/figma.svg",
  },
];

const TechStack = () => {
  const total = languages.length;

  return (
   <>
   
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-16 overflow-hidden">
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
            duration: 25,
            ease: "linear",
          }}
        >
          {languages.map((lang, index) => {
            const angle = (360 / total) * index;

            return (
              <div
                key={lang.name}
                className="absolute left-1/2 top-1/2"
                style={{
                  transform: `
                    rotate(${angle}deg)
                    translateX(11.5rem)
                    rotate(-${angle}deg)
                  `,
                }}
              >
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0px 0px 20px rgba(255, 255, 255, 0.3)",
                  }}
                  className={`
                    w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:w-[90px] md:h-[90px] lg:w-[100px] lg:h-[100px]
                    p-3 flex items-center justify-center rounded-full
                    bg-gradient-to-br from-[#1e1e2f] to-[#6c63ff]
                    shadow-md transition-all duration-300
                  `}
                >
                  <img
                    src={lang.icon}
                    alt={lang.name}
                    className="w-full h-[2.4em] object-contain"
                  />
                </motion.div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
    </>
  );
};

export default TechStack;
