import { chats } from "../api/chats";
import { store } from "../modules/Store";
import { webSocketService } from "../service/WebSocketService";
import { users } from "../api/users";
import { ChatI, UserI } from "../types/apiAndControllers";

export class ChatController {
  // Если нет чатов, то ошибка
  public getAll(): void {
    const state = store.getState();
    let user = state.user;

    const headers = {
      "Content-type": "application/json; charset=utf-8",
    };

    chats.getAll({ data: {}, headers }).then((data: { response: string }) => {
      const chats: ChatI[] = JSON.parse(data.response);

      const allPromise = chats.map((chat) => {
        return new Promise((resolve, reject) => {
          this.setToken(chat)
            .then(() => resolve(chat))
            .catch(() => reject());
        });
      });
      Promise.all(allPromise).then((data) => {
        const chatsData = data;
        const sockets: { [key: string]: unknown } = {};

        // Открываем сокеты
        if (user) {
          chatsData.forEach((chat: ChatI) => {
            sockets[chat.id] = webSocketService.openSocket(
              user!.id,
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
      .getNewMessage({ data: {}, headers: {} }, id)
      .then(
        (data: { response: string }) => JSON.parse(data.response).unread_count
      );
  }

  public create(title: string) {
    const headers = { "Content-type": "application/json; charset=utf-8" };
    chats.create({ data: { title }, headers }).then(() => this.getAll());
  }

  private async setToken(chat: ChatI) {
    const headers = { "Content-type": "application/json; charset=utf-8" };

    chat.users = await this.getChatsUser(chat.id);

    return chats
      .setToken({ data: {}, headers }, chat.id)
      .then((data: { response: string }) => {
        chat.token = JSON.parse(data.response).token;
        return chat;
      })
      .catch((err) => console.log(err));
  }

  public addUser(login: string) {
    const headers = { "Content-type": "application/json; charset=utf-8" };

    users
      .searchUser({ data: { login: login }, headers })
      .then((userList: { response: string }) => {
        const usersResponse: UserI[] = JSON.parse(userList.response);
        const userListId = usersResponse.map((user) => user.id);
        const chatId = store.getState().currentChatId;

        chats
          .addUser({ data: { users: userListId, chatId }, headers })
          .then(() => console.log("Пользователь добавлен"));
      });
  }

  public removeUser(login: string) {
    const headers = { "Content-type": "application/json; charset=utf-8" };

    users
      .searchUser({ data: { login: login }, headers })
      .then((userList: { response: string }) => {
        const usersResponse: UserI[] = JSON.parse(userList.response);
        const userListId = usersResponse.map((user) => user.id);
        const chatId = store.getState().currentChatId;

        chats
          .removeUser({ data: { users: userListId, chatId }, headers })
          .then(() => {
            console.log("Пользователь удален");
          });
      });
  }

  private async getChatsUser(id: number) {
    return await chats
      .getChatsUser({ data: {}, headers: {} }, id)
      .then((data: { response: string }) => JSON.parse(data.response));
  }

  public changeCurrentChat(id: number) {
    store.set("currentChatId", id);
  }
}

export const chatController = new ChatController();
