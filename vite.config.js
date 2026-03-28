import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default {
  base: '/Portfolio-Aman/',
  plugins: [react(), tailwindcss()],
}