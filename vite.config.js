import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  esbuild: {
    loader: 'jsx', // Tell esbuild to process .js files as JSX
    include: /\.jsx?$/, // This applies to both .js and .jsx files
  },
});
