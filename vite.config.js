import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  //   root: "src",
  server: {
    open: true,
  },
  build: {
    emptyOutDir: true,
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        login: resolve(__dirname, "login.html"),
        // 404: resolve(__dirname, "src/404.html"),
      },
    },
  },
});
