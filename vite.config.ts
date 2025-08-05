import { resolve } from "path";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config"; // ← вместо 'vite'

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./tests/setup.ts", // или setup.js, если на JS
  },
  resolve: {
    alias: {
      "@app": resolve(__dirname, "src/app"),
      "@assets": resolve(__dirname, "src/assets"),
      "@entities": resolve(__dirname, "src/entities"),
      "@features": resolve(__dirname, "src/features"),
      "@widgets": resolve(__dirname, "src/widgets"),
      "@shared": resolve(__dirname, "src/shared"),
      "@pages": resolve(__dirname, "src/pages"),
    },
  },
  build: {
    outDir: "dist", // ← всё попадёт в ./dist вместо src/
    emptyOutDir: true, // ← очищает папку dist перед сборкой
    sourcemap: false,
  },
});
