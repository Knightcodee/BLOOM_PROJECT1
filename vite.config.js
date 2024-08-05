// vite.config.js

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/BLOOM_PROJECT1/',  // This ensures the app is served from the correct subdirectory on GitHub Pages
  build: {
    sourcemap: true,  // Enable source maps for easier debugging of deployed code
  }
})
