import { defineConfig } from 'vite';
import * as path from 'path';
import react from '@vitejs/plugin-react';
// @ts-ignore
import eslint from 'vite-plugin-eslint';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), eslint(), svgr({
    include: "**/*.svg?react",
  }), tsconfigPaths()],
  resolve: {
    alias: {
      '@styles': path.resolve(__dirname, 'src/styles'),
    },
  },
  build: {
    sourcemap: true
  }
})