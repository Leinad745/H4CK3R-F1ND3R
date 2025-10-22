import "bootstrap/dist/css/bootstrap.min.css";
//import { useNavigate } from "react-router-dom";

export default function Perfil() {
    {/*const navigate = useNavigate();*/}
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
                  src="static/img/img_perfil.png"
                  alt="Admin"
                  className="rounded-circle"
                  width={150}
                />
                <div className="mt-3">
                  <h4>
                    <span id="nombre">John Doe</span>
                  </h4>
                  <p
                    className="sub_texto text-secondary mb-1"
                    id="nivelUsuario"
                  >
                    Full Stack Developer
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
                    className="feather feather-globe mr-2 icon-inline"
                  >
                    <circle cx={12} cy={12} r={10} />
                    <line x1={2} y1={12} x2={22} y2={12} />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                  Website
                </h6>
                <span className="text-secondary">https://www.ejemplo.com</span>
              </li>
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
                <span className="text-secondary">www.github.com/ejemplo</span>
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
                <span className="text-secondary">@Twitter</span>
              </li>
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
                    className="feather feather-instagram mr-2 icon-inline text-danger"
                  >
                    <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                  Instagram
                </h6>
                <span className="text-secondary">
                  www.instagram.com/ejemplo
                </span>
              </li>
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
                    className="feather feather-facebook mr-2 icon-inline text-primary"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                  Facebook
                </h6>
                <span className="text-secondary">www.facebook.com/ejemplo</span>
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
                  <span id="email" />
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
                  <span id="edad" />
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
                  <span id="ciudad" />
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-12">
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    data-bs-whatever="@mdo"
                  >
                    Editar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row gutters-sm">
          <div className="col-sm-6 mb-3">
            <div className="card h-100">
              <div className="card-body">
                <h6 className="d-flex align-items-center mb-3">
                  <i className="material-icons text-info mr-2">assignment</i>
                  Project Status
                </h6>
                <small>Web Design</small>
                <div className="progress mb-3" style={{ height: 5 }}>
                  <div
                    className="progress-bar bg-primary"
                    role="progressbar"
                    style={{ width: "80%" }}
                    aria-valuenow={80}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
                <small>Website Markup</small>
                <div className="progress mb-3" style={{ height: 5 }}>
                  <div
                    className="progress-bar bg-primary"
                    role="progressbar"
                    style={{ width: "72%" }}
                    aria-valuenow={72}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
                <small>One Page</small>
                <div className="progress mb-3" style={{ height: 5 }}>
                  <div
                    className="progress-bar bg-primary"
                    role="progressbar"
                    style={{ width: "89%" }}
                    aria-valuenow={89}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
                <small>Mobile Template</small>
                <div className="progress mb-3" style={{ height: 5 }}>
                  <div
                    className="progress-bar bg-primary"
                    role="progressbar"
                    style={{ width: "55%" }}
                    aria-valuenow={55}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
                <small>Backend API</small>
                <div className="progress mb-3" style={{ height: 5 }}>
                  <div
                    className="progress-bar bg-primary"
                    role="progressbar"
                    style={{ width: "66%" }}
                    aria-valuenow={66}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 mb-3">
            <div className="card h-100">
              <div className="card-body">
                <h6 className="d-flex align-items-center mb-3">
                  <i className="material-icons text-info mr-2">assignment</i>
                  Project Status
                </h6>
                <small>Web Design</small>
                <div className="progress mb-3" style={{ height: 5 }}>
                  <div
                    className="progress-bar bg-primary"
                    role="progressbar"
                    style={{ width: "80%" }}
                    aria-valuenow={80}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
                <small>Website Markup</small>
                <div className="progress mb-3" style={{ height: 5 }}>
                  <div
                    className="progress-bar bg-primary"
                    role="progressbar"
                    style={{ width: "72%" }}
                    aria-valuenow={72}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
                <small>One Page</small>
                <div className="progress mb-3" style={{ height: 5 }}>
                  <div
                    className="progress-bar bg-primary"
                    role="progressbar"
                    style={{ width: "89%" }}
                    aria-valuenow={89}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
                <small>Mobile Template</small>
                <div className="progress mb-3" style={{ height: 5 }}>
                  <div
                    className="progress-bar bg-primary"
                    role="progressbar"
                    style={{ width: "55%" }}
                    aria-valuenow={55}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
                <small>Backend API</small>
                <div className="progress mb-3" style={{ height: 5 }}>
                  <div
                    className="progress-bar bg-primary"
                    role="progressbar"
                    style={{ width: "66%" }}
                    aria-valuenow={66}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    className="modal fade"
    id="exampleModal"
    tabIndex={-1}
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5" id="exampleModalLabel">
            Modifica Perfil
          </h1>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div className="modal-body">
          {/* Formulario del modal */}
          <form id="formModal">
            <div className="mb-3">
              <label htmlFor="nombreModal" className="form-label">
                Nombre
              </label>
              <input
                type="text"
                className="text-muted form-control"
                id="nombreModalL"
                placeholder="Nombre"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="emailModal" className="form-label">
                Email:
              </label>
              <input
                type="email"
                className="text-muted form-control"
                id="emailModalL"
                placeholder="Email"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="ciudadModal" className="form-label">
                Ciudad
              </label>
              <input
                type="text"
                className="text-muted form-control"
                id="ciudadModalL"
                placeholder="Ciudad"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="edadModal" className="form-label">
                Edad
              </label>
              <input
                type="number"
                className="text-muted form-control"
                id="edadModalL"
                placeholder="Edad"
              />
            </div>
            <button
              type="button"
              className="btn btn-primary w-100"
              id="guardarPerfilBtn"
            >
              Guardar Perfil
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
  {/* Equipo */}
</main>

    )
}