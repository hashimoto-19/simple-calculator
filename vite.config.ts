import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
// GitHub Pages 用: リポジトリ名が URL のパスになる
// 例: https://hashimoto-19.github.io/simple-calculator/
export default defineConfig({
  base: "/simple-calculator/",
  plugins: [react(), tailwindcss()],
});
