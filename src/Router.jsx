import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../src/styles/App.module.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { AuthLayout } from "./Auth";
import Profile from "./pages/Profile";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
        </Route>
        <Route index element={<Home />} />
        <Route path="/perfil" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
