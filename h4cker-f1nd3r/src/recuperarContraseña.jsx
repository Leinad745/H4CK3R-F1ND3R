import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

import { useNavigate, Link } from "react-router-dom";

export default function RecuperarContraseña() {
    const [correo, setCorreo] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!correo) {
            alert("Por favor ingresa tu correo electrónico");
            return;
        }

        if (!correo.includes("@") || !correo.includes(".")) {
            alert("Por favor ingresa un correo electrónico válido");
            return;
        }

        
        alert("Si el correo existe, recibirás instrucciones para recuperar tu contraseña");
        navigate("/login");
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="text-center mb-4">Recuperar Contraseña</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">
                                        Correo Electrónico
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        value={correo}
                                        onChange={(e) => setCorreo(e.target.value)}
                                        placeholder="Ingresa tu correo electrónico"
                                        required
                                    />
                                </div>
                                <div className="d-grid gap-2">
                                    <button type="submit" className="btn btn-primary">
                                        Enviar instrucciones
                                    </button>
                                    <Link to="/login" className="btn btn-link">
                                        Volver al inicio de sesión
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}