import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { NavBar } from "./components/navbar";
import { Index } from "./index";
import Register from "./register";
import Login from "./login";
import Perfil from "./perfil";
import GestorEquipo from "./equipo";
import Calendar from "./calendar";
import Preprueba from "./preprueba";
import { Footer } from "./components/footer";

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/equipos" element={<GestorEquipo />} />
        <Route path="/calendario" element={<Calendar />} />
        <Route path="/preprueba" element={<Preprueba />} />
        <Route path="/index" element={<Index />} />
      </Routes>
      <Footer />
    </BrowserRouter>

  );
}
