import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import imageOptimizer from "./plugins/image-optimizer";
import {visualizer} from 'rollup-plugin-visualizer'
import { terser } from 'rollup-plugin-terser'
console.log(process.env.NODE_ENV);
// https://vite.dev/config/
export default defineConfig({
  base: "./",
  build: {
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      input: {
        main: path.join(__dirname, "index.html"),
      },
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor";
          }
          if (id.includes("src")) {
            return "app";
          }
          if(/\/react(?:-dom)?/.test(id)) {
            return "react";
          }
        }
      }
    },
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  server: {
    host: "0.0.0.0",
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
