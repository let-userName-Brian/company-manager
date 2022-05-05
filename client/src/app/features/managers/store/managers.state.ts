import { Manager } from "src/app/core/interfaces/manager.model";

export interface ManagerState {
  managers: Manager[],
  count: number
}

export const initialState: ManagerState = {
  managers: [],
  count: 0
};