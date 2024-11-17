import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  root: '.',
  base: '/Projeto3DAW_WebApp/',
  build: {
    outDir: 'dist',
},
});
