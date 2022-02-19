export type Api = {
  [key: string]: (
    options: {
      data: unknown;
      headers: object;
    },
    id?: number
  ) => Promise<object>;
};

export interface UserI {
  id: number;
  first_name: string;
  second_name: string;
  avatar: string;
  email: string;
  login: string;
  phone: string;
}

export interface MessagesI {
  id: string;
  time: string;
  user_id: string | number;
  content: string;
  type: string;
  user?: UserI;
  file: {
    id: number;
    user_id: number;
    path: string;
    filename: string;
    content_type: string;
    content_size: number;
    upload_date: string;
  };
}

export interface ChatI {
  id: number;
  title: string;
  avatar: string;
  unread_count: number;
  last_message: MessagesI;
  users?: UserI[];
  token: string;
  messages?: MessagesI;
}
