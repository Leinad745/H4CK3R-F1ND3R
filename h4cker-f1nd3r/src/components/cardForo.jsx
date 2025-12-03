import PropTypes from 'prop-types';
import '../styles/cardForo.css';

export const CardForo = ({ 
  id,
  titulo,
  contenido,
  usuario,
  onUpvote,
  onDownvote,
  onComment
}) => {
  // Función para formatear la fecha
  const formatearFecha = (fecha) => {
    if (!fecha) return 'Hace un momento';
    
    const fechaPublicacion = new Date(fecha);
    const ahora = new Date();
    const diferencia = ahora - fechaPublicacion;
    
    const minutos = Math.floor(diferencia / 60000);
    const horas = Math.floor(diferencia / 3600000);
    const dias = Math.floor(diferencia / 86400000);
    
    if (minutos < 1) return 'Hace un momento';
    if (minutos < 60) return `Hace ${minutos} minuto${minutos > 1 ? 's' : ''}`;
    if (horas < 24) return `Hace ${horas} hora${horas > 1 ? 's' : ''}`;
    if (dias < 7) return `Hace ${dias} día${dias > 1 ? 's' : ''}`;
    
    return fechaPublicacion.toLocaleDateString('es-ES', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  // Función para obtener las iniciales del usuario
  const obtenerIniciales = (nombre) => {
    if (!nombre) return '??';
    const palabras = nombre.trim().split(' ');
    if (palabras.length >= 2) {
      return (palabras[0][0] + palabras[1][0]).toUpperCase();
    }
    return nombre.substring(0, 2).toUpperCase();
  };

  // Función para truncar contenido largo
  const truncarContenido = (texto, maxLength = 300) => {
    if (!texto) return '';
    if (texto.length <= maxLength) return texto;
    return texto.substring(0, maxLength) + '...';
  };

  return (
    <div className="card-foro">
      <div className="card-foro-header">
        <div className="autor-info">
          <div className="avatar">
            {usuario?.avatar ? (
              <img src={usuario.avatar} alt={usuario.username || 'Usuario'} />
            ) : (
              <div className="avatar-placeholder">
                {obtenerIniciales(usuario?.username || 'Usuario')}
              </div>
            )}
          </div>
          <div className="autor-detalles">
            <h4 className="autor-nombre">
              {usuario?.username || 'Anónimo'}
            </h4>
            <span className="fecha">
              {formatearFecha(usuario?.fechaCreacion)}
            </span>
          </div>
        </div>
        
        {usuario?.nivel && (
          <span className="badge-categoria">{usuario.nivel}</span>
        )}
      </div>

      <div className="card-foro-body">
        <h3 className="titulo">{titulo}</h3>
        <p className="contenido">{truncarContenido(contenido)}</p>
      </div>

      <div className="card-foro-footer">
        <div className="acciones">
          <button 
            className="btn-accion btn-upvote"
            onClick={() => onUpvote && onUpvote(id)}
            title="Me gusta"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>{usuario?.puntaje || 0}</span>
          </button>

          <button 
            className="btn-accion btn-downvote"
            onClick={() => onDownvote && onDownvote(id)}
            title="No me gusta"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <button 
            className="btn-accion btn-comment"
            onClick={() => onComment && onComment(id)}
            title="Comentar"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Comentar</span>
          </button>
        </div>

        <button className="btn-compartir" title="Compartir">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <circle cx="18" cy="5" r="3" strokeWidth="2"/>
            <circle cx="6" cy="12" r="3" strokeWidth="2"/>
            <circle cx="18" cy="19" r="3" strokeWidth="2"/>
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" strokeWidth="2"/>
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" strokeWidth="2"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

CardForo.propTypes = {
  id: PropTypes.number.isRequired,
  titulo: PropTypes.string.isRequired,
  contenido: PropTypes.string.isRequired,
  usuario: PropTypes.shape({
    username: PropTypes.string,
    avatar: PropTypes.string,
    nivel: PropTypes.string,
    puntaje: PropTypes.number,
    fechaCreacion: PropTypes.string
  }),
  onUpvote: PropTypes.func,
  onDownvote: PropTypes.func,
  onComment: PropTypes.func
};

CardForo.defaultProps = {
  usuario: {
    username: 'Anónimo',
    avatar: null,
    nivel: 'Novato',
    puntaje: 0
  },
  onUpvote: () => {},
  onDownvote: () => {},
  onComment: () => {}
};