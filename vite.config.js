import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/hotelTheTree",
  plugins: [react(),
  tailwindcss(),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("react") || id.includes("react-dom")) {
              return "react-vendor"; // Separate React files
            }
            if (id.includes("framer-motion") || id.includes("gsap")) {
              return "animation-vendor"; // Separate animation libraries
            }
            return "vendor"; // Other external libraries
          }
        },
      },
    },
  },
});

