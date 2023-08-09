import {
  Box,
  CloseButton,
  Flex,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

import { NavItem } from "../Components";
import { LinkItems } from "../interfaces";

interface SidebarContentProps {
  onClose: () => void;
  linkItems: LinkItems[];
}

export const SidebarContent = ({
  onClose,
  linkItems,
  ...rest
}: SidebarContentProps) => {
  return (
    <Box
      transition="3s ease"
      className="SidebarContent-scrollbar-hidden"
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      pb={"40px"}
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      overflowY={"scroll"}
      w={{ base: "full", xl: "240px" }}
      pos="fixed"
      h="full"
      display={{ base: "none", xl: "block" }}
      borderRadius={"30px"}
      margin={"10px"}
      boxShadow={"base"}
      {...rest}
    >
      <Flex alignItems="center" justifyContent="center" my={"32px"}>
        <NavLink to="/">
          <Image src={"https://www.tupaca.com/img/logo/logo-tupaca.svg"} />
        </NavLink>

        <CloseButton
          pos={"absolute"}
          display={{ base: "flex", xl: "none" }}
          top={"20px"}
          right={"20px"}
          //   onClick={() => setIsDrawerContentOpen(false)}
          onClick={() => onClose()}
        />
      </Flex>
      {linkItems.map((link: LinkItems) => {
        return (
          <NavItem
            key={link.name}
            isCurrentPage={link.isCurrentPage}
            routeName={link.routeName}
            icon={link.icon}
          >
            {link.name}
          </NavItem>
        );
      })}
    </Box>
  );
};
