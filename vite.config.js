import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:8081', // Backend server URL
        changeOrigin: true,               // Changes the origin of the host header to the target URL
        rewrite: (path) => path.replace(/^\/api/, ''), // Remove /api from the path
      },
    },
  },
})
