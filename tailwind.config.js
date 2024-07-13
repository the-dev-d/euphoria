/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'valorant-bg': "#1a1a22"
      },
      fontFamily: {
        equinox: "equinox",
        valorant: "valorant",
        vonique: "vonique"
      }
    },
  },
  plugins: [],
}

