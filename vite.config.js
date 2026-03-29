import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default {
  base: process.env.NODE_ENV === 'production' ? "/Portfolio-Aman/" : "/",
  build: { outDir: "docs" },
  plugins: [react(), tailwindcss()],
}
