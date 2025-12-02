import "bootstrap/dist/css/bootstrap.min.css";

import { useState } from "react";
import teamLogo from "./assets/logo_team.png";
import './styles/equipo.css';

export default function GestorEquipo() {
    const [equipoData, setEquipoData] = useState({
        nombre: "H4ck3r Team",
        descripcion: "Equipo especializado en CTFs y competencias de ciberseguridad",
        nivelEquipo: "Intermedio",
        miembros: [
            {
                id: 1,
                nombre: "John Doe",
                rol: "Líder",
                especialidad: "Web Exploitation"
            },
            {
                id: 2,
                nombre: "Jane Smith",
                rol: "Miembro",
                especialidad: "Reverse Engineering"
            }
        ]
    });

    const [mostrarModal, setMostrarModal] = useState(false);
    const [nuevoMiembro, setNuevoMiembro] = useState({
        nombre: "",
        rol: "",
        especialidad: ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNuevoMiembro(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const agregarMiembro = (e) => {
        e.preventDefault();
        if (!nuevoMiembro.nombre || !nuevoMiembro.rol || !nuevoMiembro.especialidad) {
            alert("Por favor completa todos los campos");
            return;
        }

        setEquipoData(prev => ({
            ...prev,
            miembros: [...prev.miembros, {
                id: prev.miembros.length + 1,
                ...nuevoMiembro
            }]
        }));

        setNuevoMiembro({
            nombre: "",
            rol: "",
            especialidad: ""
        });
        setMostrarModal(false);
    };

    const eliminarMiembro = (id) => {
        setEquipoData(prev => ({
            ...prev,
            miembros: prev.miembros.filter(miembro => miembro.id !== id)
        }));
    };

    return (
        <main>
            <div className="container">
                <div className="main-body">
                    <div className="row gutters-sm">
                        {/* Información del Equipo */}
                        <div className="col-md-4 mb-3">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex flex-column align-items-center text-center">
                                        <img
                                            src={teamLogo}
                                            alt="Team Logo"
                                            className="rounded-circle"
                                            width={150}
                                        />
                                        <div className="mt-3">
                                            <h4>{equipoData.nombre}</h4>
                                            <p className="text-secondary mb-1">
                                                {equipoData.nivelEquipo}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Descripción y Miembros */}
                        <div className="col-md-8">
                            <div className="card mb-3">
                                <div className="card-body">
                                    <h5>Descripción del Equipo</h5>
                                    <p>{equipoData.descripcion}</p>
                                    <hr />

                                    <h5>Miembros del Equipo</h5>
                                    <div className="table-responsive">
                                        <table className="table table-dark table-hover custom-table">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Nombre</th>
                                                    <th scope="col">Rol</th>
                                                    <th scope="col">Especialidad</th>
                                                    <th scope="col">Acciones</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {equipoData.miembros.map(miembro => (
                                                    <tr key={miembro.id}>
                                                        <td data-label="Nombre">
                                                            <div className="d-flex align-items-center">
                                                                <div className="avatar-circle">
                                                                    {miembro.nombre.charAt(0)}
                                                                </div>
                                                                <span className="ms-2">{miembro.nombre}</span>
                                                            </div>
                                                        </td>
                                                        <td data-label="Rol">
                                                            <span className={`badge ${
                                                                miembro.rol === "Líder" ? "bg-danger" : "bg-info"
                                                            }`}>
                                                                {miembro.rol}
                                                            </span>
                                                        </td>
                                                        <td data-label="Especialidad">
                                                            <span className="specialty-tag">
                                                                {miembro.especialidad}
                                                            </span>
                                                        </td>
                                                        <td data-label="Acciones">
                                                            <button
                                                                className="btn btn-outline-danger btn-sm"
                                                                onClick={() => eliminarMiembro(miembro.id)}
                                                            >
                                                                <i className="fas fa-trash-alt"></i>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>

                                    <button
                                        className="btn btn-primary mt-3"
                                        onClick={() => setMostrarModal(true)}
                                    >
                                        Agregar Miembro
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal para agregar miembro */}
            {mostrarModal && (
                <div className="modal-overlay" onClick={() => setMostrarModal(false)}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <h2>Agregar Nuevo Miembro</h2>
                        <form onSubmit={agregarMiembro}>
                            <div className="mb-3">
                                <label className="form-label">Nombre</label>
                                <input
                                    type="text"
                                    name="nombre"
                                    className="form-control"
                                    value={nuevoMiembro.nombre}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Rol</label>
                                <input
                                    type="text"
                                    name="rol"
                                    className="form-control"
                                    value={nuevoMiembro.rol}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Especialidad</label>
                                <input
                                    type="text"
                                    name="especialidad"
                                    className="form-control"
                                    value={nuevoMiembro.especialidad}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="d-flex gap-2">
                                <button type="submit" className="btn btn-success">
                                    Guardar
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    onClick={() => setMostrarModal(false)}
                                >
                                    Cancelar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </main>
    );
}