import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  publicDir: "./static",
  base: "./",
  server: {
    port: 5174,
    host: '0.0.0.0',
    strictPort: true
  },
  preview: {
    port: 5174,
    host: '0.0.0.0'
  }
});