import { Employee } from "src/app/core/interfaces/employee.model"

export interface EmployeeState {
  employees: Employee[],
  count: number
};


export const initialState: EmployeeState = {
  employees: [],
  count: 0
};