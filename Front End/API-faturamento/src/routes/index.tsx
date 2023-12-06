import { Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "../pages/ProtectedRoute";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { DashboardPage } from "../pages/DashboardPage";

export const RoutesMain = () => {
  return (
    <>
      <Routes>
        <Route element={<LoginPage />} path="/login" />
        <Route element={<RegisterPage />} path="/" />
        <Route element={<ProtectedRoute />}>
          <Route element={<DashboardPage />} path="dashboard" />
        </Route>
      </Routes>
    </>
  );
};
