import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react"; // Importa useState
import "./styles/preprueba.css";
import novato from "./assets/novato.png";
import script_kiddie from "./assets/script_kiddie.png";
import red_teamer from "./assets/red_teamer.png";
import flag_hunter from "./assets/flag_hunter.png";
import { useNavigate } from "react-router-dom";
import { actualizarTitulo } from "../services/userServices";

const respuestasCorrectas = {
  q1: "rce", q2: "five", q3: "hydra", q4: "all", q5: "mm",
  q6: "fw", q7: "bsd", q8: "sudo", q9: "aws", q10: "todos"
};

export default function Preprueba() {
  const [respuestasUsuario, setRespuestasUsuario] = useState({
    q1: "", q2: "", q3: "", q4: "", q5: "",
    q6: "", q7: "", q8: "", q9: "", q10: ""
  });

  const [resultado, setResultado] = useState(null);
  const [loading, setLoading] = useState(false);
  const [mostrarResultado, setMostrarResultado] = useState(false);
  const navigate = useNavigate();

  const handleRespuestaChange = (e) => {
    const { id, value } = e.target;
    setRespuestasUsuario(prevRespuestas => ({
      ...prevRespuestas,
      [id]: value
    }));
  };

  // Función que se ejecuta al enviar el formulario
  const submitQuiz = async (e) => {
    e.preventDefault();

    // Validar que todas estén respondidas
    for (let i = 1; i <= 10; i++) {
      if (respuestasUsuario[`q${i}`] === "") {
        alert(`Por favor responde la pregunta ${i}`);
        return;
      }
    }

    let contadorCorrectas = 0;
    for (let i = 1; i <= 10; i++) {
      const idPregunta = `q${i}`;
      if (respuestasUsuario[idPregunta] === respuestasCorrectas[idPregunta]) {
        contadorCorrectas++;
      }
    }

    // Determinar nivel
    let nivel = "";
    let mensaje = "";
    let imagen = "";

    if (contadorCorrectas <= 2) {
      nivel = "pr1nc1p14nt3";
      mensaje = "Tu nivel es Pr1nc1p14nt3. No te desanimes, la práctica hace al maestro. Sigue aprendiendo y mejorando tus habilidades en ciberseguridad."
      imagen = novato;
    } else if (contadorCorrectas <= 5) {
      nivel = "Scr1pt-K1dd13";
      mensaje = "Tu nivel es Scr1pt-K1dd13. Tienes un buen conocimiento básico, pero aún hay mucho por aprender.";
      imagen = script_kiddie;
    } else if (contadorCorrectas <= 8) {
      nivel = "R3d-T34m3r";
      mensaje = "Tu nivel es R3d-T34m3r. Estás en el camino correcto para convertirte en un experto en ciberseguridad. Sigue así.";
      imagen = red_teamer;
    } else {
      nivel = "Fl4g-Hunt3r";
      mensaje = "¡Felicidades! Tu nivel es Fl4g-Hunt3r. Eres un experto en ciberseguridad.";
      imagen = flag_hunter;
    }
    try {
     const usuarioStr = localStorage.getItem('usuario');
      if (!usuarioStr) {
        alert("No hay sesión activa. Por favor inicia sesión.");
        navigate('/login');
        return;
      }

      const usuario = JSON.parse(usuarioStr);

      // Actualizar título en el backend
      const usuarioActualizado = await actualizarTitulo(usuario.idUsuario, nivel);
      
      console.log("Usuario actualizado desde backend:", usuarioActualizado);

      // Actualizar localStorage con los datos del backend
      localStorage.setItem('usuario', JSON.stringify(usuarioActualizado));

      setResultado({ nivel, mensaje, imagen });
      setMostrarResultado(true);
    } catch (error) {
      console.error("Error al actualizar el título:", error);
      
      if (error.response) {
        if (error.response.status === 404) {
          alert("Usuario no encontrado en el servidor");
        } else {
          alert("Error al actualizar el título: " + (error.response.data.message || error.response.data));
        }
      } else if (error.request) {
        alert("Sin conexión al servidor. El título no se ha guardado.");
      } else {
        alert("Error inesperado: " + error.message);
      }
      
      // Aún mostrar el resultado aunque falle la actualización
      setResultado({ nivel, mensaje, imagen });
      setMostrarResultado(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <main className="container-fluid">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10 col-12">
              <h1 style={{ color: "aliceblue", marginTop: "5%", textAlign: "center" }}>
                PRUEBA DE HABILIDAD
              </h1>
              <form id="quiz-form" onSubmit={submitQuiz}>
                <div className="mb-3">
                  <label htmlFor="q1" className="form-label" style={{ color: "aliceblue" }}>
                    1. ¿Como se le llama a la tecnica de encontrar directorios
                    ocultos en una url?
                  </label>
                  <select className="form-select" id="q1" required
                    value={respuestasUsuario.q1} // El valor lo da el estado
                    onChange={handleRespuestaChange} // La función que actualiza el estado
                  >
                    <option value="" disabled>Selecciona una opción</option>
                    <option value="lfi">LFI</option>
                    <option value="xss">XSS</option>
                    <option value="fuzz">Fuzzing</option>
                    <option value="rce">RCE</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="q2" className="form-label" style={{ color: "aliceblue" }}>
                    2. ¿Cuantas capas del modelo OSI hay?
                  </label>
                  <select className="form-select" id="q2" required
                    value={respuestasUsuario.q2}
                    onChange={handleRespuestaChange}
                  >
                    <option value="" disabled>Selecciona una opción</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="q3" className="form-label" style={{ color: "aliceblue"}}>
                    3. ¿Cual de las siguientes herramientas puede ser usada para hacer ataques de fuerza bruta?
                  </label>
                  <select className="form-select" id="q3" required
                    value={respuestasUsuario.q3}
                    onChange={handleRespuestaChange}>
                    <option value="" disabled>Selecciona una opción</option>
                    <option value="unknown">No sé</option>
                    <option value="hydra">Hydra</option>
                    <option value="crackmapexec">crackmapexec</option>
                    <option value="linux">Linux</option>
                    <option value="ghidra">ghidra</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="q4" className="form-label" style={{ color: "aliceblue" }}>
                    4. Cual de las siguientes distribuciones puede ser utilizada
                    para pruebas de penetración?
                  </label>
                  <select className="form-select" id="q4" required
                    value={respuestasUsuario.q4}
                    onChange={handleRespuestaChange}
                  >
                    <option value="" disabled>
                      Selecciona una opción
                    </option>
                    <option value="unknown">No sé</option>
                    <option value="Ubuntu">Ubuntu</option>
                    <option value="Mint">Linux Mint</option>
                    <option value="Kali">Kali Linux</option>
                    <option value="all">Todas pueden ser usadas</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="q5" className="form-label" style={{ color: "aliceblue" }}>
                    5. Cual de los siguientes escenario describe un ataque MITM?
                  </label>
                   <select className="form-select" id="q5" required
                   value={respuestasUsuario.q5}
                   onChange={handleRespuestaChange}>
                    <option value="" disabled>
                      Selecciona una opción
                    </option>
                    <option value="mm">
                      Un atacante se interpone en la comunicación entre dos
                      partes
                    </option>
                    <option value="bf">
                      Un atacante hace prueba y error de contraseñas hasta dar
                      con la correcta
                    </option>
                    <option value="ph">
                      Un atacante envia un email malicioso
                    </option>
                    <option value="ddos">
                      Un atacante utiliza una botnet para inundar el trafico de
                      una organizacion
                    </option>
                    <option value="all">
                      Todas las respuestas anteriores son correctas
                    </option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="q6" className="form-label" style={{ color: "aliceblue" }}>
                    6. Cual es el nombre de un dispositivo que sirve como la
                    barrera de seguridad de una red?
                  </label>
                   <select className="form-select" id="q6" required
                   value={respuestasUsuario.q6}
                   onChange={handleRespuestaChange}>
                    <option value="" disabled>
                      Selecciona una opción
                    </option>
                    <option value="ro">Router</option>
                    <option value="fw">Cortafuegos</option>
                    <option value="br">Puente</option>
                    <option value="re">Repetidor</option>
                    <option value="serv">Servidor</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="q7" className="form-label" style={{ color: "aliceblue" }}>
                    7. Cual de los siguientes
                    <strong>NO</strong> es un distribucion de Linux?
                  </label>
                   <select className="form-select" id="q7" required
                   value={respuestasUsuario.q7}
                   onChange={handleRespuestaChange}>
                    <option value="" disabled>
                      Selecciona una opción
                    </option>
                    <option value="unknown">No sé</option>
                    <option value="bsd">FreeBSD</option>
                    <option value="ba">BlackArch</option>
                    <option value="fe">Fedora</option>
                    <option value="at">Antix</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="q8" className="form-label" style={{ color: "aliceblue" }}>
                    8. Que comando es utilizado para ejecutar tareas con privilegios de superusuario en sistemas basados en Unix?
                  </label>
                  <select className="form-select" id="q8" required
                    value={respuestasUsuario.q8}
                    onChange={handleRespuestaChange}
                  >
                    <option value="" disabled>Selecciona una opción</option>
                    <option value="unknown">No sé</option>
                    <option value="pwd">pwd</option>
                    <option value="sudo">sudo</option>
                    <option value="systemctl">systemctl</option>
                    <option value="dir">dir</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="q9" className="form-label" style={{ color: "aliceblue" }}>
                     9. Cual es el distribuidor de nube mas utilizado del mundo?
                  </label>
                  <select className="form-select" id="q9" required
                    value={respuestasUsuario.q9}
                    onChange={handleRespuestaChange}
                  >
                    <option value="" disabled>Selecciona una opción</option>
                    <option value="unknown">no sé</option>
                    <option value="gcp">gcp</option>
                    <option value="azu">azure</option>
                    <option value="cloudflare">cloudflare</option>
                    <option value="aws">aws</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="q10" className="form-label" style={{ color: "aliceblue" }}>
                    10. Que lenguaje de programacion se utiliza para el
                    desarrollo web?
                  </label>
                  <select className="form-select" id="q10" required
                    value={respuestasUsuario.q10}
                    onChange={handleRespuestaChange}
                  >
                    <option value="" disabled>Selecciona una opción</option>
                    <option value="unknown">No sé</option>
                    <option value="python">python</option>
                    <option value="javascript">javascript</option>
                    <option value="java">java</option>
                    <option value="todos">Todos pueden ser usados</option>
                  </select>
                </div>

                <button
                  id="botones"
                  type="submit"
                  className="btn btn-success d-block mx-auto"
                  style={{ marginTop: "1%", width: 200 }}
                >
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </div>

        {mostrarResultado && (
          <div id="overlay">
            <h1>Tu nivel es: {resultado.nivel}</h1>
            <p>{resultado.mensaje}</p>
            <img src={resultado.imagen} alt={resultado.nivel} />
            <button onClick={() => navigate('/perfil')} className="btn btn-light">Ir a mi Perfil</button>
          </div>
        )}
      </main>
    </div>
  );
}