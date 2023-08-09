import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Select,
} from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";
import { useSearchTask } from "../hooks";

export function SearchBar() {
  const { handleInputChange, handleSubmit, inputValue, onSelectChange } =
    useSearchTask();

  return (
    <form onSubmit={handleSubmit}>
      <Flex alignItems={"center"} w={"100%"}>
        <FormControl
          pl={[
            "10px",
            "10px",
            "10px",
            "10px",
            "10px",
            "10px",
            "30px",
            "30px",
            "30px",
          ]}
          w={[
            "100%",
            "100%",
            "100%",
            "100%",
            "100%",
            "500px",
            "500px",
            "500px",
            "500px",
          ]}
        >
          <FormLabel pl={"15px"} fontWeight={900} fontSize={"14px"}>
            Buscar tarea
          </FormLabel>
          <InputGroup w={"100%"}>
            <Input
              p={"25px"}
              borderRadius={"20px"}
              onChange={handleInputChange}
              placeholder="Buscar tarea"
              value={inputValue}
              bg={"#ffff"}
              w={"100%"}
            />
            <InputRightElement
              pr={"10px"}
              h={"100%"}
              as={"button"}
              type="submit"
              cursor={"pointer"}
            >
              <FiSearch color="gray.300" />
            </InputRightElement>
          </InputGroup>
        </FormControl>
        {/*  */}
        <FormControl
          px={[
            "10px",
            "10px",
            "10px",
            "10px",
            "10px",
            "10px",
            "30px",
            "30px",
            "30px",
          ]}
          w={[
            "100%",
            "100%",
            "100%",
            "100%",
            "100%",
            "250px",
            "250px",
            "250px",
            "250px",
          ]}
        >
          <FormLabel pl={"15px"} fontWeight={900} fontSize={"14px"}>
            Ordenar por nombre
          </FormLabel>
          <Select
            h={"52px"}
            borderRadius={"20px"}
            bg={"#fff"}
            placeholder="Orden"
            name="orderByCreationTitle"
            onChange={onSelectChange}
          >
            <option value="DESC">DESC</option>
            <option value="ASC">ASC</option>
          </Select>
        </FormControl>
        <FormControl
          px={[
            "10px",
            "10px",
            "10px",
            "10px",
            "10px",
            "10px",
            "30px",
            "30px",
            "30px",
          ]}
          w={[
            "100%",
            "100%",
            "100%",
            "100%",
            "100%",
            "250px",
            "250px",
            "250px",
            "250px",
          ]}
        >
          <FormLabel pl={"15px"} fontWeight={900} fontSize={"14px"}>
            Ordenar por fecha
          </FormLabel>
          <Select
            h={"52px"}
            borderRadius={"20px"}
            bg={"#fff"}
            placeholder="Orden"
            name="orderByCreationDate"
            onChange={onSelectChange}
          >
            <option value="DESC">DESC</option>
            <option value="ASC">ASC</option>
          </Select>
        </FormControl>
      </Flex>
    </form>
  );
}
