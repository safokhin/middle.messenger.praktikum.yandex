import HTTPTransport from "../service/HTTPTransport";
import { Api } from "../types/apiAndControllers";

export const users: Api = {
  changeProfile: (options) => {
    return HTTPTransport.put(`user/profile`, options);
  },

  changeProfileAvatar: (options) => {
    return HTTPTransport.put(`user/profile/avatar`, options);
  },

  changePassword: (options) => {
    return HTTPTransport.put(`user/password`, options);
  },

  searchUser: (options) => {
    return HTTPTransport.post(`user/search`, options);
  },

  getUser: (options, id) => {
    return HTTPTransport.get(`user/${id}`, options);
  },
};
