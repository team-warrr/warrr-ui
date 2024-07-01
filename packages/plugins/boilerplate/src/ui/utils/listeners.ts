export const listenHi = () => {
	window.onmessage = (event) => {
		const { type, payload } = event.data.pluginMessage;
		if (type === "hi") {
			alert(payload);
		}
	};
};
