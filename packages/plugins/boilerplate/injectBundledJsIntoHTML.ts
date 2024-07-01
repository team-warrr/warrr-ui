import { Plugin, Rollup } from "vite";

const replaceScript = (html: string, scriptFilename: string, scriptCode: string) => {
	const reScript = new RegExp(`<script([^>]*?) src="[./]*${scriptFilename}"([^>]*)></script>`);
	const preloadMarker = /"?__VITE_PRELOAD__"?/g;
	const newCode = scriptCode.replace(preloadMarker, "void 0");
	const inlined = html.replace(
		reScript,
		(_, beforeSrc, afterSrc) => `<script${beforeSrc}${afterSrc}>${newCode}</script>`
	);

	return removeViteModuleLoader(inlined);
};

const removeViteModuleLoader = (html: string) =>
	html.replace(
		/(<script type="module" crossorigin>\s*)\(function(?: polyfill)?\(\)\s*\{[\s\S]*?\}\)\(\);/,
		'<script type="module">'
	);

export const injectBundledJsIntoHTML = (): Plugin => {
	return {
		name: "vite-plugin-react-bundle-inject",
		enforce: "post",
		generateBundle(_, bundle) {
			const htmlFile = bundle["index.html"] as Rollup.OutputAsset;
			const jsFiles = bundle["index.js"] as Rollup.OutputChunk;
			htmlFile.source = replaceScript(htmlFile.source as string, "index.js", jsFiles.code);
			delete bundle["index.js"];
		},
	};
};
