import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Product from "../pages/Product/Product";
import About from "../pages/About/about";
import Page404 from "../pages/Page404/Page404";
import Dashboard from "../pages/Dashboard/dashboard";
import Profile from "../pages/Profile/Profile";
import useAuth from "../services/useAuth";
import Cookies from "js-cookie";

const AppRoutes = () => {
  const {userLevel} = useAuth();
  let level = "CLIENTE";
  if (Cookies.get("token")) {
    level = userLevel();
  }

  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={userLevel() ? <Page404 /> : <SignUp />} />
      <Route path="/product" element={<Product />} />
      <Route
        path="/dashboard"
        element={level.nivel === "ADMINISTRADOR" ? <Dashboard /> : <Page404 />}
      />
      <Route path="/about" element={<About />} />
      <Route path="/profile" element={userLevel() ? <Profile /> : <Page404 />} />
      <Route path="/*" element={<Page404 />} />
    </Routes>
  );
};

export default AppRoutes;
