import { departmentReducer } from "../../departments/store/dept.reducer";
import { DEPT_STATE_NAME } from "../../departments/store/dept.selector";
import { DepartmentState } from "../../departments/store/dept.state";
import { EmployeeReducer } from "../../employees/store/employees.reducer";
import { EMP_STATE_NAME } from "../../employees/store/employees.selector";
import { EmployeeState } from "../../employees/store/employees.state";

export interface MetricsState {
  [DEPT_STATE_NAME]: DepartmentState;
  [EMP_STATE_NAME]: EmployeeState;
}

export const metricsReducer = {
  [DEPT_STATE_NAME]: departmentReducer,
  [EMP_STATE_NAME]: EmployeeReducer,
}