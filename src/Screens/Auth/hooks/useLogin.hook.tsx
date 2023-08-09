import { useContext, useState } from "react";
import { useLocalStorage } from "../../../hooks";
import { useNavigate } from "react-router";
import { ROUTES } from "../../../routes";
import AuthContext from "../Context/Auth.context";

interface InputErrors {
  email: string;
  password: string;
}

interface InputValues {
  email: string;
  password: string;
}

export const useLogin = () => {
  const navigator = useNavigate();
  const { login } = useContext(AuthContext);
  const { setLocalStorage } = useLocalStorage();
  const [isLoading, setIsLoading] = useState(false);
  const [inputErrors, setInputErrors] = useState<InputErrors>({
    email: "",
    password: "",
  });
  const [inputValues, setInputValues] = useState<InputValues>({
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValues((prev) => ({ ...prev, [name]: value }));
  };

  const validateInputs = (): boolean => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    const errors: InputErrors = {
      email: "",
      password: "",
    };
    if (!inputValues.email) {
      errors.email = "El email es requerido";
    } else if (!emailRegex.test(inputValues.email)) {
      errors.email = "El email no es válido";
    } else {
      errors.email = "";
    }

    if (!inputValues.password) {
      errors.password = "La contraseña es requerida";
    } else if (inputValues.password.length < 6) {
      errors.password = "La contraseña debe tener al menos 6 caracteres";
    } else if (inputValues.password.length > 12) {
      errors.password = "La contraseña debe tener menos de 12 caracteres";
    } else {
      errors.password = "";
    }

    setInputErrors(errors);
    return Object.values(errors).some((error) => error.length > 0);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors = validateInputs();
    if (errors) return;

    setIsLoading(true);
    const data = await login(inputValues.email, inputValues.password);

    if (data) {
      setLocalStorage("token", data!.token);
      setIsLoading(false);
      navigator(ROUTES.USER.PANEL);
    }
    setIsLoading(false);
  };

  return {
    inputErrors,
    inputValues,
    isLoading,
    handleInputChange,
    handleSubmit,
  };
};
