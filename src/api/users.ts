import HTTPTransport from "../service/HTTPTransport";
import { Api } from "../types/apiAndControllers";
import { baseUrl } from "../constant";

export const users: Api = {
  changeProfile: (options) => {
    return HTTPTransport.put(`${baseUrl}/user/profile`, options);
  },

  changeProfileAvatar: (options) => {
    return HTTPTransport.put(`${baseUrl}/user/profile/avatar`, options);
  },

  changePassword: (options) => {
    return HTTPTransport.put(`${baseUrl}/user/password`, options);
  },

  searchUser: (options) => {
    return HTTPTransport.post(`${baseUrl}/user/search`, options);
  },

  getUser: (options, id) => {
    return HTTPTransport.get(`${baseUrl}/user/${id}`, options);
  },
};
