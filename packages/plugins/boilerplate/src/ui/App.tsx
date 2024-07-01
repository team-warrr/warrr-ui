import { listenHi } from "./utils/listeners";
import { sendHello } from "./utils/senders";

const App = () => {
	listenHi();
	sendHello();

	return <div>Hello World</div>;
};

export default App;
