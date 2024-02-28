/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['poppins'],
      },
      container: {
        center: true,
        maxWidth: {
          default: '100px',
        },
      },
      minWidth: {
        default: '1000px',
      },

    },
  },
  plugins: [],
}

