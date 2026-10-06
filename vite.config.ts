import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Deployed to the root of a user site (https://samuvelnatarajanofficial.github.io/),
// so the base path is "/".
export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss()],
})
