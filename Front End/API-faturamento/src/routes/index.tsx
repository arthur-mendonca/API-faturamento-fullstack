import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { DashboardPage } from "../pages/DashboardPage";
import { ProtectedRoute } from "../pages/protectedRoute";
import { useContext } from "react";
import { ModalContext } from "../context/modalContext";
import { ModalComponent } from "../components/ModalComponent";
import { DetailsPage } from "../pages/DetailsPage";
import { TestePage } from "../pages/TestePage";
import { MobileModalComponent } from "../components/ModalComponent/MobileModalComponent";

export const RoutesMain = () => {
  const { activeModal, activeMobileModal } = useContext(ModalContext);
  return (
    <>
      {activeModal && <ModalComponent />}
      {activeMobileModal === "mobileModal" && <MobileModalComponent />}

      <Routes>
        <Route element={<TestePage />} path="/teste" />
        <Route element={<LoginPage />} path="/login" />
        <Route element={<RegisterPage />} path="/" />
        <Route element={<ProtectedRoute />}>
          <Route element={<DashboardPage />} path="dashboard" />
          <Route element={<DetailsPage />} path="details/:id" />
        </Route>
      </Routes>
    </>
  );
};
