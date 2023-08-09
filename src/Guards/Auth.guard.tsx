import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks";

export const AuthGuard = () => {
  const auth: boolean = useAuth();

  return <>{!auth ? <Outlet /> : <Navigate to={"/panel"} />}</>;
};
