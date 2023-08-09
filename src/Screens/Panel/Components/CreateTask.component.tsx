import { ModalBody, ModalFooter, Button, Stack } from "@chakra-ui/react";
import { CustomInput } from "../../../Components";
import { RadioGroupOfTaskStatus, TaskForm } from ".";
import { TaskStatus } from "../../../interfaces";
import { useCreateTask } from "../hooks";

interface CreateTaskProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen?: () => void;
  defaultStatus: TaskStatus;
}

export const CreateTask = ({
  isOpen,
  onClose,
  defaultStatus,
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
  } = useCreateTask({ onClose });

  return (
    <TaskForm
      isOpen={isOpen}
      formTitle={"Crear tarea"}
      onClose={onClose}
      defaultStatus={defaultStatus}
    >
      <form ref={formRef} onSubmit={handleSubmit}>
        <ModalBody>
          <Stack spacing={4}>
            <CustomInput
              label={"Tarea"}
              autoFocus
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
            onClick={onClose}
          >
            Cancelar
          </Button>
          <Button
            isLoading={isLoading}
            type="submit"
            borderRadius={"12px"}
            variant="solid"
          >
            Agregar
          </Button>
        </ModalFooter>
      </form>
    </TaskForm>
  );
};
