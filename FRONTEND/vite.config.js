import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(new URL('.', import.meta.url).pathname, './src'), // Mapping to the src folder
      '@components': path.resolve(new URL('.', import.meta.url).pathname, './components'), // Mapping to the components folder
    },
  },
  server: {
    allowedHosts: [
      'lovely-sharing-nutten-trail.trycloudflare.com', // Add your Cloudflare tunnel URL here
    ],
  },
});
