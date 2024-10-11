import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig( ({mode}) => {
  // Load environment variables based on the mode (development, production, etc.)
  const env = loadEnv(mode, process.cwd());

  return {
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      '/base-url': {
        target: env.VITE_API_BASE_URL, // Backend server URL
        changeOrigin: true,               // Changes the origin of the host header to the target URL
        rewrite: (path) => path.replace(/^\/base-url/, ''), // Remove /base-url from the path
      },
    },
  },
}
});


