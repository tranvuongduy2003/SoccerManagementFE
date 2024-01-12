export interface IUser {
  _id: string;
  email: string;
  password: string;
  username: string;
  phone?: string;
  dob?: Date;
  isActive: boolean;
  role: string;
  avatar?: string;
  refreshToken?: string;
  createdAt: Date;
  updatedAt: Date;
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
