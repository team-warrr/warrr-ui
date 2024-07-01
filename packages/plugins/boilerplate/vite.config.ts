import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { OutputAsset, OutputChunk } from "rollup";

export function replaceScript(html: string, scriptFilename: string, scriptCode: string): string {
	const reScript = new RegExp(`<script([^>]*?) src="[./]*${scriptFilename}"([^>]*)></script>`);
	const preloadMarker = /"?__VITE_PRELOAD__"?/g;
	const newCode = scriptCode.replace(preloadMarker, "void 0");
	const inlined = html.replace(
		reScript,
		(_, beforeSrc, afterSrc) => `<script${beforeSrc}${afterSrc}>${newCode}</script>`
	);
	return _removeViteModuleLoader(inlined);
}

const _removeViteModuleLoader = (html: string) =>
	html.replace(
		/(<script type="module" crossorigin>\s*)\(function(?: polyfill)?\(\)\s*\{[\s\S]*?\}\)\(\);/,
		'<script type="module">'
	);

function injectBundledJsIntoHTML(): Plugin {
	return {
		name: "bundle-inject",
		enforce: "post",
		generateBundle(_, bundle) {
			const htmlFile = bundle["index.html"] as OutputAsset;
			const jsFiles = bundle["index.js"] as OutputChunk;
			htmlFile.source = replaceScript(htmlFile.source as string, "index.js", jsFiles.code);
			delete bundle["index.js"];
		},
	};
}

export default defineConfig({
	plugins: [react(), injectBundledJsIntoHTML()],
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
