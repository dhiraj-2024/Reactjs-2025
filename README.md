# Reactjs-2025


tailwind for vite + react : 

*******************
npm install -D tailwindcss postcss autoprefixer
*******************
npx tailwindcss init -p
*******************
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
*******************
index.css

@tailwind base;
@tailwind components;
@tailwind utilities;