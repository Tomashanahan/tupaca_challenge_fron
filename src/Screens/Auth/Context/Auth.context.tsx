import { ReactNode, createContext } from "react";
import { useAxios, useLocalStorage, useToaster } from "../../../hooks";
import { isAxiosError } from "axios";
import { AuthResponse, FormValues } from "../interfaces";

export interface AuthContextProps {
  login: (email: string, password: string) => Promise<void | AuthResponse>;
  register: (formValues: FormValues) => Promise<void | AuthResponse>;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const { api } = useAxios();
  const { setLocalStorage } = useLocalStorage();
  const { showToaster } = useToaster();

  const login = async (email: string, password: string) => {
    try {
      const { data } = await api.post<AuthResponse>("/users/login", {
        email,
        password,
      });

      setLocalStorage("token", data.token);

      return data;
    } catch (error) {
      if (isAxiosError(error)) {
        if (error.response?.status === 401) {
          return showToaster(
            "Error",
            "Usuario o contraseña incorrectos",
            "error"
          );
        }
      }

      showToaster("Error", "Error al hacer login", "error");
    }
  };

  const register = async (formValues: FormValues) => {
    try {
      const { data } = await api.post("/users/register", formValues);

      setLocalStorage("token", data.token);
      showToaster("Éxito", "Usuario registrado correctamente", "success");

      return data;
    } catch (error) {
      if (isAxiosError(error)) {
        if (error.response?.status === 409) {
          showToaster("Error", "Usuario ya registrado", "error");
        }
        return;
      }

      showToaster("Error", "No se pudo registrar el usuario", "error");
    }
  };

  return (
    <AuthContext.Provider
      value={{
        login,
        register,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
