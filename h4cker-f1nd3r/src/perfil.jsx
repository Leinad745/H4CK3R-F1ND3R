import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect, use } from "react"; // Importamos useEffect para cargar datos al montar
import perfil from "./assets/perfil.png";
import { useParams } from "react-router-dom";
import "./styles/perfil.css";
import { obtenerUsuarioPorId } from "../services/userServices";


export default function Perfil() {
  const { usuarioId } = useParams();
  const [datosPerfil, setDatosPerfil] = useState({
    nombre: "John Doe",
    email: "johndoe@example.com",
    edad: "",
    ciudad: "",
    especialidad: "",
    nivel: "",
    github: "",
    twitter: "",
    puntaje: 0
  });

  const [formData, setFormData] = useState({
    edad: "",
    ciudad: "",
    especialidad: "",
    github: "",
    twitter: ""
  });

  const [mostrarModal, setMostrarModal] = useState(false);
  const [esPropietario, setEsPropietario] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleGuardarPerfil = async (e) => {
    e.preventDefault();
    const cambioDatos = {
      ...datosPerfil,
      edad: formData.edad || datosPerfil.edad,
      ciudad: formData.ciudad || datosPerfil.ciudad,
      especialidad: formData.especialidad || datosPerfil.especialidad,
      github: formData.github || datosPerfil.github,
      twitter: formData.twitter || datosPerfil.twitter
    };

    setDatosPerfil(cambioDatos);

    try {
      const usuariosGuardados = localStorage.getItem('usuarios');

      if (usuariosGuardados) {
        const usuarios = JSON.parse(usuariosGuardados);

        if (usuarios && usuarios.length > 0) {
          usuarios[usuarios.length - 1] = {
            nombreCompleto: cambioDatos.nombre,
            correoElectronico: cambioDatos.email,
            edad: cambioDatos.edad,
            ciudad: cambioDatos.ciudad,
            especialidad: cambioDatos.especialidad,
            nivel: cambioDatos.nivel,
            github: cambioDatos.github,
            twitter: cambioDatos.twitter
          };
          localStorage.setItem('usuarios', JSON.stringify(usuarios));
        }
      }

    } catch (error) {
      console.error('Error al guardar en localstorage: ',error)
    }

    setFormData({
      edad: "",
      ciudad: "",
      especialidad: "",
      github: "",
      twitter: ""
    });

    setMostrarModal(false);
  };

  useEffect(() => {
    try {
      const usuariosGuardados = localStorage.getItem('usuarios');
      if (usuariosGuardados) {
        const usuarios = JSON.parse(usuariosGuardados);
        
        if (usuarios && usuarios.length > 0){
          let usuarioActual;

          if (usuarioId) {
            usuarioActual = usuarios.find(u => u.id === usuarioId);
            setEsPropietario(false);
          } else {
            usuarioActual = usuarios[usuarios.length - 1];
            setEsPropietario(true);
          }

        if (usuarioActual) {
          setDatosPerfil({
            nombre: usuarioActual.nombreCompleto || "John Doe",
            email: usuarioActual.correoElectronico || "johndoe@example.com",
            edad: usuarioActual.edad || "",
            ciudad: usuarioActual.ciudad || "",
            especialidad: usuarioActual.especialidad || "",
            nivel: usuarioActual.nivel || "Sin nivel asignado",
            github: usuarioActual.github || "www.github.com/ejemplo",
            twitter: usuarioActual.twitter || "@Twitter"
          });
        }
      }
    }
  } catch (error) {
      console.log("Error al cargar datos",error)
    }
  }, [usuarioId]);
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
                      <p
                        className="sub_texto text-secondary mb-1"
                        id="nivelUsuario"
                      >
                        {datosPerfil.nivel}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mt-3">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-github mr-2 icon-inline"
                      >
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                      Github
                    </h6>
                    <span id="github" className="text-secondary">
                      {datosPerfil.github}
                    </span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        width={16}
                        height={16}
                        fill="currentColor"
                      >
                        <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                      </svg>
                      Twitter
                    </h6>
                    <span className="text-secondary" id="twitter" >{datosPerfil.twitter}</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-8">
              <div className="card mb-3">
                <div className="card-body">
                                    <div className="row">
                    <div className="col-sm-3">
                      <p>
                        <strong>Email: </strong>
                      </p>
                    </div>
                    <div className="col-sm-9">
                      <span id="email">{datosPerfil.email}</span>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p>
                        <strong>Edad: </strong>
                      </p>
                    </div>
                    <div className="col-sm-9">
                      <span id="edad">{datosPerfil.edad}</span>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p>
                        <strong>Ciudad: </strong>
                      </p>
                    </div>
                    <div className="col-sm-9">
                      <span id="ciudad">{datosPerfil.ciudad}</span>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p>
                        <strong>Especialidad: </strong>
                      </p>
                    </div>
                    <div className="col-sm-9">
                      <span id="especialidad">{datosPerfil.especialidad}</span>
                    </div>
                  </div>
                  <hr />
                  {esPropietario && (<div className="row">
                    <div className="col-sm-12">
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => setMostrarModal(true)}
                      >
                        Editar
                      </button>
                    </div>
                  </div>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {mostrarModal && esPropietario && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999
          }}
          onClick={() => setMostrarModal(false)}
        >
          <div 
            style={{
              backgroundColor: '#1a1a1a',
              padding: '30px',
              borderRadius: '15px',
              width: '90%',
              maxWidth: '500px',
              boxShadow: '0 10px 40px rgba(0, 0, 0, 0.5)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 style={{ color: 'white', marginBottom: '20px', textAlign: 'center' }}>
              Editar Perfil
            </h2>
            
            <form onSubmit={handleGuardarPerfil}>
              <div style={{ marginBottom: '20px' }}>
                <label style={{ color: 'white', display: 'block', marginBottom: '8px' }}>
                  Edad
                </label>
                <input
                  type="number"
                  name="edad"
                  className="form-control"
                  placeholder={datosPerfil.edad}
                  value={formData.edad}
                  onChange={handleInputChange}
                  style={{
                    backgroundColor: '#2a2a2a',
                    color: 'white',
                    border: '1px solid #444',
                    padding: '10px'
                  }}
                />
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ color: 'white', display: 'block', marginBottom: '8px' }}>
                  Ciudad
                </label>
                <input
                  type="text"
                  name="ciudad"
                  className="form-control"
                  placeholder={datosPerfil.ciudad}
                  value={formData.ciudad}
                  onChange={handleInputChange}
                  style={{
                    backgroundColor: '#2a2a2a',
                    color: 'white',
                    border: '1px solid #444',
                    padding: '10px'
                  }}
                />
              </div>

              <div style={{ marginBottom: '25px' }}>
                <label style={{ color: 'white', display: 'block', marginBottom: '8px' }}>
                  Especialidad
                </label>
                <input
                  type="text"
                  name="especialidad"
                  className="form-control"
                  placeholder={datosPerfil.especialidad}
                  value={formData.especialidad}
                  onChange={handleInputChange}
                  style={{
                    backgroundColor: '#2a2a2a',
                    color: 'white',
                    border: '1px solid #444',
                    padding: '10px'
                  }}
                />
              </div>

              <div style={{ marginBottom: '25px' }}>
                <label style={{ color: 'white', display: 'block', marginBottom: '8px' }}>
                  Github
                </label>
                <input
                  type="text"
                  name="github"
                  className="form-control"
                  placeholder={datosPerfil.github}
                  value={formData.github}
                  onChange={handleInputChange}
                  style={{
                    backgroundColor: '#2a2a2a',
                    color: 'white',
                    border: '1px solid #444',
                    padding: '10px'
                  }}
                />
              </div>

                            <div style={{ marginBottom: '25px' }}>
                <label style={{ color: 'white', display: 'block', marginBottom: '8px' }}>
                  Twitter
                </label>
                <input
                  type="text"
                  name="twitter"
                  className="form-control"
                  placeholder={datosPerfil.twitter}
                  value={formData.twitter}
                  onChange={handleInputChange}
                  style={{
                    backgroundColor: '#2a2a2a',
                    color: 'white',
                    border: '1px solid #444',
                    padding: '10px'
                  }}
                />
              </div>

              <div style={{ display: 'flex', gap: '10px' }}>
                <button
                  type="submit"
                  className="btn btn-success"
                  style={{ flex: 1, padding: '10px' }}
                >
                  Guardar Cambios
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setMostrarModal(false)}
                  style={{ flex: 1, padding: '10px' }}
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
