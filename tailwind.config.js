// tailwind.config.js
theme: {
  extend: {
    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif'],
      playfair: ['Playfair Display', 'serif'],
    },
  },
},


export const theme = {
  extend: {
    keyframes: {
      'scroll-left': {
        '0%': { transform: 'translateX(0)' },
        '100%': { transform: 'translateX(-50%)' }, // Use 50% for looping scroll
      },
    },
    animation: {
      'scroll-left': 'scroll-left 20s linear infinite',
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
  },
};
export const plugins = [];

// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      keyframes: {
        rotate360: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        spinSlow: "rotate360 20s linear infinite",
      },
    },
  },
  plugins: [],
};
