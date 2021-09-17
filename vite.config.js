import { defineConfig } from "vite";
import { resolve } from "path";
import { posthtmlPlugin } from "vite-plugin-posthtml";
import compress from "vite-plugin-compression";
import imageMin from "vite-plugin-imagemin";
import fs from "fs";
import inlineSVG from "posthtml-inline-svg";
import posthtml from "posthtml";

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
    // imageMin({
    //   svgo: {
    //     // https://github.com/svg/svgo#built-in-plugins
    //     plugins: [
    //       { name: "RemoveTitle", active: false },
    //       { name: "RemoveDescription", active: false },
    //       { name: "RemoveViewBox", active: false },
    //       { name: "removeDimensions", active: true },
    //       { name: "removeScriptElement", active: true },
    //       { name: "removeStyleElement", active: true },
    //     ],
    //   },
    // }),
    // compress({
    //   algorithm: "brotliCompress",
    // }),
    // posthtmlPlugin({
    //   posthtml: [
    //     posthtml(
    //       inlineSVG({
    //         cwd: resolve("src"),
    //         tag: "icon",
    //         attr: "src",
    //       })
    //     )
    //       .process(fs.readFileSync("index.html", "utf8"))
    //       .then((result) => console.log(result.html)),
    //   ],
    // }),
  ],
});
