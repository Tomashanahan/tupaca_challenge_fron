import {
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";
import { TaskStatus } from "../../../interfaces";
import { TaskBadgeStatus } from ".";
import { useEffect } from "react";

interface RadioGroupOfTaskStatusProps {
  defaultStatus: TaskStatus;
  handleChange: (nextValue: string) => void;
}

export const RadioGroupOfTaskStatus = ({
  defaultStatus,
  handleChange,
}: RadioGroupOfTaskStatusProps) => {
  useEffect(() => {
    handleChange(defaultStatus);
  }, [defaultStatus]);

  return (
    <FormControl as="fieldset">
      <FormLabel as="legend">Status</FormLabel>

      <RadioGroup
        name="status"
        onChange={handleChange}
        defaultValue={defaultStatus}
      >
        <Stack>
          <Radio value={TaskStatus.TODO}>
            <TaskBadgeStatus status={TaskStatus.TODO} />
          </Radio>
          <Radio colorScheme="purple" value={TaskStatus.IN_PROGRESS}>
            <TaskBadgeStatus status={TaskStatus.IN_PROGRESS} />
          </Radio>
          <Radio colorScheme="green" value={TaskStatus.DONE}>
            <TaskBadgeStatus status={TaskStatus.DONE} />
          </Radio>
        </Stack>
      </RadioGroup>
    </FormControl>
  );
};
