import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  base: '/week5/',   // must match repo name
  plugins: [react()]
})