import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks";

export const UserGuard = () => {
  const auth: boolean = useAuth();

  return <>{auth ? <Outlet /> : <Navigate to={"/auth"} />}</>;
};
