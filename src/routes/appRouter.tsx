import { Navigate, Route, Routes, useLocation } from "react-router-dom";

import { Login, Register } from "../Screens/Auth";
import { AuthGuard, UserGuard } from "../Guards";
import { ROUTES } from "./routesConstants";
import { Tasks } from "../Screens/Panel";

const AppRoutes = () => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      {/* AUTH */}
      <Route path="/auth" element={<AuthGuard />}>
        <Route index element={<Login />} />
        <Route path={ROUTES.AUTH.LOGIN} element={<Register />} />
        <Route path={ROUTES.AUTH.REGISTER} element={<Register />} />
        <Route path="*" element={<Navigate to={"/auth"} />} />
      </Route>

      {/* USER */}
      <Route path="/panel" element={<UserGuard />}>
        <Route index element={<Tasks />} />
        <Route path={ROUTES.USER.PANEL} element={<Tasks />} />
        <Route path="*" element={<Navigate to={"/auth"} />} />
      </Route>

      <Route path="*" element={<Navigate to={"/auth"} />} />
    </Routes>
  );
};

export { AppRoutes };
