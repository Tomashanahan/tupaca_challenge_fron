import { TaskStatus } from "../../../interfaces";

export interface Task {
  autoIncrementId: number;
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  createdAt: string;
  updatedAt: string;
  index?: number;
}
