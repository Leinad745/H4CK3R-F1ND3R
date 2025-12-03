import { useState, useEffect } from 'react';
import { CardForo } from './components/cardForo';
import { obtenerPublicaciones, crearPublicacion } from '../services/publicacionServices';
import './styles/foro.css';

const Foro = () => {
  const [publicaciones, setPublicaciones] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [nuevaPublicacion, setNuevaPublicacion] = useState({
    titulo: '',
    contenido: '',
    idUsuario: null
  });

  // Cargar publicaciones al montar el componente
  useEffect(() => {
    cargarPublicaciones();
    // Cargar el usuario logueado del localStorage
    const usuarioGuardado = localStorage.getItem('usuario');
    if (usuarioGuardado) {
      const usuario = JSON.parse(usuarioGuardado);
      setNuevaPublicacion(prev => ({
        ...prev,
        idUsuario: usuario.idUsuario
      }));
    }
  }, []);

  const cargarPublicaciones = async () => {
    try {
      setLoading(true);
      const data = await obtenerPublicaciones();
      console.log('📦 Datos del backend:', data);
      setPublicaciones(data);
      setError(null);
    } catch (err) {
      setError('Error al cargar las publicaciones');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleCrearPublicacion = async (e) => {
    e.preventDefault();
    
    if (!nuevaPublicacion.titulo || !nuevaPublicacion.contenido) {
      alert('Por favor completa todos los campos');
      return;
    }

    if (!nuevaPublicacion.idUsuario) {
      alert('Debes iniciar sesión para crear una publicación');
      return;
    }

    try {
      const publicacionData = {
        titulo: nuevaPublicacion.titulo,
        contenido: nuevaPublicacion.contenido,
        usuario: {
          idUsuario: nuevaPublicacion.idUsuario
        }
      };

      await crearPublicacion(publicacionData);
      
      setNuevaPublicacion(prev => ({
        titulo: '',
        contenido: '',
        idUsuario: prev.idUsuario
      }));
      
      setMostrarModal(false);
      cargarPublicaciones();
      alert('¡Publicación creada exitosamente!');
    } catch (err) {
      alert('Error al crear la publicación: ' + (err.response?.data?.message || err.message));
      console.error('Error:', err);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNuevaPublicacion(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleUpvote = (id) => {
    console.log(`Upvote a publicación ${id}`);
  };

  const handleDownvote = (id) => {
    console.log(`Downvote a publicación ${id}`);
  };

  const handleComment = (id) => {
    console.log(`Comentario en publicación ${id}`);
  };

  if (loading) {
    return (
      <div className="foro-container">
        <div className="text-center py-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Cargando...</span>
          </div>
          <p className="mt-3">Cargando publicaciones...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="foro-container">
        <div className="alert alert-danger" role="alert">
          {error}
          <button 
            className="btn btn-primary ms-3" 
            onClick={cargarPublicaciones}
          >
            Reintentar
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="foro-container">
      <div className="foro-header">
        <h1>Foro de Desarrollo</h1>
        <p>Comparte tus dudas, proyectos y conocimientos</p>
        <button 
          className="btn-crear-publicacion"
          onClick={() => setMostrarModal(true)}
        >
          + Nueva Publicación
        </button>
      </div>

      <div className="foro-content">
        <div className="foro-main">
          <div className="publicaciones-list">
            {publicaciones.length > 0 ? (
              publicaciones.map((pub) => (
                <CardForo
                  key={pub.idPublicacion}
                  id={pub.idPublicacion}
                  titulo={pub.titulo}
                  contenido={pub.contenido}
                  usuario={pub.usuario}
                  onUpvote={handleUpvote}
                  onDownvote={handleDownvote}
                  onComment={handleComment}
                />
              ))
            ) : (
              <div className="text-center py-5">
                <p className="text-muted">No hay publicaciones disponibles</p>
                <p className="text-muted">¡Sé el primero en crear una!</p>
              </div>
            )}
          </div>
        </div>

        <aside className="foro-sidebar">
          <div className="sidebar-card">
            <h3>Categorías Populares</h3>
            <ul>
              <li>
                <a href="#desarrollo">💻 Desarrollo</a>
              </li>
              <li>
                <a href="#proyectos">🚀 Proyectos</a>
              </li>
              <li>
                <a href="#tutorial">📚 Tutoriales</a>
              </li>
              <li>
                <a href="#preguntas">❓ Preguntas</a>
              </li>
              <li>
                <a href="#trending">🔥 Trending</a>
              </li>
            </ul>
          </div>

          <div className="sidebar-card">
            <h3>Reglas del Foro</h3>
            <ul className="reglas">
              <li>Sé respetuoso con otros usuarios</li>
              <li>No publiques spam o contenido inapropiado</li>
              <li>Incluye código formateado correctamente</li>
              <li>Busca antes de preguntar</li>
            </ul>
          </div>
        </aside>
      </div>

      {/* Modal para crear publicación */}
      {mostrarModal && (
        <div className="modal-overlay" onClick={() => setMostrarModal(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h2>Nueva Publicación</h2>
            <form onSubmit={handleCrearPublicacion}>
              <div className="mb-3">
                <label className="form-label">Título</label>
                <input
                  type="text"
                  name="titulo"
                  className="form-control"
                  value={nuevaPublicacion.titulo}
                  onChange={handleInputChange}
                  placeholder="Ingresa el título de tu publicación"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Contenido</label>
                <textarea
                  name="contenido"
                  className="form-control"
                  rows="5"
                  value={nuevaPublicacion.contenido}
                  onChange={handleInputChange}
                  placeholder="Describe tu pregunta o tema..."
                  required
                ></textarea>
              </div>
              <div className="d-flex gap-2">
                <button type="submit" className="btn btn-success">
                  Publicar
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setMostrarModal(false)}
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Foro;