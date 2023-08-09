import { Flex } from "@chakra-ui/react";
import { getStatusColors } from "../helpers";
import { TaskStatus } from "../../../interfaces";

interface ColumnTaskQuantityBadgeProps {
  quantity: number;
  status: TaskStatus;
}

export const ColumnTaskQuantityBadge = ({
  quantity,
  status,
}: ColumnTaskQuantityBadgeProps) => {
  const { bg, color } = getStatusColors(status);

  return (
    <Flex
      alignItems={"center"}
      justifyContent={"center"}
      bg={bg}
      p={"10px"}
      w={"35px"}
      h={"35px"}
      color={color}
      borderWidth={"1.5px"}
      borderColor={color}
      borderRadius={"full"}
      textAlign={"center"}
      fontWeight={"bold"}
    >
      {quantity}
    </Flex>
  );
};
