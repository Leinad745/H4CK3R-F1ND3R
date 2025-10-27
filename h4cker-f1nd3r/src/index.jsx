import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import img_index2 from "./assets/img_index2.png";
import teamwork from "./assets/teamwork.png";
import skills from "./assets/skills.png";
import ranking from "./assets/ranking.png";

export function Index() {
  const navigate = useNavigate();
  return (
    <div className="container-fluid px-4">
      <div className="row gy-4">
        <div className="col-12">
          <div className="text-center">
            <img
              className="img-fluid"
              id="img-index"
              src={img_index2}
              alt="Logo"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        </div>
        
        <div className="col-12">
          <h1 className="text-center text-white fs-1 px-3">
            BUSCA COMPAÑEROS PARA CTFs Y HACKATHONS SIN TEMOR!
          </h1>
        </div>

        <div className="col-12">
          <div className="d-flex flex-column flex-md-row justify-content-center gap-3 px-3">
            <button
              className="btn btn-success btn-lg"
              onClick={() => navigate('/register')}
            >
              Registrate!
            </button>
            <button
              className="btn btn-success btn-lg"
              onClick={() => navigate('/login')}
            >
              Iniciar Sesión
            </button>
          </div>
        </div>
      </div>

      <section className="mt-5 text-white">
        <div className="row gy-4 align-items-center mb-5">
          <div className="col-12 col-md-6 text-center">
            <div className="px-3">
              <h2 className="mb-3">Conéctate con otros Hackers</h2>
              <p className="lead">
                Busca compañeros para CTFs y Hackatones para lograr tus objetivos.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-6 text-center">
            <img
              src={teamwork}
              alt="Equipo hacker"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>

        <div className="row gy-4 align-items-center mb-5 flex-md-row-reverse">
          <div className="col-12 col-md-6 text-center">
            <div className="px-3">
              <h2 className="mb-3">Sin experiencia? No hay problema!</h2>
              <p className="lead">
                Nuestra prueba de habilidad te ayuda a encontrar compañeros con
                niveles similares al tuyo.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-6 text-center">
            <img
              src={skills}
              alt="Aprendizaje"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>

        <div className="row gy-4 align-items-center mb-5">
          <div className="col-12 col-md-6 text-center">
            <div className="px-3">
              <h2 className="mb-3">Compite en nuestro ranking!</h2>
              <p className="lead">
                Al participar en eventos y desafíos y registrarlos en nuestro
                sistema, podrás escalar posiciones en nuestro ranking y demostrar
                tus habilidades!
              </p>
            </div>
          </div>
          <div className="col-12 col-md-6 text-center">
            <img
              src={ranking}
              alt="Ranking"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
