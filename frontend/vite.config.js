import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate React and ReactDOM into a vendor chunk
          vendor: ['react', 'react-dom'],
          icons: ['react-icons'] // Separate react-icons/fi into its own chunk
        }
      }
    }
  }
})
