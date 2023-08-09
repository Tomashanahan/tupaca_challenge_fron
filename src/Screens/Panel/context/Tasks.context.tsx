import { ReactNode, createContext, useState } from "react";
import { useAxios, useToaster } from "../../../hooks";
import { Task } from "..";
import { TaskStatus } from "../../../interfaces";
import { DropResult } from "@hello-pangea/dnd";
import { reorderTasks } from "../helpers";

export interface TaskContextProps {
  getAllUserTasks: (
    searchByName?: string,
    orderByDate?: string,
    orderByTitle?: string
  ) => Promise<void>;
  updateTask: (taskId: string, inputValues: InputValues) => Promise<void>;
  deleteTask: (taskId: string) => Promise<void>;
  createTask: (inputValues: InputValues) => Promise<void>;
  tasks: Task[];
  handleOnDragEnd: (result: DropResult) => void;
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TaskContext = createContext<TaskContextProps>({} as TaskContextProps);

interface TaskProviderProps {
  children: ReactNode;
}

interface InputValues {
  title?: string;
  description?: string;
  status?: TaskStatus;
}

export const TaskProvider = ({ children }: TaskProviderProps) => {
  const { api } = useAxios();
  const { showToaster } = useToaster();
  const [tasks, setTasks] = useState<Task[]>([]);

  const getAllUserTasks = async (
    searchByName?: string,
    orderByDate?: string,
    orderByTitle?: string
  ) => {
    const token = localStorage.getItem("token");
    try {
      const params = {
        title: searchByName,
        orderByDate: orderByDate,
        orderByTitle: orderByTitle,
      };

      if (orderByTitle === "") delete params.orderByTitle;
      if (orderByDate === "") delete params.orderByDate;
      if (searchByName === "") delete params.title;

      if (token) {
        const { data } = await api.get("/task", {
          params,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setTasks(data);
      }
    } catch (error) {
      showToaster("Error", "No se pudieron obtener las tareas", "error");
    }
  };

  const createTask = async (inputValues: InputValues) => {
    try {
      await api.post("/task", inputValues);

      await getAllUserTasks();
      showToaster("Tarea creada", "Tarea creada con éxito", "success");
    } catch (error) {
      showToaster("Error", "No se pudo crear la tarea", "error");
    }
  };

  const updateTask = async (taskId: string, inputValues: InputValues) => {
    try {
      await api.put(`/task/${taskId}`, inputValues);

      showToaster("Tarea actualizada", "Se actualizo la tarea", "success");
    } catch (error) {
      showToaster("Error", "No se actualizar la tarea", "error");
    }
  };

  const deleteTask = async (taskId: string) => {
    try {
      await api.delete(`/task/${taskId}`);

      await getAllUserTasks();
      showToaster("Tarea eliminada", "Se elimino la tarea", "success");
    } catch (error) {
      showToaster("Error", "No se pudo eliminar la tarea", "error");
    }
  };

  const handleOnDragEnd = async (result: DropResult) => {
    const { destination, source, draggableId } = result;

    if (!result.destination) return;
    if (
      source.index === destination?.index &&
      source.droppableId === destination.droppableId
    )
      return;

    if (destination?.droppableId !== source.droppableId) {
      await updateTask(draggableId, {
        status: destination!.droppableId as TaskStatus,
      });
      await getAllUserTasks();
    }

    if (
      source.index !== destination?.index &&
      source.droppableId === destination!.droppableId
    ) {
      const sourceIndex = tasks.findIndex(
        (task) => task.autoIncrementId === source.index
      );
      const destinationIndex = tasks.findIndex(
        (task) => task.autoIncrementId === destination!.index
      );

      setTasks((prevTasks) =>
        reorderTasks(prevTasks, sourceIndex, destinationIndex)
      );
    }
  };

  return (
    <TaskContext.Provider
      value={{
        createTask,
        deleteTask,
        getAllUserTasks,
        tasks,
        updateTask,
        handleOnDragEnd,
        setTasks,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContext;
