import { listenHello } from "./utils/listeners";
import { sendHi } from "./utils/senders";

figma.showUI(__html__);

listenHello();
sendHi();
