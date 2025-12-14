import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/worthtoday/'   // 一定要跟 GitHub repo 名稱一樣
})