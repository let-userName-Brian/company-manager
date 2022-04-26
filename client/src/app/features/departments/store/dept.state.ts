import { Department } from "src/app/core/interfaces/department.model";

export interface DepartmentState {
  departments: Department[];
  count: number;
}

export const initialState: DepartmentState = {
  departments: [],
  count: 0,
};


