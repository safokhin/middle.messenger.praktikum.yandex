import HTTPTransport from "../service/HTTPTransport";
import { Api } from "../types/apiAndControllers";

export const chats: Api = {
  getAll: (options) => {
    return HTTPTransport.get("chats", options);
  },

  getNewMessage: (options, id) => {
    return HTTPTransport.get(`chats/new/${id}`, options);
  },

  getChatsUser: (options, id) => {
    return HTTPTransport.get(`chats/${id}/users`, options);
  },

  create: (options) => {
    return HTTPTransport.post(`chats`, options);
  },

  setToken: (options, id) => {
    return HTTPTransport.post(`chats/token/${id}`, options);
  },

  addUser: (options) => {
    return HTTPTransport.put(`chats/users`, options);
  },

  removeUser: (options) => {
    return HTTPTransport.delete(`$chats/users`, options);
  },
};
