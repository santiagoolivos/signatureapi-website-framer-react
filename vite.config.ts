import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Sustituye "signatureapi-website-framer-react" por el NOMBRE EXACTO del repo
export default defineConfig(() => ({
  plugins: [react()],
}))
