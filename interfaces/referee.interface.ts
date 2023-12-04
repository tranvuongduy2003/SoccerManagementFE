export interface IReferee {
  _id?: string;
  name: string;
  avatar: string;
  age: number;
  dob: Date;
  nation: string;
  wikipedia: string;
}

export const InitReferee = {
  name: '',
  avatar: '',
  age: 0,
  dob: new Date(),
  nation: '',
  wikipedia: ''
} as IReferee;
