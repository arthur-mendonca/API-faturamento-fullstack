import { useNavigate, Outlet } from "react-router-dom";
import { useEffect } from "react";

export const ProtectedRoute: React.FC = () => {
  const navigate = useNavigate();
  const email = localStorage.getItem("@USERMAIL");

  useEffect(() => {
    if (!email) {
      navigate("/");
    }
  }, [email, navigate]);

  return <>{email ? <Outlet /> : navigate("/")}</>;
};
