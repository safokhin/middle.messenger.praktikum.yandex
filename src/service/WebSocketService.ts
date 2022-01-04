import { store } from "../modules/Store";
import deepClone from "../util/deepClone";
import { ChatI, MessagesI } from "../types/apiAndControllers";

export class WebSocketService {
  public openSocket(userId: number, chatId: number, token: string) {
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
      const messages: MessagesI = JSON.parse(data);
      if (messages.type !== "user connected") {
        const state = store.getState();
        const chatsStore: ChatI[] = deepClone(state.chats);

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
