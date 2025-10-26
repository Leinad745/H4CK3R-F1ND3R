import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import { NavBar } from "./components/navbar";
import { Index } from "./index";
import Register from "./register";
import Login from "./login"; // Asegúrate de tener un componente Login
import Perfil from "./perfil";
import GestorEquipo from "./equipo";
import Calendar from "./calendar";
import Preprueba from "./preprueba";
import RecuperarContraseña from "./recuperarContraseña";
import Ranking from "./ranking";
import { Footer } from "./components/footer";

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/equipo" element={<GestorEquipo />} />
          <Route path="/calendario" element={<Calendar />} />
          <Route path="/preprueba" element={<Preprueba />} />
          <Route path="/recuperarContraseña" element={<RecuperarContraseña />} />
          <Route path="/ranking" element={<Ranking />} />
        </Routes>
        <Outlet />
      </main>
      <Footer />
    </BrowserRouter>
  );
}
