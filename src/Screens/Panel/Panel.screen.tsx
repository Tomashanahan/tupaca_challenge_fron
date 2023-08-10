import {
  Drawer,
  DrawerContent,
  Flex,
  Grid,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { useLocation } from "react-router";

import { SidebarContent } from "./Components";

import { ROUTES } from "../../routes";
import { LinkItems } from "./interfaces";
import { ReactSVG } from "react-svg";
import TasksSvg from "../../assets/svgs/tasks.svg";

interface PanelProps {
  children: React.ReactNode;
}

export default function Panel({ children }: PanelProps) {
  const { pathname } = useLocation();
  const { isOpen: isDrawerContentOpen } = useDisclosure();

  const linkItems: LinkItems[] = [
    {
      name: "Dashboard",
      icon: <ReactSVG src={TasksSvg} />,
      routeName: ROUTES.USER.PANEL,
      isCurrentPage: pathname === ROUTES.USER.PANEL,
    },
  ];

  const { onClose } = useDisclosure();

  return (
    <>
      <Flex
        justifyContent={"space-between"}
        // w={"100%"}
        w={"100vw"}
        minH="100vh"
        pos={"relative"}
        bg={useColorModeValue("gray.100", "gray.900")}
      >
        <SidebarContent linkItems={linkItems} onClose={() => onClose} />
        <Drawer
          autoFocus={false}
          isOpen={isDrawerContentOpen}
          placement="left"
          onClose={onClose}
          returnFocusOnClose={false}
          onOverlayClick={onClose}
          size="full"
        >
          <DrawerContent>
            <SidebarContent linkItems={linkItems} onClose={onClose} />
          </DrawerContent>
        </Drawer>
        <Grid
          p={0}
          pb={"40px"}
          ml={{ base: 0, xl: "250px" }}
          templateColumns="1fr auto"
          w="100%"
        >
          {children}
        </Grid>
      </Flex>
    </>
  );
}
