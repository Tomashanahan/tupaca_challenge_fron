import { Flex, Icon } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

interface NavItemProps {
  icon?: React.ReactNode;
  children: React.ReactNode;
  isCurrentPage: boolean;
  routeName: string;
}

export const NavItem = ({
  icon,
  children,
  isCurrentPage,
  routeName,
  ...rest
}: NavItemProps) => {
  return (
    <NavLink to={routeName} style={{ textDecoration: "none" }}>
      <Flex
        color={isCurrentPage ? "#fff" : "#2d3748"}
        fontWeight={isCurrentPage ? 800 : 600}
        fontSize={"16px"}
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        bg={isCurrentPage ? "#9EC5B1" : "transparent"}
        cursor="pointer"
        _hover={{
          bg: "#9EC5B1",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="24"
            color={isCurrentPage ? "#fff" : "#9EC5B1"}
            _groupHover={{
              color: "#fff",
            }}
          >
            {icon}
          </Icon>
        )}
        {children}
      </Flex>
    </NavLink>
  );
};
