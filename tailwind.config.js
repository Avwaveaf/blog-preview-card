/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'hsl(47, 88%, 63%)',
        },
        neutral: {
          grey: 'hsl(0, 0%, 50%)',
          black: 'hsl(0, 0%, 7%)',
        }
      }
    },
  },
  plugins: [],
}

