import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Portfolio/', // Replace 'Portfolio' with your repository name
  plugins: [react()],
});
