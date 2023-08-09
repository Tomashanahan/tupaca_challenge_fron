import { TaskStatus } from "../../../interfaces";

export const getStatusColors = (status: TaskStatus) => {
  const statusColors = {
    [TaskStatus.TODO]: {
      color: "#2e87ba",
      bg: "#ceecfd",
    },
    [TaskStatus.IN_PROGRESS]: {
      color: "#a734ba",
      bg: "#f2dcf5",
    },
    [TaskStatus.DONE]: {
      color: "#13854e",
      bg: "#d6ede2",
    },
  };

  return statusColors[status];
};
