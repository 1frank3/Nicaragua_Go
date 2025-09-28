/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
       colors: {
        primary: "#012840",   // Azul oscuro (header/footer)
        secondary: "#F29F05", // Amarillo cálido
        accent: "#A52A2A",    // Rojo tierra
      },
      fontFamily: {
        title: ["Agrandir", "sans-serif"],
        body: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: ["flowbite/plugin"],
}
