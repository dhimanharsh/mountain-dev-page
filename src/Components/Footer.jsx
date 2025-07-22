import React from "react";

function Footer() {
  return (
    <div class="relative h-full w-full bg-black">
      <div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      {/* start here */}

  <div className="relative  text-white text-center py-24 px-4 overflow-hidden">
  {/* Background Watermark */}
  <p className="absolute top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 
    text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[5vw]
    font-extrabold text-[#6c63ff18] whitespace-nowrap tracking-wider z-0 select-none pointer-events-none uppercase">
    The Himalayan Dev Company
  </p>

  {/* Foreground Content */}
  <div className="relative z-10 max-w-4xl mx-auto">
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-poppins mb-4 leading-tight">
      Your Next Big Project{" "}
      <span className="text-[#6c63ff]">Deserves World-Class Code {'</>'}</span>
    </h2>

    <h3 className="text-lg sm:text-xl font-medium text-[#23d7b0] mb-8 tracking-wide">
      LET’S TALK
    </h3>

    <a
      href="#contact"
      className="inline-block px-6 py-2 text-sm sm:text-base bg-[#6c63ff] text-white font-semibold rounded-full shadow-md hover:scale-105 hover:shadow-[0_0_12px_#6c63ff] transition-all mb-10"
    >
      Contact Us
    </a>

    {/* Social Icons */}
    <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <img src="https://cdn.simpleicons.org/linkedin/6c63ff" alt="LinkedIn" className="w-6 h-6 sm:w-7 sm:h-7 hover:scale-110 transition-transform" />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <img src="https://cdn.simpleicons.org/instagram/6c63ff" alt="Instagram" className="w-6 h-6 sm:w-7 sm:h-7 hover:scale-110 transition-transform" />
      </a>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <img src="https://cdn.simpleicons.org/facebook/6c63ff" alt="Facebook" className="w-6 h-6 sm:w-7 sm:h-7 hover:scale-110 transition-transform" />
      </a>
      <a href="https://github.com" target="_blank" rel="noopener noreferrer">
        <img src="https://cdn.simpleicons.org/github/6c63ff" alt="GitHub" className="w-6 h-6 sm:w-7 sm:h-7 hover:scale-110 transition-transform" />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <img src="https://cdn.simpleicons.org/twitter/6c63ff" alt="Twitter" className="w-6 h-6 sm:w-7 sm:h-7 hover:scale-110 transition-transform" />
      </a>
    </div>
    
  </div>


</div>




    </div>
  );
}

export default Footer;
