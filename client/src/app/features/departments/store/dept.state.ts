import { Department, DepartmentManager } from "src/app/core/interfaces/department.model";

export interface DepartmentState {
  departments: Department[] | null,
  count: number,
  departmentManager: DepartmentManager | null,
};

export const initialState: DepartmentState = {
  departments: [],
  count: 0,
  departmentManager: null
};


