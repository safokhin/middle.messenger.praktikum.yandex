import { createTmpl } from "./index";
import Sidebar from "../components/chat/sidebar";
import Dialog from "../components/chat/dialog";
import ChatPage from "../components/chat";

// buttonSend Не в компоненте, так как нужно получить изначально, чтобы можно было убивать видимость
const dialogData = new Dialog({
  isEmpty: true,
  messages: [],
});

export const chatPage = new ChatPage({
  sidebarData: new Sidebar({}),
  dialogData,
});

export const createTemplateChat = () => {
  const fragment: DocumentFragment = chatPage.render();
  createTmpl(fragment);
};
