import PropTypes from 'prop-types';

export const EquipoCard = ({ equipo, miembros, onSolicitar }) => {
  return (
    <div className="equipo-card">
      <div className="equipo-card-header">
        {equipo.logoEquipo ? (
          <img src={equipo.logoEquipo} alt={equipo.nombreEquipo} className="equipo-logo" />
        ) : (
          <div className="equipo-logo-placeholder">
            {equipo.nombreEquipo.substring(0, 2).toUpperCase()}
          </div>
        )}
      </div>
      
      <div className="equipo-card-body">
        <h3>{equipo.nombreEquipo}</h3>
        <p className="equipo-descripcion">
          {equipo.descripcion || 'Sin descripción'}
        </p>
        
        <div className="equipo-stats">
          <div className="stat">
            <span className="stat-label">Miembros</span>
            <span className="stat-value">
              {miembros?.length || 0}
            </span>
          </div>
        </div>

        {miembros && miembros.length > 0 && (
          <div className="miembros-preview">
            <h4>Miembros destacados:</h4>
            <div className="avatars-grupo">
              {miembros.slice(0, 5).map((miembro) => (
                <div 
                  key={miembro.idMiembroEquipo} 
                  className="avatar-mini"
                  title={miembro.usuario?.username || 'Usuario'}
                >
                  {miembro.usuario?.username?.substring(0, 2).toUpperCase() || '??'}
                </div>
              ))}
              {miembros.length > 5 && (
                <div className="avatar-mini avatar-mas">
                  +{miembros.length - 5}
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      <div className="equipo-card-footer">
        <button 
          className="btn-solicitar"
          onClick={() => onSolicitar(equipo)}
        >
            Solicitar Unirse
        </button>
      </div>
    </div>
  );
};

EquipoCard.propTypes = {
  equipo: PropTypes.shape({
    idEquipo: PropTypes.number.isRequired,
    nombreEquipo: PropTypes.string.isRequired,
    descripcion: PropTypes.string,
    logoEquipo: PropTypes.string
  }).isRequired,
  miembros: PropTypes.array,
  onSolicitar: PropTypes.func.isRequired
};

EquipoCard.defaultProps = {
  miembros: []
};