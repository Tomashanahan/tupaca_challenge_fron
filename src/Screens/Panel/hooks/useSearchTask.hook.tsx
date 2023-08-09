import { useContext, useState } from "react";
import { useToaster } from "../../../hooks";
import TaskContext from "../context/Tasks.context";

enum OrderBy {
  ASC = "ASC",
  DESC = "DESC",
}

export const useSearchTask = () => {
  const { getAllUserTasks } = useContext(TaskContext);
  const { showToaster } = useToaster();
  const [inputValue, setInputValue] = useState("");
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [orderByTitle, setOrderByTitle] = useState<OrderBy>();
  const [orderByCreationDate, setOrderByCreationDate] = useState<OrderBy>();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const onSelectChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;

    if (name === "orderByCreationTitle") {
      setOrderByTitle((prev) =>
        prev === OrderBy.ASC ? OrderBy.DESC : OrderBy.ASC
      );
      await getAllUserTasks(inputValue, orderByCreationDate, value as OrderBy);
    } else {
      setOrderByCreationDate((prev) =>
        prev === OrderBy.ASC ? OrderBy.DESC : OrderBy.ASC
      );
      await getAllUserTasks(inputValue, value as OrderBy, orderByTitle);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (inputValue === "" && !isFormSubmitted) return;

    try {
      if (inputValue === "" && isFormSubmitted) {
        await getAllUserTasks();
        setIsFormSubmitted(false);
        return;
      }

      await getAllUserTasks(inputValue, orderByCreationDate, orderByTitle);
      setIsFormSubmitted(true);
    } catch (error) {
      showToaster("Error", "No se pudo crear la tarea", "error");
    }
  };

  return {
    inputValue,
    handleInputChange,
    handleSubmit,
    onSelectChange,
  };
};
