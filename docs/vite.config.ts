import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'polybase': path.resolve(__currentDir, '../src/index.ts'),
      '@': path.resolve(__currentDir, './src'),
    },
  },
})
