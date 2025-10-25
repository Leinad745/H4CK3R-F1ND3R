import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const [nombreCompleto, setNombreCompleto] = useState("");
  const [nombreUsuario, setNombreUsuario] = useState("");
  const [correoElectronico, setCorreoElectronico] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [aceptaTerminos, setAceptaTerminos] = useState(false);
  const navigate = useNavigate();

  const limpiarCampos = () => {
    setNombreCompleto("");
    setNombreUsuario("");
    setCorreoElectronico("");
    setPassword("");
    setPasswordConfirm("");
    setAceptaTerminos(false);
  };

  const regDatosUsuario = () => {
    // Validaciones básicas
    if (
      correoElectronico === "" ||
      nombreCompleto === "" ||
      password === "" ||
      passwordConfirm === "" ||
      nombreUsuario === ""
    ) {
      alert("Todos los campos deben ser llenados");
      return;
    }

    if (!correoElectronico.includes("@") || !correoElectronico.includes(".")) {
      alert("Debes ingresar un correo electrónico válido (debe contener @ y .)");
      return;
    }

    let usuarios = [];
    try {
      const usuariosStorage = localStorage.getItem("usuarios");
      if (usuariosStorage && usuariosStorage !== "null") {
        usuarios = JSON.parse(usuariosStorage);
      }
    } catch (error) {
      console.error("Error al obtener usuarios de localStorage:", error);
      usuarios = [];
    }

    const existeUsuario = usuarios.some(
      (u) => u.correoElectronico === correoElectronico
    );

    if (existeUsuario) {
      alert("El correo ya está registrado");
      return;
    }

    if (password !== passwordConfirm) {
      alert("Las contraseñas no coinciden");
      return;
    }

    if (!aceptaTerminos) {
      alert("Debes aceptar los términos y condiciones");
      return;
    }

    const nuevoUsuario = {
      nombreCompleto,
      nombreUsuario,
      correoElectronico,
      password,
      nivel: "",
      edad: "",
    };

    usuarios.push(nuevoUsuario);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    alert("Registro exitoso");
    limpiarCampos();
    navigate("/login"); // Redirige al login
  };

  return (
    <main>
      <h1 id="titulo-reg" style={{ color: "aliceblue", marginTop: "5%" }}>
        QU13N-3R35?
      </h1>

      <div className="UserReg container row">
        {/* Nombre completo */}
        <div className="row align-items-center">
          <label htmlFor="nombreCompleto" style={{ color: "aliceblue" }} className="form-label textForm">
            Nombre Completo
          </label>
          <input
            type="text"
            id="nombreCompleto"
            className="form-control"
            placeholder="Ingresa tu nombre"
            value={nombreCompleto}
            onChange={(e) => setNombreCompleto(e.target.value)}
          />
        </div>

        {/* Nombre usuario */}
        <div className="row align-items-center">
          <label htmlFor="nombreUsuario" style={{ color: "aliceblue" }} className="form-label textForm">
            Nombre de Usuario
          </label>
          <input
            type="text"
            id="nombreUsuario"
            className="form-control"
            placeholder="Ingresa tu nombre de usuario"
            value={nombreUsuario}
            onChange={(e) => setNombreUsuario(e.target.value)}
          />
        </div>

        {/* Correo */}
        <div className="row align-items-center">
          <label htmlFor="correoElectronico" style={{ color: "aliceblue" }} className="form-label textForm">
            Correo Electrónico
          </label>
          <input
            type="text"
            id="correoElectronico"
            className="form-control"
            placeholder="Ingresa tu correo electrónico"
            value={correoElectronico}
            onChange={(e) => setCorreoElectronico(e.target.value)}
          />
        </div>

        {/* Contraseña */}
        <div className="row align-items-center">
          <label htmlFor="password" style={{ color: "aliceblue", marginTop: "2%" }} className="form-label textForm">
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            className="form-control"
            placeholder="**********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Confirmar contraseña */}
        <div className="row align-items-center">
          <label htmlFor="passwordConfirm" style={{ color: "aliceblue", marginTop: "2%" }} className="form-label textForm">
            Confirmar Contraseña
          </label>
          <input
            type="password"
            id="passwordConfirm"
            className="form-control"
            placeholder="**********"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
        </div>

        {/* Checkbox y botón */}
        <div className="row g-3 align-items-center">
          <button
            id="botones"
            type="button"
            className="btn btn-success mx-auto d-block"
            style={{ marginTop: "1%" }}
            onClick={regDatosUsuario}
          >
            Registrar
          </button>

          <label style={{ color: "aliceblue" }}>
            <input
              id="terminosCheckbox"
              type="checkbox"
              checked={aceptaTerminos}
              onChange={(e) => setAceptaTerminos(e.target.checked)}
              style={{ marginRight: "8px" }}
            />
            Al aceptar, usted acepta nuestros términos y condiciones, política de privacidad, y que es mayor de edad.
          </label>

          <Link to="/login" style={{ color: "lightblue", marginTop: "10px" }}>
            ¿Ya tienes cuenta? Inicia sesión
          </Link>
        </div>
      </div>
    </main>
  );
}
