import React from "react";
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
  },
];

function AboutUs() {
  return (
    <div className="relative min-h-screen">
      {/* Radial Gradient Background */}
      <div className="absolute top-0 left-0 w-full h-full z-[-2] bg-black bg-[radial-gradient(ellipse_100%_80%_at_50%_-20%,rgba(80,80,80,0.2),black)]"></div>
{/* main section */}
      <section id="about" className="py-24 px-4 sm:px-8 text-white">
        <div className="max-w-6xl mx-auto space-y-20 text-center">
            {/* heading  */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-playfair mb-6">
            Born in the Himalayas, Built for the World
          </h2>
          {/* heading para */}
          <p className="text-gray-400 text-md sm:text-lg leading-relaxed mb-12">
            We are not just developers. We are creators shaped by the serenity
            and strength of the mountains — driven to build meaningful digital
            experiences that reach beyond the clouds.
          </p>
          {/* Reusable Card Component */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {aboutContent.map((item, index) => (
              <motion.div
                key={item.title}
                className={`bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-2xl p-8 shadow-xl border border-${item.color}-900 group transition-all duration-500 hover:shadow-[0_0_20px_${item.color}-500]`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: item.delay }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <h2
                  className={`text-3xl font-bold text-${item.color}-400 mb-4 group-hover:text-white transition duration-300`}
                >
                  {item.title}
                </h2>
                <p className="text-gray-300 text-base leading-relaxed group-hover:scale-[1.01] group-hover:tracking-wide transition-all duration-300">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>


        </div>
      </section>
    </div>
  );
}

export default AboutUs;
