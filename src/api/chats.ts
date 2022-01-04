import HTTPTransport from "../service/HTTPTransport";

const baseUrl = "https://ya-praktikum.tech/api/v2";

export const chats = {
  getAll: (options) => {
    return HTTPTransport.get(`${baseUrl}/chats`, options);
  },

  getNewMessage: (options, id: number) => {
    return HTTPTransport.get(`${baseUrl}/chats/new/${id}`, options);
  },

  getChatsUser: (options, id) => {
    return HTTPTransport.get(`${baseUrl}/chats/${id}/users`, options);
  },

  create: (options) => {
    return HTTPTransport.post(`${baseUrl}/chats`, options);
  },

  setToken: (options, id: number) => {
    return HTTPTransport.post(`${baseUrl}/chats/token/${id}`, options);
  },

  addUser: (options) => {
    return HTTPTransport.put(`${baseUrl}/chats/users`, options);
  },

  removeUser: (options) => {
    return HTTPTransport.delete(`${baseUrl}/chats/users`, options);
  },
};
