import HTTPTransport from "../service/HTTPTransport";
const baseUrl = "https://ya-praktikum.tech/api/v2";

export const signUp = (options: object): Promise<object> => {
  return HTTPTransport.post(`${baseUrl}/auth/signup`, options);
};

export const signIn = (options: object): Promise<object> => {
  return HTTPTransport.post(`${baseUrl}/auth/signin`, options);
};

export const logOut = (options: object): Promise<object> => {
  return HTTPTransport.post(`${baseUrl}/auth/logout`, options);
};

export const getUser = (options: object): Promise<object> => {
  return HTTPTransport.get(`${baseUrl}/auth/user`, options);
};
