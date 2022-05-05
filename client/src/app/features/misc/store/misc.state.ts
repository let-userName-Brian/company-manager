export interface MiscState {
  totalSalaryCount: number,
  averageSalary: number,
  minSalary: number,
  maxSalary: number
};

export const initialState: MiscState = {
  totalSalaryCount: 0,
  averageSalary: 0,
  minSalary: 0,
  maxSalary: 0
};