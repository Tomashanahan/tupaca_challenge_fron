import {
  Stack,
  Avatar,
  Flex,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Divider,
} from "@chakra-ui/react";
import { TaskBadgeStatus } from ".";
import DotsIcon from "../../../assets/svgs/dots.svg";
import ClockIcon from "../../../assets/svgs/clock.svg";
import { ReactSVG } from "react-svg";
import { Task } from "..";
import { useContext } from "react";
import TaskContext from "../context/Tasks.context";
import { parceDate } from "../helpers";
import { Draggable } from "@hello-pangea/dnd";

interface TaskCardProps {
  task: Task;
  onEditTaskOpen: () => void;
  setTaskInfoToEdit: React.Dispatch<React.SetStateAction<Task>>;
  index: number;
}

export const TaskCard = ({
  task,
  task: { title, description, status },
  onEditTaskOpen,
  setTaskInfoToEdit,
}: TaskCardProps) => {
  const { deleteTask } = useContext(TaskContext);

  return (
    <Draggable
      key={task?.autoIncrementId}
      draggableId={`${task?.id}`}
      index={task?.autoIncrementId}
    >
      {(draggableProvided) => (
        <Stack
          {...draggableProvided.draggableProps}
          {...draggableProvided.dragHandleProps}
          ref={draggableProvided.innerRef}
          border={"1px solid #E2E8F0"}
          mt={"20px"}
          p={"10px"}
          borderRadius={"20px"}
          gap={"10px"}
        >
          <Flex justifyContent={"space-between"} alignItems={"center"}>
            <TaskBadgeStatus status={status} />
            <Menu>
              <MenuButton
                px={4}
                py={2}
                transition="all 0.2s"
                _hover={{ bg: "transparent" }}
                _expanded={{ bg: "transparent" }}
              >
                <ReactSVG src={DotsIcon} />
              </MenuButton>
              <MenuList>
                <MenuItem
                  onClick={() => {
                    onEditTaskOpen();
                    setTaskInfoToEdit({ ...task });
                  }}
                >
                  Editar
                </MenuItem>
                <MenuDivider />
                <MenuItem
                  onClick={async () => {
                    await deleteTask(task.id);
                  }}
                >
                  Eliminar
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
          <Text textTransform={"capitalize"} fontWeight={"bold"}>
            {title}
          </Text>
          <Divider />
          <Text
            fontSize={"12px"}
            color={"#2e2e2f"}
            as="span"
            textTransform={"capitalize"}
          >
            {description}
          </Text>
          <Flex
            alignItems={"center"}
            justify={"space-between"}
            className="task__stats"
          >
            <Flex alignItems={"center"} justify={"space-between"} gap={"10px"}>
              <Text color={"#A0AEC0"} as="span" textTransform={"capitalize"}>
                <ReactSVG src={ClockIcon} />
              </Text>
              <Text color={"#A0AEC0"}>
                <time dateTime="2021-11-24T20:00:00">
                  {parceDate(task.updatedAt)}
                </time>
              </Text>
            </Flex>
            <Avatar
              size={"sm"}
              src={"https://i.postimg.cc/mDzf38LR/illustration-1.jpg"}
            />
          </Flex>
        </Stack>
      )}
    </Draggable>
  );
};
