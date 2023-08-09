import {
  Box,
  FormControl,
  FormLabel,
  Input,
  InputProps,
  ResponsiveValue,
  ComponentWithAs,
} from "@chakra-ui/react";
import React from "react";

interface CustomInputProps {
  label: string;
  inputType: React.InputHTMLAttributes<HTMLInputElement>["type"];
  name: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputValue: string | number;
  isInvalid?: boolean;
  error: string | undefined;
  placeHolder: string;
  readonly?: boolean;
  isRequired?: boolean;
  autoFocus?: boolean;
  variant?:
    | ResponsiveValue<
        (string & {}) | "outline" | "filled" | "flushed" | "unstyled"
      >
    | undefined;
  rest?: ComponentWithAs<"input", InputProps>;
}

export function CustomInput({
  label,
  inputType,
  name,
  handleInputChange,
  inputValue,
  error,
  placeHolder,
  readonly,
  isRequired = false,
  autoFocus = false,
  variant,
  ...rest
}: CustomInputProps) {
  return (
    <FormControl isRequired={isRequired}>
      <FormLabel fontWeight={500}>{label}</FormLabel>
      <Input
        autoFocus={autoFocus}
        w={"100%"}
        isInvalid={error ? true : false}
        onChange={handleInputChange}
        m={0}
        name={name}
        value={inputValue}
        h={"40px"}
        _placeholder={{ color: "#ADB4B6" }}
        color="#000"
        placeholder={placeHolder}
        type={inputType}
        readOnly={readonly}
        variant={variant}
        {...rest}
      />
      {error && (
        <Box color={"red"} mt={"5px"}>
          {error}
        </Box>
      )}
    </FormControl>
  );
}
