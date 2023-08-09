import { useContext } from "react";
import TaskContext from "../Screens/Panel/context/Tasks.context";

export function useLocalStorage() {
  const { setTasks } = useContext(TaskContext);

  const setLocalStorage = (key: string, value: string) => {
    localStorage.setItem(key, value);
  };

  const getLocalStorage = (key: string) => {
    return localStorage.getItem(key);
  };

  const removeLocalStorage = (key: string) => {
    localStorage.removeItem(key);
    setTasks([]);
  };

  return {
    setLocalStorage,
    getLocalStorage,
    removeLocalStorage,
  };
}
