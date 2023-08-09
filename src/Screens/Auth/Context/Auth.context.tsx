import { ReactNode, createContext } from "react";
import { useAxios, useLocalStorage, useToaster } from "../../../hooks";

export interface AuthContextProps {
  login: (email: string, password: string) => void;
  register: (email: string, password: string) => void;
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
      const { data } = await api.post("/auth/login", {
        email,
        password,
      });

      setLocalStorage("token", data.token);
    } catch (error) {
      showToaster("Error", "No se pudo iniciar sesión", "error");
    }
  };

  return (
    <AuthContext.Provider
      value={{
        login,
        register: () => {},
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
