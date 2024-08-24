import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths';
import process from 'process';

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

    return {
        base: `${env.VITE_BASE_LOCATION_URL}/`,
        build: {
            rollupOptions: {
                output: {
                    dir: 'dist',
                    entryFileNames: 'ifeel-fe.js'
                }
            }
        },
        plugins: [react(), tsconfigPaths()],
    }
})
