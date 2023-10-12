/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        marquee: 'marquee 5s linear infinite',
        marquee2: 'marquee2 5s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
        fontFamily:{
          Playfair:['Playfair Display'],
        },
      screens:{
        vvsm:"250px",
        vsm:"360px",
        ssm:"400px",
        sm:"640px",
        md:"769px",
        lg:"1024px",
        xl:"1280px",
        xxl:"1800px"
      },
    },
  },
  plugins: [],
}

