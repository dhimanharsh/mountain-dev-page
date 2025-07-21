import React from "react";
import Navbar from "./Navbar";
import { motion } from "framer-motion";



const aboutContent = [
  {
    title: "Who We Are",
    text: "A tribe of frontend specialists, backend engineers, UI/UX designers, and creative thinkers — we’re united by our passion for building amazing experiences. We don’t just develop — we elevate.",
    color: "sky",
    delay: 0,
  },
  {
    title: "Our Journey",
    text: "Founded in the heart of the Himalayas, we began with a mission to bring mountain-grade stability and clarity to digital products. Over time, we evolved into a team of passionate developers, designers, and dreamers.",
    color: "rose",
    delay: 0.2,
  },
  {
    title: "Our Philosophy",
    text: "We believe code is not just syntax — it’s an experience. At The Himalayan Devs, we focus on clean UI, user-first design, and scalable solutions that feel as peaceful and powerful as the mountains we’re named after.",
    color: "purple",
    delay: 0.4,
  },
  {
    title: "How We Work",
    text: "We collaborate deeply with every client, understand their needs, and build smart, elegant, and fast products. We follow agile principles, believe in clear communication, and deliver on time — every time.",
    color: "emerald",
    delay: 0.6,
  }
];
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
       <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
        {aboutContent.map((item) => (
          <motion.div
            key={item.title}
            className={`relative group w-full min-h-[300px] flex items-center justify-center rounded-xl bg-gradient-to-br from-slate-900 via-slate-950 to-black border-2 border-${item.color}-800 hover:border-${item.color}-400 hover:shadow-[0_8px_30px_rgba(0,0,0,0.6)] hover:shadow-${item.color}-500 transition-all duration-500 overflow-hidden`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: item.delay }}
            viewport={{ once: true }}
          >
            <div className="text-center px-4">
              <h2 className={`text-2xl sm:text-3xl md:text-4xl font-semibold font-sans tracking-wide text-${item.color}-400 group-hover:opacity-0 transition-opacity duration-300`}>
                {item.title}
              </h2>
            </div>
            <div className={`absolute bottom-[-100%] left-0 w-full h-full bg-slate-900 text-white group-hover:bottom-0 transition-all duration-500 rounded-xl flex flex-col items-center justify-center p-4 sm:p-6 text-sm leading-relaxed text-center border-t-2 border-${item.color}-500 overflow-y-auto`}>
              <h3 className={`text-${item.color}-400 font-semibold text-lg mb-2`}>{item.title}</h3>
              <p className="text-gray-300 max-w-[90%] sm:max-w-full">{item.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
      </div>
    </div>
  );
}

export default HeroSection;
