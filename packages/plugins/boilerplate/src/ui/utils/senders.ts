export const sendHello = () => {
	window.parent.postMessage({ pluginMessage: { type: "hello", payload: "hello from ui" } }, "*");
};
