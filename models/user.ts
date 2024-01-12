export type User = {
  _id: number | string;
  email: string;
  password: string;
  username: string;
  phone?: string;
  orderCount?: number;
  totalPayment?: number | string;
  dob?: string | Date;
  isActive: boolean;
  role: string;
  avatar?: string;
  createdAt: string | Date;
  updatedAt: string | Date;
  deletedAt?: any | Date;
  OrderModels: any[];
};
