import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Sustituye "signatureapi-website-framer-react" por el NOMBRE EXACTO del repo
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === 'production' ? '/signatureapi-website-framer-react/' : '/',
  define: {
    'import.meta.env.BASE_URL': JSON.stringify(mode === 'production' ? '/signatureapi-website-framer-react/' : '/')
  }
}))
