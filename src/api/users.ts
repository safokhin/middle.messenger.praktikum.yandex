import HTTPTransport from "../service/HTTPTransport";
const baseUrl = "https://ya-praktikum.tech/api/v2";

export const users = {
  changeProfile: (options: object): Promise<object> => {
    return HTTPTransport.put(`${baseUrl}/user/profile`, options);
  },

  changeProfileAvatar: (options: object): Promise<object> => {
    return HTTPTransport.put(`${baseUrl}/user/profile/avatar`, options);
  },

  changePassword: (options: object): Promise<object> => {
    return HTTPTransport.put(`${baseUrl}/user/password`, options);
  },

  searchUser: (options: object): Promise<object> => {
    return HTTPTransport.post(`${baseUrl}/user/search`, options);
  },

  getUser: (options: object, id: number): Promise<object> => {
    return HTTPTransport.get(`${baseUrl}/user/${id}`, options);
  },
};
