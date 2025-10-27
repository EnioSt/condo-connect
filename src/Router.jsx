import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../src/styles/App.module.css";
import Login from "./pages/Login";
import Home from "./pages/Home";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth/login" element={<Login />} />
        <Route index element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
