import { defineConfig } from "tsup";

export default defineConfig({
  target: "es2020",
  clean: true,
  dts: true,
  format: ["cjs", "esm"],
  minify: true,
  banner: { js: '"use client";' },
});
