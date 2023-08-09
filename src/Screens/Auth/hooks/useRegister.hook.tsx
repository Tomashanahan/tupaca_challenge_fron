import { useState } from "react";
import { useAxios, useLocalStorage, useToaster } from "../../../hooks";
import { ROUTES } from "../../../routes";
import { useNavigate } from "react-router";

export const useRegister = () => {
  const navigator = useNavigate();
  const { api } = useAxios();
  const { showToaster } = useToaster();
  const { setLocalStorage } = useLocalStorage();
  const [isLoading, setIsLoading] = useState(false);
  const [inputErrors, setInputErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [inputValues, setInputValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValues((prev) => ({ ...prev, [name]: value }));
  };

  const validateInputs = (): boolean => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    const errors = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    };
    if (!inputValues.firstName) {
      errors.firstName = "El nombre es requerido";
    } else {
      errors.firstName = "";
    }

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

    try {
      setIsLoading(true);
      const { data } = await api.post("/users/register", inputValues);

      setLocalStorage("token", data.token);
      setIsLoading(false);
      showToaster("Éxito", "Usuario registrado correctamente", "success");
      navigator(ROUTES.USER.PANEL);
    } catch (error) {
      showToaster("Error", "No se pudo registrar el usuario", "error");
      setIsLoading(false);
    }
  };
  return {
    inputErrors,
    inputValues,
    handleInputChange,
    handleSubmit,
    isLoading,
  };
};
