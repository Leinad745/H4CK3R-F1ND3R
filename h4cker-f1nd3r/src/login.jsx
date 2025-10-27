import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const [correoElectronicoLogin, setCorreoElectronicoLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");
  const navigate = useNavigate();

  const limpiarCampos = () => {
    setCorreoElectronicoLogin("");
    setPasswordLogin("");
  };

  const loginUsuario = () => {
    if (correoElectronicoLogin === "" || passwordLogin === "") {
      alert("Todos los campos deben ser llenados");
      return;
    } else if (
      !correoElectronicoLogin.includes("@") ||
      !correoElectronicoLogin.includes(".")
    ) {
      alert("Debes ingresar un correo electrónico válido (debe contener @ y .)");
      return;
    } else if (correoElectronicoLogin.length < 3 || passwordLogin.length < 3) {
      alert("Los campos deben tener al menos 3 caracteres");
      return;
    } else {
      let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
      let usuarioEncontrado = usuarios.find(
        (u) =>
          u.correoElectronico === correoElectronicoLogin &&
          u.password === passwordLogin
      );

      if (usuarioEncontrado) {
        alert("Login exitoso");
        limpiarCampos();
        navigate("/preprueba");
      } else {
        alert("Credenciales incorrectas");
      }
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
                  loginUsuario();
                }}
              >
                <div className="mb-3">
                  <label
                    htmlFor="correoElectronicoLogin"
                    className="form-label"
                    style={{ color: "aliceblue" }}
                  >
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="correoElectronicoLogin"
                    placeholder="Ingresa tu correo electrónico"
                    value={correoElectronicoLogin}
                    onChange={(e) => setCorreoElectronicoLogin(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="passwordLogin"
                    className="form-label"
                    style={{ color: "aliceblue" }}
                  >
                    Contraseña
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="passwordLogin"
                    placeholder="**********"
                    value={passwordLogin}
                    onChange={(e) => setPasswordLogin(e.target.value)}
                    required
                  />
                </div>
                <div className="d-grid gap-2">
                  <button type="submit" className="btn btn-primary">
                    Iniciar Sesión
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