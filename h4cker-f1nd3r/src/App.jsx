import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { NavBar } from "./components/navbar";
import { Index } from "./index";

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
    </BrowserRouter>
  );
}
