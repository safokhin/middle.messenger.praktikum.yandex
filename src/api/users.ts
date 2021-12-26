import HTTPTransport from "../service/HTTPTransport";
const baseUrl = "https://ya-praktikum.tech/api/v2";

export const changeProfile = (options: object): Promise<object> => {
  return HTTPTransport.put(`${baseUrl}/user/profile`, options);
};

export const changeProfileAvatar = (options: object): Promise<object> => {
  return HTTPTransport.put(`${baseUrl}/user/profile/avatar`, options);
};

export const changePassword = (options: object): Promise<object> => {
  return HTTPTransport.put(`${baseUrl}/user/password`, options);
};
