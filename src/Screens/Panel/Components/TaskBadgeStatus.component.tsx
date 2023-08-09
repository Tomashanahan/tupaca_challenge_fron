import { Box } from "@chakra-ui/react";
import { getStatusColors } from "../helpers";
import { TaskStatus } from "../../../interfaces";

interface TaskBadgeStatusProps {
  status: TaskStatus;
}

export const TaskBadgeStatus = ({ status }: TaskBadgeStatusProps) => {
  const { bg, color } = getStatusColors(status);

  return (
    <Box p={"2px"}>
      <Box
        as="span"
        color={color}
        bg={bg}
        p={"2px 13px"}
        borderRadius={"100px"}
        fontSize={"12px"}
        textTransform={"capitalize"}
      >
        {status}
      </Box>
    </Box>
  );
};
