import {
  Avatar,
  Box,
  Flex,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorModeValue,
} from "@chakra-ui/react";
import { FiChevronDown, FiMenu } from "react-icons/fi";
import { useLocalStorage } from "../../../hooks";
import { useNavigate } from "react-router";
import { ROUTES } from "../../../routes";

export const Header = ({ ...rest }) => {
  const { removeLocalStorage } = useLocalStorage();
  const navigator = useNavigate();

  return (
    <Flex
      display={"flex"}
      px={{ base: 4, md: 4 }}
      height="80px"
      borderRadius={"30px"}
      zIndex={10}
      alignItems="center"
      bg={"white"}
      borderBottomColor={"gray.200"}
      borderBottomWidth="1px"
      justifyContent={{ base: "space-between", xl: "flex-end" }}
      margin={"10px"}
      boxShadow={"base"}
      {...rest}
    >
      <IconButton
        display={{ base: "flex", xl: "none" }}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />
      <HStack spacing={{ base: "0", md: "6" }}>
        <Flex alignItems={"center"}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: "none" }}
            >
              <HStack>
                <Avatar
                  size={"md"}
                  src={"https://i.postimg.cc/mDzf38LR/illustration-1.jpg"}
                />
                <Box display={{ base: "none", md: "flex" }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue("white", "gray.900")}
              borderColor={useColorModeValue("gray.200", "gray.700")}
            >
              <MenuItem
                onClick={() => {
                  removeLocalStorage("token");
                  navigator(ROUTES.AUTH.LOGIN);
                }}
              >
                Cerrar Sesión
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};
