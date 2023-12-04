export interface ICoach {
  _id?: string;
  name: string;
  avatar: string;
  age: number;
  dob: Date;
  national: string;
}

export const InitCoach = {
  name: '',
  avatar: '',
  age: 0,
  dob: new Date(),
  national: ''
} as ICoach;
