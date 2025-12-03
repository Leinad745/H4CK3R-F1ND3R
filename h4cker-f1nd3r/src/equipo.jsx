import { useState, useEffect } from 'react';
import { EquipoCard } from './components/equipoCard';
import { obtenerEquipos } from '../services/equipoServices';
import { obtenerMiembrosPorEquipo } from '../services/miembroEquipoServices';
import './styles/equipo.css';

const Equipo = () => {
  const [equipos, setEquipos] = useState([]);
  const [equiposFiltrados, setEquiposFiltrados] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [busqueda, setBusqueda] = useState('');
  const [miembros, setMiembros] = useState({});

  useEffect(() => {
    cargarEquipos();
  }, []);

  useEffect(() => {
    if (busqueda.trim() === '') {
      setEquiposFiltrados(equipos);
    } else {
      const filtrados = equipos.filter(equipo =>
        equipo.nombreEquipo.toLowerCase().includes(busqueda.toLowerCase()) ||
        equipo.descripcion?.toLowerCase().includes(busqueda.toLowerCase())
      );
      setEquiposFiltrados(filtrados);
    }
  }, [busqueda, equipos]);

  const cargarEquipos = async () => {
    try {
      setLoading(true);
      const data = await obtenerEquipos();
      console.log('📦 Equipos del backend:', data);
      setEquipos(data);
      setEquiposFiltrados(data);
      
      for (const equipo of data) {
        cargarMiembrosEquipo(equipo.idEquipo);
      }
      
      setError(null);
    } catch (err) {
      setError('Error al cargar los equipos');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  const cargarMiembrosEquipo = async (idEquipo) => {
    try {
      const miembrosData = await obtenerMiembrosPorEquipo(idEquipo);
      setMiembros(prev => ({
        ...prev,
        [idEquipo]: miembrosData
      }));
    } catch (err) {
      console.error(`Error al cargar miembros del equipo ${idEquipo}:`, err);
    }
  };

  const handleSolicitarUnirse = (equipo) => {
    alert(`Solicitud enviada al equipo: ${equipo.nombreEquipo}\n\nEsta funcionalidad se completará en el perfil del usuario.`);
  };

  if (loading) {
    return (
      <div className="equipo-container">
        <div className="text-center py-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Cargando...</span>
          </div>
          <p className="mt-3">Cargando equipos...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="equipo-container">
        <div className="alert alert-danger" role="alert">
          {error}
          <button 
            className="btn btn-primary ms-3" 
            onClick={cargarEquipos}
          >
            Reintentar
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="equipo-container">
      <div className="equipo-header">
        <h1>Explorar Equipos CTF</h1>
        <p>Encuentra y únete a equipos de hacking ético</p>
        
        <div className="buscador-container">
          <input
            type="text"
            className="buscador-input"
            placeholder="Buscar equipos por nombre o descripción..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
        </div>
      </div>

      <div className="equipos-stats">
        <p>Se encontraron {equiposFiltrados.length} equipo(s)</p>
      </div>

      <div className="equipos-grid">
        {equiposFiltrados.length > 0 ? (
          equiposFiltrados.map((equipo) => (
            <EquipoCard
              key={equipo.idEquipo}
              equipo={equipo}
              miembros={miembros[equipo.idEquipo]}
              onSolicitar={handleSolicitarUnirse}
            />
          ))
        ) : (
          <div className="no-resultados">
            <p className="text-muted">No se encontraron equipos con "{busqueda}"</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Equipo;