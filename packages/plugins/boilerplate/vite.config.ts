import path from "path";

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import generateFile from "vite-plugin-generate-file";

import manifest from "./figma.manifest";
import { injectBundledJsIntoHTML } from "./injectBundledJsIntoHTML";

export default defineConfig({
  plugins: [
    react(),
    injectBundledJsIntoHTML(),
    generateFile({
      type: "json",
      output: "manifest.json",
      data: manifest,
    }),
  ],
  build: {
    rollupOptions: {
      input: [path.resolve("index.html"), path.resolve("src/plugin/code.ts")],
      output: {
        entryFileNames: "[name].js",
      },
    },
    outDir: path.resolve("dist"),
  },
});
