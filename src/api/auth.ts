import HTTPTransport from "../service/HTTPTransport";
const baseUrl = "https://ya-praktikum.tech/api/v2";

export const auth = {
  signUp: (options: object): Promise<object> => {
    return HTTPTransport.post(`${baseUrl}/auth/signup`, options);
  },

  signIn: (options: object): Promise<object> => {
    return HTTPTransport.post(`${baseUrl}/auth/signin`, options);
  },

  logOut: (options: object): Promise<object> => {
    return HTTPTransport.post(`${baseUrl}/auth/logout`, options);
  },

  getUser: (options: object): Promise<object> => {
    return HTTPTransport.get(`${baseUrl}/auth/user`, options);
  },
};
