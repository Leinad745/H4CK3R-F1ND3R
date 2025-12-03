import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { loginUsuario as loginAPI, obtenerUsuarioPorId } from "../services/userServices";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const limpiarCampos = () => {
    setUsername("");
    setPassword("");
  };

  const handleLogin = async () => {
    if (username === "" || password === "") {
      alert("Todos los campos deben ser llenados");
      return;
    } 
    
    if (username.length < 3 || password.length < 3) {
      alert("Los campos deben tener al menos 3 caracteres");
      return;
    }

    try {
      setLoading(true);

      const credentials = {
        username: username,
        contrasena: password
      };

      const usuarioLogeado = await loginAPI(credentials);

      const usuarioCompleto = await obtenerUsuarioPorId(usuarioLogeado.idUsuario);
      
      localStorage.setItem('usuario', JSON.stringify(usuarioCompleto));
      localStorage.setItem("isAuthenticated", "true");

      window.dispatchEvent(new Event('usuarioRegistrado'));
      
      alert("¡Inicio de sesión exitoso!");
      limpiarCampos();
      navigate("/perfil");
    } catch (error) {
      if (error.response) {
        if (error.response.status === 401 || error.response.status === 404) {
          alert("Usuario o contraseña incorrectos");
        } else {
          alert("Error al iniciar sesión: " + (error.response.data.message || error.response.data));
        }
      } else if (error.request) {
        alert("Sin conexión al servidor");
      } else {
        alert("Error inesperado: " + error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="text-center mb-4">1NGR354-7U5-CR3D3NC14L35</h2>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleLogin();
                }}
              >
                <div className="mb-3">
                  <label
                    htmlFor="username"
                    className="form-label"
                    style={{ color: "aliceblue" }}
                  >
                    Nombre de Usuario
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder="Ingresa tu nombre de usuario"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    disabled={loading}
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="password"
                    className="form-label"
                    style={{ color: "aliceblue" }}
                  >
                    Contraseña
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="**********"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    disabled={loading}
                  />
                </div>
                <div className="d-grid gap-2">
                  <button type="submit" className="btn btn-primary" disabled={loading}>
                    {loading ? "Iniciando sesión..." : "Iniciar Sesión"}
                  </button>
                  <Link
                    to="/recuperarContraseña"
                    className="btn btn-link"
                    style={{ color: "aliceblue" }}
                  >
                    ¿Olvidaste tu contraseña?
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}