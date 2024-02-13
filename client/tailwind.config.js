/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "pokeRed":"#DC143C",
        "pokeRedDark":"#B22222",
        "pokeGold": "#FFD700",
        "pokeBlue" :"#6495ED",
        "pokeGrey":"#708090"
      },
      screens:{
        tablet: "769"
      }
    },
  },
  plugins: [],
}

