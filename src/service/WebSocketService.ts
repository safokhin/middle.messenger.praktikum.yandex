import { store } from "../modules/Store";
import { dialogData } from "../pages/chat";
import cloneDeep from "../util/deepClone";
import deepClone from "../util/deepClone";

export class WebSocketService {
  public openSocket(userId: string, chatId: string, token: string) {
    const ws = new WebSocket(
      `wss://ya-praktikum.tech/ws/chats/${userId}/${chatId}/${token}`
    );

    ws.addEventListener("open", () => {
      console.log("Соединение установлено");

      ws.send(
        JSON.stringify({
          content: "0",
          type: "get old",
        })
      );
    });

    ws.addEventListener("message", ({ data }) => {
      const messages = JSON.parse(data);
      if (messages.type !== "user connected") {
        const state = store.getState();
        const chatsStore = deepClone(state.chats);

        if (Array.isArray(messages)) {
          chatsStore.forEach((chat) => {
            if (chat.id === chatId) {
              chat.messages = messages;
            }
            return chat;
          });
        } else {
          chatsStore.forEach((chat) => {
            if (chat.id === chatId) {
              chat.messages = [messages, ...chat.messages];
              chat.last_message = messages;
            }
            return chat;
          });
        }

        store.set("chats", chatsStore);
      }
    });
    ws.addEventListener("error", () => console.log("Ошибка"));
    ws.addEventListener("close", () => console.log("Сокет закрылся"));

    return ws;
  }
}

export const webSocketService = new WebSocketService();
