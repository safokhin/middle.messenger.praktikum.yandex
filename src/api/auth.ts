import HTTPTransport from "../service/HTTPTransport";
import { Api } from "../types/apiAndControllers";
import { baseUrl } from "../constant";

export const auth: Api = {
  signUp: (options) => {
    return HTTPTransport.post(`${baseUrl}/auth/signup`, options);
  },

  signIn: (options) => {
    return HTTPTransport.post(`${baseUrl}/auth/signin`, options);
  },

  logOut: (options) => {
    return HTTPTransport.post(`${baseUrl}/auth/logout`, options);
  },

  getUser: (options) => {
    return HTTPTransport.get(`${baseUrl}/auth/user`, options);
  },
};
