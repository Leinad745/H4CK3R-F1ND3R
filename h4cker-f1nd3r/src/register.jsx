import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { registrarUsuario, obtenerUsuarioPorId } from "./services/usuarioService";

export default function Register() {
  const [nombreCompleto, setNombreCompleto] = useState("");
  const [nombreUsuario, setNombreUsuario] = useState("");
  const [correoElectronico, setCorreoElectronico] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [aceptaTerminos, setAceptaTerminos] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const limpiarCampos = () => {
    setNombreCompleto("");
    setNombreUsuario("");
    setCorreoElectronico("");
    setPassword("");
    setPasswordConfirm("");
    setAceptaTerminos(false);
  };

  const regDatosUsuario = async () => {
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
      alert(
        "Debes ingresar un correo electrónico válido (debe contener @ y .)"
      );
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

    // Crear nuevo usuario con ID único
    const nuevoUsuario = {
      username: nombreUsuario,
      nombreReal: nombreCompleto,
      contrasena: password,
      email: correoElectronico,
    };
    try {
      setLoading(true);
      const usuarioRegistrado = await registrarUsuario(nuevoUsuario);
      const usuarioCompleto = await obtenerUsuarioPorId(usuarioRegistrado.idUsuario);
      localStorage.setItem("usuario", JSON.stringify(usuarioCompleto));
      localStorage.setItem("isAuthenticated", "true");
      alert("Registro exitoso");
      limpiarCampos();
      localStorage.setItem("usuario", JSON.stringify(usuarioRegistrado))
      window.dispatchEvent(new Event("usuarioRegistrado"));
      navigate("/login");
    } catch (error) {
      console.error("Error al registrar usuario:", error);

      if (error.response) {
        if (error.response.status === 409 || error.response.status === 400) {
          alert("El nombre de usuario o correo electrónico ya están en uso.");
        } else {
          alert(
            "Error al registrar: " +
            (error.response.data.message || error.reponse.data)
          );
        }
      } else if (error.request) {
        alert("Sin conexion al servidor");
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
                  <button type="submit" className="btn btn-primary" disabled={loading}>
                    {loading ? "Registrando..." : "Registrarse"}
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
