import { defineConfig } from 'vite';
import dotenv from 'dotenv';
import react from '@vitejs/plugin-react';

// Load environment variables from .env
dotenv.config();

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api/sanity": {
        target: `https://${process.env.VITE_PROJECT_ID}.api.sanity.io/${process.env.VITE_API_VERSION}/data/query/${process.env.VITE_DATASET}`,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/sanity/, ""),
        configure: (proxy) => {
          proxy.on("proxyReq", (proxyReq) => {
            proxyReq.setHeader("Authorization", `Bearer ${process.env.VITE_API_TOKEN}`);
          });
        },
      },
    },
  },
})  
