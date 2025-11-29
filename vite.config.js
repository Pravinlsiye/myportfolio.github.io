import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? '/myportfolio/' : '/',
  build: {
    outDir: 'dist',
  },
  define: {
    __DEPLOY_DATE__: JSON.stringify(new Date().toISOString().split('T')[0]),
  },
}))

