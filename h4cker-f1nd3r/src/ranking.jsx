import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { obtenerTop10 } from "../services/userServices";

export default function Ranking() {
    const [hackers, setHackers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const cargarRanking = async () => {
            try {
                setLoading(true);
                setError(null);
                
                const top10 = await obtenerTop10();
                
                console.log("Top 10 usuarios:", top10);
                
                setHackers(top10);
            } catch (error) {
                console.error("Error al cargar ranking:", error);
                setError("No se pudo cargar el ranking. Intenta de nuevo más tarde.");
                
                if (error.response) {
                    console.error("Error del servidor:", error.response.data);
                } else if (error.request) {
                    setError("Sin conexión al servidor");
                }
            } finally {
                setLoading(false);
            }
        };

        cargarRanking();
    }, []);

    const verPerfil = (usuarioId) => {
        navigate(`/perfil/${usuarioId}`);
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4" style={{ color: 'aliceblue' }}>
                Ranking de Hackers
            </h1>
            
            {loading && (
                <div className="text-center">
                    <div className="spinner-border text-light" role="status">
                        <span className="visually-hidden">Cargando...</span>
                    </div>
                    <p className="text-light mt-2">Cargando ranking...</p>
                </div>
            )}

            {error && (
                <div className="alert alert-danger" role="alert">
                    {error}
                </div>
            )}

            {!loading && !error && (
                <div className="table-responsive">
                    <table className="table table-dark table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Posición</th>
                                <th scope="col">Usuario</th>
                                <th scope="col">Puntos</th>
                                <th scope="col">Nivel</th>
                            </tr>
                        </thead>
                        <tbody>
                            {hackers && hackers.length > 0 ? (
                                hackers.map((hacker, index) => (
                                    <tr 
                                        key={`hacker-${hacker.idUsuario}-${index}`}
                                        onClick={() => verPerfil(hacker.idUsuario)}
                                        style={{ cursor: 'pointer' }}
                                        className="table-row-hover"
                                    >
                                        <td>
                                            {index + 1}
                                            {index === 0 && " 🥇"}
                                            {index === 1 && " 🥈"}
                                            {index === 2 && " 🥉"}
                                        </td>
                                        <td>{hacker.username || "Usuario"}</td>
                                        <td>{(hacker.puntaje ?? 0).toLocaleString()}</td>
                                        <td>{hacker.titulo || "Sin título"}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="4" className="text-center">
                                        No hay usuarios en el ranking
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}