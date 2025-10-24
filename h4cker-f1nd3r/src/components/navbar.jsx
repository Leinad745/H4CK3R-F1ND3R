import 'bootstrap/dist/css/bootstrap.min.css';
import logo_new from '../assets/logo_new.png'
import { Link } from 'react-router-dom';

export function NavBar() {
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
            
            <li className="nav-item">
              <Link to="/perfil"> 
                <button className="cssbuttons-io">
                  <span>
                    Perfil
                  </span>
                </button>
              </Link>
            </li>
            
            <li className="nav-item">
              <Link to="/equipos">
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

          </ul>
        </div>
      </div>
    </nav>
  );
}