import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
	plugins: [react()],
	build: {
		rollupOptions: {
			input: [path.resolve("src/plugin/code.ts"), path.resolve("index.html")],
			output: {
				entryFileNames: "[name].js",
			},
		},
		outDir: path.resolve("dist"),
	},
});
