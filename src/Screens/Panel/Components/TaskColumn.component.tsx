import { Box, Flex, Button, Text, useDisclosure, Icon } from "@chakra-ui/react";
import { ColumnTaskQuantityBadge, CreateTask, EditTask, TaskCard } from ".";
import { TaskStatus } from "../../../interfaces";
import { Task } from "..";
import { useState } from "react";
import { AddIcon } from "@chakra-ui/icons";
import { Droppable } from "@hello-pangea/dnd";

interface TasksColumnProps {
  columnTitle: TaskStatus;
  tasks: Task[];
}

export function TasksColumn({ columnTitle, tasks, ...rest }: TasksColumnProps) {
  const [taskInfoToEdit, setTaskInfoToEdit] = useState({} as Task);
  const {
    isOpen: isCreateTaskOpen,
    onOpen: onCreateTaskOpen,
    onClose: onCreateTaskClose,
  } = useDisclosure();
  const {
    isOpen: isEditTaskOpen,
    onOpen: onEditTaskOpen,
    onClose: onEditTaskClose,
  } = useDisclosure();

  return (
    <Droppable droppableId={columnTitle}>
      {(droppableProvided) => {
        return (
          <Box
            ref={droppableProvided.innerRef}
            {...droppableProvided.droppableProps}
            bg="#FFF"
            borderRadius={"20px"}
            p={"20px"}
            minH={"280px"}
            h={"-webkit-fit-content"}
            display={"inline-block"}
            {...rest}
          >
            <EditTask
              isOpen={isEditTaskOpen}
              onClose={onEditTaskClose}
              defaultStatus={columnTitle}
              taskInfo={taskInfoToEdit}
            />
            <CreateTask
              isOpen={isCreateTaskOpen}
              onClose={onCreateTaskClose}
              defaultStatus={columnTitle}
            />
            <Flex justifyContent={"space-between"} alignItems={"center"}>
              <Flex gap={"10px"} alignItems={"center"}>
                <Text
                  textTransform={"capitalize"}
                  fontSize={"22px"}
                  color={"#1b2559"}
                  fontWeight={"bold"}
                >
                  {columnTitle}
                </Text>
                <ColumnTaskQuantityBadge
                  quantity={
                    tasks?.filter((task) => task?.status === columnTitle)
                      ?.length
                  }
                  status={columnTitle}
                />
              </Flex>
              <Button
                onClick={onCreateTaskOpen}
                w={"92px"}
                h={"35px"}
                bg={"#f4f7fe"}
                borderRadius={"12px"}
              >
                <Icon boxSize={"10px"} as={AddIcon} />
              </Button>
            </Flex>

            {/* CARDS */}
            <Box mt={"10px"}>
              {tasks?.map((task) => {
                return (
                  <TaskCard
                    key={task?.id}
                    task={task}
                    onEditTaskOpen={onEditTaskOpen}
                    setTaskInfoToEdit={setTaskInfoToEdit}
                    index={task?.index!}
                  />
                );
              })}
            </Box>

            {droppableProvided.placeholder}
          </Box>
        );
      }}
    </Droppable>
  );
}
