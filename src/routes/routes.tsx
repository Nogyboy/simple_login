import "./App.css";
import { Routes, Route } from "react-router-dom";
import SignupPage from "../pages/SignUp";
import LoginPage from "../pages/Login";
import INTERNAL_ROUTES from "../constants/internalRoutes";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={INTERNAL_ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={INTERNAL_ROUTES.SIGNUP} element={<SignupPage />} />
    </Routes>
  );
};

export default AppRoutes;
