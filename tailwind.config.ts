import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./page/**/*.{js,ts,jsx,tsx,mdx}",
    "./component/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Work Sans', 'sans-serif'],
        inter: ['inter', 'sans-serif'],
      },
      backgroundImage: (theme) => ({
        'heroLg': "url('/imgs/heroBg.png')",
        'heroSm': "url('/imgs/HeroSm.png')",
        // Add more background URL utilities as needed
      }),
    },
  },
  plugins: [],
};
export default config;
