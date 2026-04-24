import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Optimization: Assets over 4kb will be inlined, reducing HTTP requests
    assetsInlineLimit: 4096,
    // Minification using default Esbuild (fast)
    minify: 'esbuild',
    rollupOptions: {
      output: {
        // Manual chunks for better caching
        manualChunks: {
          vendor: ['react', 'react-dom', 'lucide-react'],
        },
      },
    },
  },
})
