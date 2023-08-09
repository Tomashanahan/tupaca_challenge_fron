import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
} from "@chakra-ui/react";
import { TaskStatus } from "../../../interfaces";
import { useCreateTask } from "../hooks";

interface CreateTaskProps {
  isOpen: boolean;
  formTitle: string;
  onClose: () => void;
  onOpen?: () => void;
  defaultStatus: TaskStatus;
  children?: React.ReactNode | React.ReactNode[];
}

export const TaskForm = ({
  isOpen,
  formTitle,
  onClose,
  children,
}: CreateTaskProps) => {
  useCreateTask({ onClose });

  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        borderRadius={"20px"}
        p={[
          "10px",
          "10px",
          "10px",
          "10px",
          "10px",
          "10px",
          "20px",
          "20px",
          "20px",
        ]}
      >
        <ModalHeader
          textTransform={"capitalize"}
          fontSize={"22px"}
          color={"#1b2559"}
          fontWeight={"bold"}
        >
          {formTitle}
        </ModalHeader>
        <ModalCloseButton
          w={"72px"}
          h={"35px"}
          bg={"#f4f7fe"}
          m={"8px"}
          borderRadius={"12px"}
        />
        {children}
      </ModalContent>
    </Modal>
  );
};
