import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import perfil from "./assets/perfil.png";
import { useParams, useNavigate } from "react-router-dom";
import "./styles/perfil.css";
import { obtenerUsuarioPorId } from "../services/userServices";

export default function Perfil() {
  const { usuarioId } = useParams();
  const navigate = useNavigate();
  const [datosPerfil, setDatosPerfil] = useState({
    idUsuario: null,
    nombre: "",
    email: "",
    username: "",
    titulo: "",
    puntaje: 0
  });

  const [esPropietario, setEsPropietario] = useState(false);

  const handleLogout = () => {
    // Confirmar antes de cerrar sesión
    if (window.confirm("¿Estás seguro de que quieres cerrar sesión?")) {
      // Limpiar localStorage
      localStorage.removeItem('usuario');
      localStorage.removeItem('isAuthenticated');
      
      // Disparar evento para actualizar navbar
      window.dispatchEvent(new Event('usuarioRegistrado'));
      
      // Redirigir a login
      navigate('/login');
    }
  };

  useEffect(() => {
    const cargarPerfil = async () => {
      try {
        let idParaCargar;

        const usuarioActualStr = localStorage.getItem('usuario');
        
        if (usuarioId) {
          idParaCargar = parseInt(usuarioId);
          
          if (usuarioActualStr) {
            const usuarioActual = JSON.parse(usuarioActualStr);
            setEsPropietario(usuarioActual.idUsuario === idParaCargar);
          } else {
            setEsPropietario(false);
          }
        } else {
          if (!usuarioActualStr) {
            console.error("No hay sesión activa");
            navigate('/login');
            return;
          }
          const usuarioActual = JSON.parse(usuarioActualStr);
          idParaCargar = usuarioActual.idUsuario;
          setEsPropietario(true);
        }

        const usuarioCargado = await obtenerUsuarioPorId(idParaCargar);
        
        console.log("Usuario cargado:", usuarioCargado);

        setDatosPerfil({
          idUsuario: usuarioCargado.idUsuario,
          nombre: usuarioCargado.nombreReal || "Usuario",
          email: usuarioCargado.email || "",
          username: usuarioCargado.username || "",
          titulo: usuarioCargado.titulo || "Sin título asignado",
          puntaje: usuarioCargado.puntaje || 0
        });

      } catch (error) {
        console.error("Error al cargar perfil:", error);
        
        if (error.response && error.response.status === 404) {
          alert("Usuario no encontrado");
        } else if (error.request) {
          alert("Sin conexión al servidor");
        }
      }
    };

    cargarPerfil();
  }, [usuarioId, navigate]);

  return (
    <main>
      <div className="container">
        <div className="main-body">
          <div className="row gutters-sm">
            <div className="col-md-4 mb-3">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex flex-column align-items-center text-center">
                    <img
                      src={perfil}
                      alt="Admin"
                      className="rounded-circle"
                      width={150}
                    />
                    <div className="mt-3">
                      <h4>
                        <span id="nombre">{datosPerfil.nombre}</span>
                      </h4>
                      <p className="text-muted mb-1">@{datosPerfil.username}</p>
                      <p className="sub_texto text-secondary mb-1" id="nivelUsuario">
                        {datosPerfil.titulo}
                      </p>
                      <p className="text-info">
                        <strong>Puntaje:</strong> {datosPerfil.puntaje}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Botón de Logout solo si es propietario */}
              {esPropietario && (
                <div className="card mt-3">
                  <div className="card-body">
                    <button
                      type="button"
                      className="btn btn-danger w-100"
                      onClick={handleLogout}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        className="bi bi-box-arrow-right me-2"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"
                        />
                        <path
                          fillRule="evenodd"
                          d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"
                        />
                      </svg>
                      Cerrar Sesión
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div className="col-md-8">
              <div className="card mb-3">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <p><strong>Nombre de Usuario: </strong></p>
                    </div>
                    <div className="col-sm-9">
                      <span id="username">{datosPerfil.username}</span>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p><strong>Email: </strong></p>
                    </div>
                    <div className="col-sm-9">
                      <span id="email">{datosPerfil.email}</span>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p><strong>Título: </strong></p>
                    </div>
                    <div className="col-sm-9">
                      <span id="titulo">{datosPerfil.titulo}</span>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p><strong>Puntaje: </strong></p>
                    </div>
                    <div className="col-sm-9">
                      <span id="puntaje">{datosPerfil.puntaje}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}