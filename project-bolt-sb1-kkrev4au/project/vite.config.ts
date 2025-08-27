
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/', // Caminho base para GitHub Pages user/organization repo
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
