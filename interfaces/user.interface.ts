export interface IUser {
  _id?: string;
  username: string;
  email: string;
  phone: string;
  password: string;
  dob: Date;
  isActive: boolean;
  refreshToken?: string;
  role: ERole;
}

export const InitUser = {
  username: '',
  email: '',
  password: '',
  phone: '',
  dob: new Date(),
  isActive: true,
  role: 'VIEWER'
};

export enum ERole {
  ADMIN = 'ADMIN',
  OWNER = 'OWNER',
  VIEWER = 'VIEWER'
}

export interface IRoleType {
  _id?: string;
  name: string;
}

export interface IRole {
  roleId: String;
  userId: string;
}
