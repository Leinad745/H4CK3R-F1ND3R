import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import perfil from "./assets/perfil.png";
import { useParams } from "react-router-dom";
import { crearEquipo } from '../services/equipoServices';
import { obtenerEquiposPorUsuario } from '../services/miembroEquipoServices';
import { obtenerUsuarioPorId } from '../services/userServices';
import "./styles/perfil.css";

export default function Perfil() {
  const { usuarioId } = useParams();
  const [datosPerfil, setDatosPerfil] = useState({
    username: "",
    email: "",
    nombre: "",
    apellido: "",
    puntaje: 0,
    nivel: "",
    idUsuario: null
  });

  const [loading, setLoading] = useState(true);
  const [mostrarModalEquipo, setMostrarModalEquipo] = useState(false);
  const [esPropietario, setEsPropietario] = useState(false);
  const [misEquipos, setMisEquipos] = useState([]);
  const [solicitudesPendientes, setSolicitudesPendientes] = useState([]);

  const [nuevoEquipo, setNuevoEquipo] = useState({
    nombreEquipo: '',
    descripcion: '',
    logoEquipo: ''
  });

  const handleInputEquipo = (e) => {
    const { name, value } = e.target;
    setNuevoEquipo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCrearEquipo = async (e) => {
    e.preventDefault();
    
    if (!nuevoEquipo.nombreEquipo) {
      alert('Por favor ingresa el nombre del equipo');
      return;
    }

    try {
      const equipoCreado = await crearEquipo(nuevoEquipo);
      console.log('Equipo creado:', equipoCreado);
      
      setNuevoEquipo({
        nombreEquipo: '',
        descripcion: '',
        logoEquipo: ''
      });
      
      setMostrarModalEquipo(false);
      cargarMisEquipos();
      alert('¡Equipo creado exitosamente!');
    } catch (err) {
      alert('Error al crear el equipo: ' + (err.response?.data?.message || err.message));
      console.error('Error:', err);
    }
  };

  const cargarDatosUsuario = async (idUsuario) => {
    try {
      setLoading(true);
      const usuario = await obtenerUsuarioPorId(idUsuario);
      console.log('📦 Usuario del backend:', usuario);
      
      setDatosPerfil({
        username: usuario.username || "",
        email: usuario.email || "",
        nombre: usuario.nombre || "",
        apellido: usuario.apellido || "",
        puntaje: usuario.puntaje || 0,
        nivel: usuario.nivel || "Novato",
        idUsuario: usuario.idUsuario
      });
      
      return usuario.idUsuario;
    } catch (err) {
      console.error('Error al cargar usuario:', err);
      alert('Error al cargar los datos del usuario');
    } finally {
      setLoading(false);
    }
  };

  const cargarMisEquipos = async () => {
    if (!datosPerfil.idUsuario) return;
    
    try {
      const equipos = await obtenerEquiposPorUsuario(datosPerfil.idUsuario);
      console.log('📦 Equipos del usuario:', equipos);
      setMisEquipos(equipos);
    } catch (err) {
      console.error('Error al cargar equipos:', err);
    }
  };

  useEffect(() => {
    const cargarPerfil = async () => {
      try {
        // Obtener usuario del localStorage
        const usuarioGuardado = localStorage.getItem('usuario');
        
        if (usuarioGuardado) {
          const usuario = JSON.parse(usuarioGuardado);
          const idUsuario = usuarioId || usuario.idUsuario;
          
          // Verificar si es el propietario del perfil
          setEsPropietario(!usuarioId || usuarioId === usuario.idUsuario.toString());
          
          // Cargar datos del usuario desde el backend
          const idCargado = await cargarDatosUsuario(idUsuario);
          
          // Cargar equipos del usuario
          if (idCargado) {
            const equipos = await obtenerEquiposPorUsuario(idCargado);
            setMisEquipos(equipos);
          }
        } else {
          alert('No hay sesión iniciada');
          setLoading(false);
        }
      } catch (error) {
        console.error("Error al cargar perfil:", error);
        setLoading(false);
      }
    };

    cargarPerfil();
  }, [usuarioId]);

  if (loading) {
    return (
      <div className="container mt-5">
        <div className="text-center py-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Cargando...</span>
          </div>
          <p className="mt-3">Cargando perfil...</p>
        </div>
      </div>
    );
  }

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
                        <span id="nombre">{datosPerfil.username}</span>
                      </h4>
                      <p className="sub_texto text-secondary mb-1" id="nivelUsuario">
                        {datosPerfil.nivel}
                      </p>
                      <p className="text-muted mb-1">
                        Puntos: <strong>{datosPerfil.puntaje}</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-md-8">
              <div className="card mb-3">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <p><strong>Username: </strong></p>
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
                      <p><strong>Nombre: </strong></p>
                    </div>
                    <div className="col-sm-9">
                      <span id="nombre">
                        {datosPerfil.nombre} {datosPerfil.apellido}
                      </span>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p><strong>Nivel: </strong></p>
                    </div>
                    <div className="col-sm-9">
                      <span id="nivel">{datosPerfil.nivel}</span>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p><strong>Puntaje: </strong></p>
                    </div>
                    <div className="col-sm-9">
                      <span id="puntaje">{datosPerfil.puntaje} puntos</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* SECCIÓN DE EQUIPOS */}
              <div className="card mb-3">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5 className="mb-0">
                      {esPropietario ? 'Mis Equipos' : 'Equipos'}
                    </h5>
                    {esPropietario && (
                      <button
                        className="btn btn-success btn-sm"
                        onClick={() => setMostrarModalEquipo(true)}
                      >
                        + Crear Equipo
                      </button>
                    )}
                  </div>
                  
                  {misEquipos.length > 0 ? (
                    <div className="equipos-lista">
                      {misEquipos.map((miembro) => (
                        <div key={miembro.idMiembroEquipo} className="equipo-item">
                          <div className="equipo-info">
                            <h6>{miembro.equipo?.nombreEquipo || 'Equipo'}</h6>
                            <span className="badge bg-primary">{miembro.rol}</span>
                          </div>
                          <small className="text-muted">
                            Unido: {new Date(miembro.fechaUnion).toLocaleDateString()}
                          </small>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-muted">
                      {esPropietario 
                        ? 'No perteneces a ningún equipo aún' 
                        : 'Este usuario no pertenece a ningún equipo'}
                    </p>
                  )}
                </div>
              </div>

              {/* SECCIÓN DE SOLICITUDES - Solo para el propietario */}
              {esPropietario && (
                <div className="card mb-3">
                  <div className="card-body">
                    <h5 className="mb-3">Solicitudes Enviadas</h5>
                    {solicitudesPendientes.length > 0 ? (
                      <div className="solicitudes-lista">
                        {solicitudesPendientes.map((solicitud, index) => (
                          <div key={index} className="solicitud-item">
                            <span>{solicitud.nombreEquipo}</span>
                            <span className="badge bg-warning">Pendiente</span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-muted">No tienes solicitudes pendientes</p>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* MODAL CREAR EQUIPO */}
      {mostrarModalEquipo && esPropietario && (
        <div 
          className="modal-overlay-perfil"
          onClick={() => setMostrarModalEquipo(false)}
        >
          <div 
            className="modal-content-perfil"
            onClick={(e) => e.stopPropagation()}
          >
            <h2>Crear Nuevo Equipo</h2>
            
            <form onSubmit={handleCrearEquipo}>
              <div className="form-group-perfil">
                <label>Nombre del Equipo</label>
                <input
                  type="text"
                  name="nombreEquipo"
                  className="form-control"
                  placeholder="CyberWarriors"
                  value={nuevoEquipo.nombreEquipo}
                  onChange={handleInputEquipo}
                  required
                />
              </div>

              <div className="form-group-perfil">
                <label>Descripción</label>
                <textarea
                  name="descripcion"
                  className="form-control"
                  rows="3"
                  placeholder="Describe tu equipo..."
                  value={nuevoEquipo.descripcion}
                  onChange={handleInputEquipo}
                ></textarea>
              </div>

              <div className="form-group-perfil">
                <label>URL del Logo (opcional)</label>
                <input
                  type="text"
                  name="logoEquipo"
                  className="form-control"
                  placeholder="https://ejemplo.com/logo.png"
                  value={nuevoEquipo.logoEquipo}
                  onChange={handleInputEquipo}
                />
              </div>

              <div className="modal-buttons">
                <button type="submit" className="btn btn-success">
                  Crear Equipo
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setMostrarModalEquipo(false)}
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}