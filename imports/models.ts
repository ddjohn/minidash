export enum MessageType {
  TEXT = <any>'text'
}

export interface Measure {
  epoch?: Date; 
  icon: string;
  name: string;
  value: string;
  status: string;
  details: string;
}

export interface Message {
  _id?: string;
  chatId?: string;
  content?: string;
  createdAt?: Date;
  ownership?: string;
  type?: MessageType;
}
