export enum MessageType {
  TEXT = <any>'text'
}

export interface Measure {
  epoch?: Date; 
  icon: string;
  name: string;
  value: number;
  status: string;
}

export interface Message {
  _id?: string;
  chatId?: string;
  content?: string;
  createdAt?: Date;
  ownership?: string;
  type?: MessageType;
}
