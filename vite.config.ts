import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  base: '/ifeel-fe/',
  build: {
    rollupOptions: {
      output: {
        dir: 'dist',
        entryFileNames: 'ifeel-fe.js'
      }
    }
  },
  plugins: [react(), tsconfigPaths()],
})
