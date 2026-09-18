export interface Message {
  text: string;
  author: string;
  id: string;
}

export interface User {
  name: string;
}

export interface Room {
  name: string;
  members: User[];
  admin: User;
  messages: Message[];
  id: string;
}
