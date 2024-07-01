import { defineConfig, Plugin, Rollup } from "vite";
import react from "@vitejs/plugin-react";
import generateFile from "vite-plugin-generate-file";
import path from "path";

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
			const htmlFile = bundle["index.html"] as Rollup.OutputAsset;
			const jsFiles = bundle["index.js"] as Rollup.OutputChunk;
			htmlFile.source = replaceScript(htmlFile.source as string, "index.js", jsFiles.code);
			delete bundle["index.js"];
		},
	};
}

export default defineConfig({
	plugins: [
		react(),
		injectBundledJsIntoHTML(),
		generateFile({
			type: "json",
			output: "manifest.json",
			data: {
				name: "warrr",
				id: "1387759100113360584",
				api: "1.0.0",
				main: "code.js",
				capabilities: [],
				enableProposedApi: false,
				documentAccess: "dynamic-page",
				editorType: ["figma"],
				ui: "index.html",
				networkAccess: {
					allowedDomains: ["none"],
				},
			},
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
