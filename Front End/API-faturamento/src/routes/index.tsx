import { Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "../pages/protectedRoute";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";

export const RoutesMain = () => {
  return (
    <>
      <Routes>
        <Route element={<LoginPage />} path="/" />
        <Route element={<RegisterPage />} path="/register" />
        <Route element={<ProtectedRoute />}>{/* ROTAS PROTEGIDAS  */}</Route>
      </Routes>
    </>
  );
};
