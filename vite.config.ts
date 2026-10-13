import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
// GitHub Pages ではサイトが
// https://hashimoto-19.github.io/simple-calculator/ のように
// 「リポジトリ名」付きのパスで公開される。
// base はそのパスの先頭を Vite に教える設定。
export default defineConfig({
  base: "/simple-calculator/",
  plugins: [react(), tailwindcss()],
});
