import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
// import svgr from "vite-plugin-svgr";


// https://vite.dev/config/
export default defineConfig({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#fa5554", //color principal
      },
    },
  },
  plugins: [
    react(),
    tailwindcss(),
    /*svgr({
      exportAsDefault: false,
    }),*/
  ],
  
})
