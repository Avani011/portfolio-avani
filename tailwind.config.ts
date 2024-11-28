import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/globals.css",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#ffffff',
        'secondary': '#000000',
        'green': '#5ce512',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      width:{
        '30rem':'40rem',
        '56%':'56%',
        '50%':'50%',
        '85%':'84%'
      },
      screens: {
        'sm':'360px'
      },
      fontSize: {
        'xxs':'0.5rem'
      }
    },
  },
  plugins: [],
} satisfies Config;
