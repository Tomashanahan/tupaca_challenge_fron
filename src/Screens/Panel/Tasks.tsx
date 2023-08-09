import { SimpleGrid, Stack } from "@chakra-ui/react";
import { Header, Panel, SearchBar, TasksColumn } from ".";
import { TaskStatus } from "../../interfaces";
import { useContext, useEffect } from "react";
import TaskContext from "./context/Tasks.context";
import { DragDropContext } from "@hello-pangea/dnd";

function Tasks() {
  const { getAllUserTasks, tasks, handleOnDragEnd } = useContext(TaskContext);

  useEffect(() => {
    getAllUserTasks();
  }, []);

  return (
    <Panel>
      <Stack>
        <Header />

        <SearchBar />

        <DragDropContext onDragEnd={handleOnDragEnd}>
          <SimpleGrid
            columns={[1, 1, 1, 1, 2, 2, 3, 3]}
            spacing={10}
            p={[
              "10px",
              "10px",
              "10px",
              "10px",
              "10px",
              "10px",
              "30px",
              "30px",
              "30px",
            ]}
          >
            <TasksColumn
              columnTitle={TaskStatus.TODO}
              tasks={tasks?.filter((e) => e.status === TaskStatus.TODO)}
            />
            <TasksColumn
              columnTitle={TaskStatus.IN_PROGRESS}
              tasks={tasks?.filter((e) => e.status === TaskStatus.IN_PROGRESS)}
            />
            <TasksColumn
              columnTitle={TaskStatus.DONE}
              tasks={tasks?.filter((e) => e.status === TaskStatus.DONE)}
            />
          </SimpleGrid>
        </DragDropContext>
      </Stack>
    </Panel>
  );
}

export default Tasks;
