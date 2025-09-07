export interface Employee {
  _id?: string;
  firstName: string;
  lastName: string;
  email: string;
  position: string;
  salary: number;
  hireDate?: string;
  isActive?: boolean;
  createdAt?: string;
  updatedAt?: string;
}