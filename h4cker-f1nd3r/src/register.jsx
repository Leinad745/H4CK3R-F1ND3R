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
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="text-center mb-4">QU13N-3R35?</h2>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  regDatosUsuario();
                }}
              >
                <div className="mb-3">
                  <label
                    htmlFor="nombreCompleto"
                    className="form-label"
                    style={{ color: "aliceblue" }}
                  >
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="nombreCompleto"
                    placeholder="Ingresa tu nombre"
                    value={nombreCompleto}
                    onChange={(e) => setNombreCompleto(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label
                    htmlFor="nombreUsuario"
                    className="form-label"
                    style={{ color: "aliceblue" }}
                  >
                    Nombre de Usuario
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="nombreUsuario"
                    placeholder="Ingresa tu nombre de usuario"
                    value={nombreUsuario}
                    onChange={(e) => setNombreUsuario(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label
                    htmlFor="correoElectronico"
                    className="form-label"
                    style={{ color: "aliceblue" }}
                  >
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="correoElectronico"
                    placeholder="Ingresa tu correo electrónico"
                    value={correoElectronico}
                    onChange={(e) => setCorreoElectronico(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label
                    htmlFor="password"
                    className="form-label"
                    style={{ color: "aliceblue", marginTop: "2%" }}
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
                  />
                </div>

                <div className="mb-3">
                  <label
                    htmlFor="passwordConfirm"
                    className="form-label"
                    style={{ color: "aliceblue", marginTop: "2%" }}
                  >
                    Confirmar Contraseña
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="passwordConfirm"
                    placeholder="**********"
                    value={passwordConfirm}
                    onChange={(e) => setPasswordConfirm(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="terminosCheckbox"
                    checked={aceptaTerminos}
                    onChange={(e) => setAceptaTerminos(e.target.checked)}
                    required
                  />
                  <label
                    className="form-check-label"
                    htmlFor="terminosCheckbox"
                    style={{ color: "aliceblue" }}
                  >
                    Al aceptar, usted acepta nuestros términos y condiciones,
                    política de privacidad, y que es mayor de edad.
                  </label>
                </div>

                <div className="d-grid gap-2">
                  <button type="submit" className="btn btn-primary">
                    Registrar
                  </button>
                  <Link to="/login" className="btn btn-link">
                    ¿Ya tienes cuenta? Inicia sesión
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
