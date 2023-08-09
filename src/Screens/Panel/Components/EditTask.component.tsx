import { ModalBody, ModalFooter, Button, Stack } from "@chakra-ui/react";
import { CustomInput } from "../../../Components";
import { RadioGroupOfTaskStatus, TaskForm } from ".";
import { TaskStatus } from "../../../interfaces";
import { useUpdateTask } from "../hooks";
import { Task } from "..";
import { useLayoutEffect } from "react";

interface CreateTaskProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen?: () => void;
  defaultStatus: TaskStatus;
  taskInfo: Task;
}

export const EditTask = ({
  isOpen,
  onClose,
  defaultStatus,
  taskInfo,
}: CreateTaskProps) => {
  const {
    description,
    handleInputChange,
    handleSubmit,
    title,
    handleRadioChange,
    inputsErrors,
    formRef,
    isLoading,
    setInputValues,
    cleanInputs,
  } = useUpdateTask({ onClose, taskId: taskInfo.id });

  useLayoutEffect(() => {
    if (title === "" || description === "") {
      setInputValues({
        status: defaultStatus,
        description: taskInfo.description,
        title: taskInfo.title,
      });
    } else {
      setInputValues({
        status: defaultStatus,
        description: taskInfo.description,
        title: taskInfo.title,
      });
    }
  }, [taskInfo]);

  return (
    <TaskForm
      formTitle={"Editar tarea"}
      isOpen={isOpen}
      onClose={onClose}
      defaultStatus={defaultStatus}
    >
      <form ref={formRef} onSubmit={handleSubmit}>
        <ModalBody>
          <Stack spacing={4}>
            <CustomInput
              label={"Tarea"}
              inputType={"text"}
              name={"title"}
              handleInputChange={handleInputChange}
              inputValue={title}
              error={inputsErrors.title}
              placeHolder={"Limpiar el piso"}
            />
            <CustomInput
              label={"Descripción"}
              inputType={"text"}
              name={"description"}
              handleInputChange={handleInputChange}
              inputValue={description}
              error={inputsErrors.description}
              placeHolder={"El piso esta muy sucio, hay que limpiarlo"}
            />
            <RadioGroupOfTaskStatus
              defaultStatus={defaultStatus}
              handleChange={handleRadioChange}
            />
          </Stack>
        </ModalBody>

        <ModalFooter>
          <Button
            borderRadius={"12px"}
            colorScheme="red"
            mr={3}
            onClick={() => {
              onClose();
              cleanInputs();
            }}
          >
            Cancelar
          </Button>
          <Button
            isLoading={isLoading}
            type="submit"
            borderRadius={"12px"}
            variant="solid"
          >
            Guardar
          </Button>
        </ModalFooter>
      </form>
    </TaskForm>
  );
};
