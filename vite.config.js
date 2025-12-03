import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import imageOptimizer from "./plugins/image-optimizer";
import {visualizer} from 'rollup-plugin-visualizer'
console.log(process.env.NODE_ENV);
// https://vite.dev/config/
export default defineConfig({
  base: "./",
  build: {
    rollupOptions: {
      input: {
        main: path.join(__dirname, "index.html"),
      },
      external: ["motion"]
    },
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  plugins: [
    react(),
    imageOptimizer({
      quality: 80,
      webpQuality: 80,
      enableWebp: true,
      enableCompress: true,
    }),
    process.env.NODE_ENV === 'production' && visualizer({
      open: true,
      gzipSize: true,
      brotliSize: true,
    }),
  ],
});
