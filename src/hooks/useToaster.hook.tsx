import { useToast } from "@chakra-ui/react";

function useToaster() {
  const toast = useToast();

  const showToaster = (
    title: string,
    description: string,
    status: "success" | "error" | "warning" | "info",
    duration?: number
  ) => {
    toast({
      title,
      description,
      status,
      duration: duration || 4000,
      isClosable: true,
      variant: "left-accent",
      position: "top",
    });
  };

  const deleteAllToasts = () => toast.closeAll({ positions: ["top"] });

  return { showToaster, deleteAllToasts };
}
export default useToaster;
