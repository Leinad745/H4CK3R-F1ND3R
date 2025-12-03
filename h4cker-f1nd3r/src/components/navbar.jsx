import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import logo_new from '../assets/logo_new.png'
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../styles/navbar.css';

export function NavBar() {
  const [hayUsuario, setHayUsuario] = useState(false);
  const location = useLocation();

  const verificarUsuario = () => {
    const usuarioGuardado = localStorage.getItem('usuario');
    
    if (usuarioGuardado) {
      try {
        const usuario = JSON.parse(usuarioGuardado);
        const tieneId = usuario && usuario.idUsuario;
        console.log('🔍 Verificando usuario:', tieneId);
        setHayUsuario(tieneId);
      } catch (error) {
        console.error('Error al leer usuario:', error);
        setHayUsuario(false);
      }
    } else {
      setHayUsuario(false);
    }
  };

  useEffect(() => {
    // Verificar al montar
    verificarUsuario();

    // Verificar en cada cambio de ruta
    verificarUsuario();
  }, [location]);

  useEffect(() => {
    // Escuchar eventos
    window.addEventListener('storage', verificarUsuario);
    window.addEventListener('login', verificarUsuario);
    window.addEventListener('usuarioRegistrado', verificarUsuario);
    
    return () => {
      window.removeEventListener('storage', verificarUsuario);
      window.removeEventListener('login', verificarUsuario);
      window.removeEventListener('usuarioRegistrado', verificarUsuario);
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        
        <Link className="navbar-brand" to="/">
          <img id="logo" src={logo_new} alt="Logo" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {hayUsuario && (
              <li className="nav-item">
                <Link to="/perfil"> 
                  <button className="cssbuttons-io">
                    <span>
                      Perfil
                    </span>
                  </button>
                </Link>
              </li>
            )}
            
            <li className="nav-item">
              <Link to="/foro">
                <button className="cssbuttons-io">
                  <span>
                    Foro
                  </span>
                </button>
              </Link>
            </li>
            
            <li className="nav-item">
              <Link to="/equipo">
                <button className="cssbuttons-io">
                  <span>
                    Equipo
                  </span>
                </button>
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/calendario">
                <button className="cssbuttons-io">
                  <span>
                    Calendario
                  </span>
                </button>
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/ranking"> 
                <button className="cssbuttons-io" >
                  <span>
                    Ranking
                  </span>
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}