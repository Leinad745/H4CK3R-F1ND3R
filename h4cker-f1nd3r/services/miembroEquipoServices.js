import { apiClient } from "./api";

export const crearMiembro = async (miembro) => {
    const response = await apiClient.post('/miembros', miembro);
    return response.data;
};

export const obtenerMiembros = async () => {
    const response = await apiClient.get('/miembros');
    return response.data;
};

export const obtenerMiembroPorId = async (id) => {
    const response = await apiClient.get(`/miembros/${id}`);
    return response.data;
};

export const obtenerMiembrosPorEquipo = async (idEquipo) => {
    const response = await apiClient.get(`/miembros/equipo/${idEquipo}`);
    return response.data;
};

export const obtenerEquiposPorUsuario = async (idUsuario) => {
    const response = await apiClient.get(`/miembros/usuario/${idUsuario}`);
    return response.data;
};

export const eliminarMiembro = async (id) => {
    const response = await apiClient.delete(`/miembros/${id}`);
    return response.data;
};