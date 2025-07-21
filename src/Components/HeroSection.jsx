import React from "react";
import Navbar from "./Navbar";
import { motion } from "framer-motion";

function HeroSection() {
  return (
    <div class="relative h-[100vh] w-full bg-black ">
      <div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      {/* navbar */}
      <nav >       
          <Navbar />
      </nav>

      {/* hero line */}
      <div className="text-white min-h-[80vh] flex items-center justify-center px-4 sm:px-6 md:px-8 ">
        <div className="text-center max-w-4xl w-full">
          <motion.p
            className="text-xs sm:text-sm md:text-lg font-light tracking-widest uppercase text-gray-400 font-montserrat"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Your Next Big Idea Deserves More Than Just Code —
          </motion.p>

          <motion.h1
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mt-4 leading-snug sm:leading-tight font-playfair"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          >
            It Needs Altitude.
          </motion.h1>

          <motion.h2
    className="text-lg sm:text-2xl md:text-3xl font-semibold text-sky-400 mt-8 font-montserrat"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 1, ease: "easeOut" }}
  >
    — The Himalayan Devs —
  </motion.h2>
          <motion.div
            className="mt-16 sm:mt-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
          >
            <button className="bg-white text-slate-900 px-6 py-3 rounded-2xl text-sm sm:text-base font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-200">
              Let’s Build Together
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
