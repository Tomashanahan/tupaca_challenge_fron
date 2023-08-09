import { useContext, useEffect, useRef, useState } from "react";
import { TaskStatus } from "../../../interfaces";
import TaskContext from "../context/Tasks.context";

interface InputValues {
  title: string;
  description: string;
  status: TaskStatus;
}

interface InputErrors {
  title: string;
  description: string;
}

interface UseCreateTaskProps {
  onClose: () => void;
  taskId: string;
}

export const useUpdateTask = ({ onClose, taskId }: UseCreateTaskProps) => {
  const { getAllUserTasks, updateTask } = useContext(TaskContext);
  const formRef = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [inputValues, setInputValues] = useState<InputValues>({
    title: "",
    description: "",
    status: TaskStatus.TODO,
  });
  const [inputsErrors, setInputsErrors] = useState<InputErrors>({
    title: "",
    description: "",
  });

  const cleanInputs = () => {
    setInputValues({
      title: "",
      description: "",
      status: TaskStatus.TODO,
    });
  };

  useEffect(() => {
    const { title, description } = inputValues;

    if (!isFormSubmitted) return;

    const errors: InputErrors = {
      title: title.length === 0 ? "El título es requerido" : "",
      description:
        description.length === 0 ? "La descripción es requerida" : "",
    };

    setInputsErrors(errors);
  }, [inputValues, isFormSubmitted]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleRadioChange = (nextValue: string) => {
    setInputValues({
      ...inputValues,
      status: nextValue as TaskStatus,
    });
  };

  const validateForm = (): boolean => {
    return Object.values(inputsErrors).some((error) => error.length > 0);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsFormSubmitted(true);

    const hasErrors = validateForm();
    if (hasErrors) return;

    setIsLoading(true);
    await updateTask(taskId, inputValues);

    cleanInputs();
    setIsFormSubmitted(false);
    await getAllUserTasks();
    onClose();
    setIsLoading(false);
  };

  return {
    ...inputValues,
    inputsErrors,
    handleInputChange,
    handleSubmit,
    handleRadioChange,
    isLoading,
    formRef,
    cleanInputs,
    setInputValues,
  };
};
