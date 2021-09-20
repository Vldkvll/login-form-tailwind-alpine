import { defineConfig } from "vite";
import { resolve } from "path";
import { posthtmlPlugin } from "vite-plugin-posthtml";
import inlineSVG from "posthtml-inline-svg";

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
        registration: resolve(__dirname, "registration.html"),
        // 404: resolve(__dirname, "src/404.html"),
      },
    },
  },
  plugins: [
    posthtmlPlugin({
      plugins: [
        inlineSVG({
          cwd: resolve("src/image/icon"),
          tag: "icon",
          attr: "src",
        }),
      ],
    }),
  ],
});
