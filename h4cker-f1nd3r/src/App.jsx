import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { NavBar } from "./components/navbar";

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<h1> Esto es una prueba</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
