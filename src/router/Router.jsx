import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "../pages/home/Home";
import LoginPage from "../pages/auth/login/Login";
import LandingPage from "../pages/landing/Landing";
import RegisterPage from "../pages/auth/register/Register";
import Layout from "../pages/layout/Layout";
import Menu from "../pages/home/menu/Menu";
import Meals from "../pages/home/meals/Meals";
import Order from "../pages/home/order/Order";
import RegisterAs from "../pages/auth/register/RegisterAs";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterAs />} />
        <Route path="/register/:user" element={<RegisterPage />} />

        <Route element={<Layout />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/home/menus" element={<Menu />} />
          <Route path="/home/meals" element={<Meals />} />
          <Route path="/home/orders" element={<Order />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
