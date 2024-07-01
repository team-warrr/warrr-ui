export const listenHello = () => {
	figma.ui.onmessage = (msg) => {
		if (msg.type === "hello") {
			figma.notify(msg.payload);
		}
	};
};
