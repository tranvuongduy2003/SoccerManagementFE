export interface IStadium {
  _id?: string;
  name: string;
  avatar: string;
  location: string;
  capacity: string;
  coordinate: string;
}

export const InitStadium = {
  name: '',
  avatar: '',
  location: '',
  capacity: '',
  coordinate: ''
} as IStadium;
