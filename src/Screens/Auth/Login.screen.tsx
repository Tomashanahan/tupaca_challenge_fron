import ViewIcon from "../../assets/svgs/ViewIcon.svg";
import ViewOffIcon from "../../assets/svgs/ViewOffIcon.svg";

import {
  Flex,
  Box,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Image,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../routes";
import { CustomInput } from "../../Components";
import { useState } from "react";
import { ReactSVG } from "react-svg";
import { useLogin } from "./hooks";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const {
    handleInputChange,
    handleSubmit,
    inputErrors,
    inputValues,
    isLoading,
  } = useLogin();

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
      pos={"relative"}
    >
      <Image
        pos={"absolute"}
        objectFit={"cover"}
        w={"100vw"}
        h={"100vh"}
        zIndex={1}
        src={
          "https://www.tupaca.com/static/fondo-bfbb67864f5d87e6279f64bee73b18cb.png"
        }
      />
      <Stack
        pos={"relative"}
        zIndex={2}
        spacing={8}
        mx={"auto"}
        w={"container.sm"}
      >
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Bienvenid@ de vuelta</Heading>
          <Text fontSize={"lg"} color={"gray.600"} m={0}>
            Espero disfrutes de la experiencia ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"base"}
          p={8}
        >
          <form onSubmit={handleSubmit}>
            <Stack spacing={4}>
              <CustomInput
                label={"Email"}
                inputType={"email"}
                name={"email"}
                handleInputChange={handleInputChange}
                inputValue={inputValues.email}
                error={inputErrors.email}
                placeHolder={"tshmg@hotmail.com"}
                isRequired
              />
              <InputGroup pos={"relative"}>
                <CustomInput
                  label={"Contraseña"}
                  inputType={showPassword ? "text" : "password"}
                  name={"password"}
                  handleInputChange={handleInputChange}
                  inputValue={inputValues.password}
                  error={inputErrors.password}
                  placeHolder={""}
                  isRequired
                />
                <InputRightElement pos={"absolute"} top={"32px"}>
                  <Button
                    variant={"ghost"}
                    _hover={{ bg: "transparent" }}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? (
                      <ReactSVG src={ViewIcon} />
                    ) : (
                      <ReactSVG src={ViewOffIcon} />
                    )}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <Stack spacing={10}>
                <NavLink to={ROUTES.AUTH.REGISTER}>
                  <Text textAlign={"right"} color={"#06AC83"}>
                    No tenes cuenta?
                  </Text>
                </NavLink>
                <Button
                  bg={"#06AC83"}
                  color={"white"}
                  type="submit"
                  isLoading={isLoading}
                  _hover={{
                    bg: "#06AC83",
                  }}
                >
                  Ingresar
                </Button>
              </Stack>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
}
