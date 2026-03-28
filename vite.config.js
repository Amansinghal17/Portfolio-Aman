import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default {
  base: "/Portfolio-Aman/",
  build: { outDir: "docs" },
  plugins: [react(), tailwindcss()],
}
