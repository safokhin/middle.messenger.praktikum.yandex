import HTTPTransport from "../service/HTTPTransport";
import { Api } from "../types/apiAndControllers";

export const auth: Api = {
  signUp: (options) => {
    return HTTPTransport.post(`auth/signup`, options);
  },

  signIn: (options) => {
    return HTTPTransport.post(`auth/signin`, options);
  },

  logOut: (options) => {
    return HTTPTransport.post(`auth/logout`, options);
  },

  getUser: (options) => {
    return HTTPTransport.get(`auth/user`, options);
  },
};
