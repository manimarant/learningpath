import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      plugins: [react()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      server: {
        host: '0.0.0.0',
        port: process.env.PORT ? parseInt(process.env.PORT) : 5173
      },
      preview: {
        host: '0.0.0.0',
        port: process.env.PORT ? parseInt(process.env.PORT) : 4173,
        allowedHosts: [
          'learningpath-2odh.onrender.com',
          'localhost',
          '127.0.0.1',
          '.onrender.com' // Allow all onrender.com subdomains
        ]
      },
      build: {
        outDir: 'dist',
        sourcemap: false,
        rollupOptions: {
          output: {
            manualChunks: undefined
          }
        }
      }
    };
});
