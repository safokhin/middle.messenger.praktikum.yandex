import HTTPTransport from "../service/HTTPTransport";
import { Api } from "../types/apiAndControllers";
import { baseUrl } from "../constant";

export const chats: Api = {
  getAll: (options) => {
    return HTTPTransport.get(`${baseUrl}/chats`, options);
  },

  getNewMessage: (options, id) => {
    return HTTPTransport.get(`${baseUrl}/chats/new/${id}`, options);
  },

  getChatsUser: (options, id) => {
    return HTTPTransport.get(`${baseUrl}/chats/${id}/users`, options);
  },

  create: (options) => {
    return HTTPTransport.post(`${baseUrl}/chats`, options);
  },

  setToken: (options, id) => {
    return HTTPTransport.post(`${baseUrl}/chats/token/${id}`, options);
  },

  addUser: (options) => {
    return HTTPTransport.put(`${baseUrl}/chats/users`, options);
  },

  removeUser: (options) => {
    return HTTPTransport.delete(`${baseUrl}/chats/users`, options);
  },
};
