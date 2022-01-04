import { chats } from "../api/chats";
import { store } from "../modules/Store";
import { webSocketService } from "../service/WebSocketService";
import { users } from "../api/users";

export class ChatController {
  // Если нет чатов, то ошибка
  public getAll() {
    const { user } = store.getState();
    const headers = {
      "Content-type": "application/json; charset=utf-8",
    };
    chats.getAll({ data: {}, headers }).then((data) => {
      const chats = JSON.parse(data.response);
      const allPromise = chats.map((chat) => {
        return new Promise((resolve, reject) => {
          this.setToken(chat)
            .then(() => resolve(chat))
            .catch(() => reject());
        });
      });
      Promise.all(allPromise).then((data) => {
        const chatsData = data;
        const sockets = {};

        // Открываем сокеты
        if (user) {
          chatsData.forEach((chat) => {
            sockets[chat.id] = webSocketService.openSocket(
              user.id,
              chat.id,
              chat.token
            );
          });
        }

        store.set("chats", chatsData);
        store.set("sockets", sockets);
      });
    });
  }

  public getNewMessage(id: number) {
    return chats
      .getNewMessage({ body: {}, headers: {} }, id)
      .then((data) => JSON.parse(data.response).unread_count);
  }

  public create(title: string) {
    const headers = { "Content-type": "application/json; charset=utf-8" };
    chats.create({ data: { title }, headers }).then(() => this.getAll());
  }

  private async setToken(chat: any[]) {
    const headers = { "Content-type": "application/json; charset=utf-8" };

    chat.users = await this.getChatsUser(chat.id);

    return chats
      .setToken({ body: {}, headers }, chat.id)
      .then((data) => {
        const token = JSON.parse(data.response).token;
        chat.token = token;
        return chat;
      })
      .catch((err) => console.log(err));
  }

  public addUser(login: string) {
    const headers = { "Content-type": "application/json; charset=utf-8" };

    users.searchUser({ data: { login: login }, headers }).then((userList) => {
      const userListId = JSON.parse(userList.response).map((user) => user.id);
      const chatId = store.getState().currentChatId;
      chats.addUser({ data: { users: userListId, chatId }, headers });
    });
  }

  public removeUser(login: string) {
    const headers = { "Content-type": "application/json; charset=utf-8" };

    users.searchUser({ data: { login: login }, headers }).then((userList) => {
      const userListId = JSON.parse(userList.response).map((user) => user.id);
      const chatId = store.getState().currentChatId;
      chats.removeUser({ data: { users: userListId, chatId }, headers });
    });
  }

  private async getChatsUser(id) {
    return await chats
      .getChatsUser({ body: {}, headers: {} }, id)
      .then((data) => JSON.parse(data.response));
  }

  public changeCurrentChat(id: number) {
    store.set("currentChatId", id);
  }
}

export const chatController = new ChatController();
