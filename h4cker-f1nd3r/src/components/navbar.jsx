import 'bootstrap/dist/css/bootstrap.min.css';
import logo_new from '../assets/logo_new.png'

export function NavBar() {
  return (

    <nav className="navbar navbar-expand-lg">
            {/*CAMBIA EL LOGO POR OTRO EN MEDIO CON UN DEGRADADO*/}
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img id="logo" src={logo_new} alt="Logo" />
        </a>
      </div>
    </nav>
);
}