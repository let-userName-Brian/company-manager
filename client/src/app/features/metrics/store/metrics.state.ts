import { departmentReducer } from "../../departments/store/dept.reducer";
import { DEPT_STATE_NAME } from "../../departments/store/dept.selector";
import { DepartmentState } from "../../departments/store/dept.state";
import { EmployeeReducer } from "../../employees/store/employees.reducer";
import { EMP_STATE_NAME } from "../../employees/store/employees.selector";
import { EmployeeState } from "../../employees/store/employees.state";
import { ManagerReducer } from "../../managers/store/managers.reducer";
import { MANAGER_STATE_NAME } from "../../managers/store/managers.selector";
import { ManagerState } from "../../managers/store/managers.state";

export interface MetricsState {
  [DEPT_STATE_NAME]: DepartmentState;
  [EMP_STATE_NAME]: EmployeeState;
  [MANAGER_STATE_NAME]: ManagerState;
}

export const metricsReducer = {
  [DEPT_STATE_NAME]: departmentReducer,
  [EMP_STATE_NAME]: EmployeeReducer,
  [MANAGER_STATE_NAME]: ManagerReducer,
}