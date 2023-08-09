import {
  Flex,
  Box,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  Image,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { ROUTES } from "../../routes";
import { CustomInput } from "../../Components";
import ViewIcon from "../../assets/svgs/ViewIcon.svg";
import ViewOffIcon from "../../assets/svgs/ViewOffIcon.svg";
import { ReactSVG } from "react-svg";
import { useRegister } from "./hooks";

export default function Register() {
  const navigator = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const {
    handleInputChange,
    handleSubmit,
    inputErrors,
    inputValues,
    isLoading,
  } = useRegister();

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
        py={12}
        px={6}
      >
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Regístrate
          </Heading>
          <Text textAlign={"center"} fontSize={"lg"} color={"gray.600"}>
            Para poder vivir una experiencia unica ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <form onSubmit={handleSubmit}>
            <Stack spacing={4}>
              <HStack>
                <Box w={"50%"}>
                  <CustomInput
                    label={"Nombre"}
                    inputType={undefined}
                    name={"firstName"}
                    handleInputChange={handleInputChange}
                    inputValue={inputValues.firstName}
                    error={inputErrors.firstName}
                    placeHolder={"Tomas"}
                    isRequired
                  />
                </Box>
                <Box w={"50%"}>
                  <CustomInput
                    label={"Apellido"}
                    inputType={undefined}
                    name={"lastName"}
                    handleInputChange={handleInputChange}
                    inputValue={inputValues.lastName}
                    error={inputErrors.lastName}
                    placeHolder={"Shanahan"}
                  />
                </Box>
              </HStack>
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
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  isLoading={isLoading}
                  type="submit"
                  size="lg"
                  bg={"#06AC83"}
                  color={"white"}
                  _hover={{
                    bg: "#06AC83",
                  }}
                >
                  Regístrate
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={"center"}>
                  Ya tenes cuenta?{" "}
                  <Link
                    onClick={() => {
                      navigator(ROUTES.AUTH.LOGIN);
                    }}
                    color={"#06AC83"}
                  >
                    Ingresa
                  </Link>
                </Text>
              </Stack>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
}
