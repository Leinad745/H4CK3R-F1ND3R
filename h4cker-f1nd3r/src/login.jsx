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
    <main>
      <h1 id="titulo" style={{ color: "aliceblue", marginTop: "5%" }}>
        1NGR354-7U5-CR3D3NC14L35
      </h1>

      <div className="contenedor container row">
        <div className="row g-3 align-items-center">
          <div className="row align-items-center">
            <label
              htmlFor="correoElectronicoLogin"
              style={{ color: "aliceblue" }}
              className="form-label textForm"
            >
              Correo electrónico
            </label>
            <input
              type="text"
              id="correoElectronicoLogin"
              className="form-control"
              placeholder="Ingresa tu usuario"
              value={correoElectronicoLogin}
              onChange={(e) => setCorreoElectronicoLogin(e.target.value)}
            />
          </div>
        </div>

        <div className="row align-items-center">
          <label
            htmlFor="passwordLogin"
            className="form-label textForm"
            style={{ color: "aliceblue", marginTop: "2%" }}
          >
            Contraseña
          </label>
          <input
            type="password"
            id="passwordLogin"
            className="form-control"
            placeholder="**********"
            value={passwordLogin}
            onChange={(e) => setPasswordLogin(e.target.value)}
          />
        </div>

        <div className="row g-3 align-items-center">
          <button
            id="botones"
            type="button"
            className="btn btn-success mx-auto d-block"
            style={{ marginTop: "1%" }}
            onClick={loginUsuario}
          >
            Enviar
          </button>
          <Link to="/recuperar-password">
            <label>Recuperar contraseña</label>
          </Link>
          <span id="mensajeLogin"></span>
        </div>
      </div>
    </main>
  );
}