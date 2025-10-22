import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import img_index2 from "./assets/img_index2.png";
import teamwork from "./assets/teamwork.png";
import skills from "./assets/skills.png";
import ranking from "./assets/ranking.png";

export function Index() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="row g-3 align-items-center">
        <div className="d-flex justify-content-center">
          <img
            className="d-flex justify-content-center"
            id="img-index"
            src={img_index2}
            alt="Logo"
            width="auto"
            height="auto"
          />
        </div>
        <div>
          <p
            id="texto-descripcion"
            className="d-flex justify-content-center fs-1"
            style={{ color: "whitesmoke" }}
          >
            BUSCA COMPAÑEROS PARA CTFs Y HACKATHONS SIN TEMOR!
          </p>
        </div>
        <div className="d-flex justify-content-center gap-3">
          <button
            id="botones"
            type="button"
            className="btn btn-success"
            style={{
              width: 300,
              height: 80,
              marginTop: "1%",
              fontSize: "1rem",
            }}
            onClick={() => navigate('/register')}
          >
            Registrate!
          </button>
          <button
            id="botones"
            type="button"
            className="btn btn-success"
            style={{
              width: 300,
              height: 80,
              marginTop: "1%",
              fontSize: "1rem",
            }}
            onClick={() => navigate('/login')}
          >
            Iniciar Sesión
          </button>
        </div>
      </div>
      <section className="mt-5 text-white">
        <div className="row align-items-center mb-5">
          <div className="col-md-6 text-center">
            <div className="mb-3">
            <h2>Conéctate con otros Hackers</h2>
            </div>
            <p>
              Busca compañeros para CTFs y Hackatones para lograr tus objetivos.
            </p>
          </div>
          <div className="col-md-6 text-center">
            <img
              src={teamwork}
              alt="Equipo hacker"
              className="img-fluid rounded"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        </div>
        <div className="row align-items-center mb-5 flex-md-row-reverse">
          <div className="col-md-6 text-center">
            <h2>Sin experiencia? No hay problema!</h2>
            <p>
              Nuestra prueba de habilidad de te ayuda a encontrar compañeros con
              niveles similares al tuyo.
            </p>
          </div>
          <div className="col-md-6 text-center">
            <img
              src={skills}
              alt="Aprendizaje"
              className="img-fluid rounded"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        </div>
        <div className="row align-items-center mb-5">
          <div className="col-md-6 text-center">
            <h2>Compite en nuestro ranking!</h2>
            <p>
              Al participar en eventos y desafios y registrarlos en nuestro
              sistema, podrás escalar posiciones en nuestro ranking y demostrar
              tus habilidades!
            </p>
          </div>
          <div className="col-md-6 text-center">
            <img
              src={ranking}
              alt="Ranking"
              className="img-fluid rounded"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
