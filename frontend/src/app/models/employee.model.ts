export interface Employee {
  _id?: string;          // Generado por MongoDB
  firstName: string;    // Nombre del empleado
  lastName: string;     // Apellido del empleado
  email: string;        // Correo electrónico
  position: string;     // Puesto de trabajo
  salary: number;       // Salario
  isActive?: boolean;   // Estado del empleado
  hireDate: Date;        // Fecha de contratación
  createdAt?: string;   // Fecha de creación (ISO string)
  updatedAt?: string;   // 
  __v?: number;        // Versión interna de MongoDB
}