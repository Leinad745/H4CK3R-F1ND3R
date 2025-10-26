import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

export default function RecuperarContraseña() {
    
    const [correo, setCorreo] = useState("");

    const envio = () => {
        if (correo.trim() === "") {
            alert("Ingresa un correo valido");
            return
        }
        alert(`Se ha enviado una url al correo ${correo}`)
    }

    return (
        
    <main>
      <h1 id="titulo" style={{ color: "aliceblue", marginTop: "5%" }}>
        Ingresa tu correo, enviaremos un link para resetear tu contraseña
      </h1>

      <div className="contenedor container row">
        <div className="row g-3 align-items-center">
          <div className="row align-items-center">
            <label
              htmlFor="correoElectronicoLogin"
              style={{ color: "aliceblue" }}
              className="form-label textForm"
            >
              Correo electrónico
            </label>
            <input
              type="text"
              id="correoElectronicoLogin"
              className="form-control"
              placeholder="Ingresa el correo cuya contraseña has olvidado"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
            />
          </div>
        </div>

        <div className="row g-3 align-items-center">
          <button
            id="botones"
            type="button"
            className="btn btn-success mx-auto d-block"
            style={{ marginTop: "1%" }}
            onClick={envio}
          >
            Enviar
          </button>
          <span id="mensajeLogin"></span>
        </div>
      </div>
    </main>
  
    )
}