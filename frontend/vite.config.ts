import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import ViteConfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svgr({
      include: '**/*.svg',
    }),
    react(),
    ViteConfigPaths(),
  ],
  resolve: {
    alias: {
      src: '/src',
    },
  },
});
