import jwt_decode from "jwt-decode";
import { TokenInterface } from "../interfaces";

const useAuth = (): boolean => {
  const jwt = localStorage.getItem("token");

  if (jwt) {
    const token: TokenInterface = jwt_decode(jwt);
    return token.exp > Date.now() / 1000;
  }

  return false;
};

export default useAuth;
