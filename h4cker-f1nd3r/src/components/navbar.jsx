import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/logo.png'

export function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="Logo" width={80} height={70} />
        </a>
      </div>
    </nav>
  );
}
