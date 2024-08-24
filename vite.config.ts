import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/ifeel/',
  build: {
    rollupOptions: {
      output: {
        dir: 'dist',
        entryFileNames: 'ifeel.js',
        assetFileNames: 'ifeel.css',
        chunkFileNames: "ifeelChunk.js",
        manualChunks: undefined,
      }
    }
  },
  plugins: [react(), tsconfigPaths()],
})
