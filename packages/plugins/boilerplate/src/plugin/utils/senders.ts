export const sendHi = () => {
	figma.ui.postMessage({
		type: "hi",
		payload: "hi from plugin",
	});
};
