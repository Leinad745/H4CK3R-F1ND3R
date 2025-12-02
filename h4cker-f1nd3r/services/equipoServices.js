import { apiClient } from './api.js';

export const crearEquipo = async (equipo) => {
    const response = await apiClient.post('/equipos', equipo);
    return response.data;
};

export const obtenerEquipos = async () => {
    const response = await apiClient.get('/equipos');
    return response.data;
};

export const obtenerEquipoPorId = async (id) => {
    const response = await apiClient.get(`/equipos/${id}`);
    return response.data;
};

export const obtenerEquipoPorNombre = async (nombreEquipo) => {
    const response = await apiClient.get(`/equipos/nombre/${nombreEquipo}`);
    return response.data;
};

export const agregarMiembroAEquipo = async (idEquipo, data) => {
    const response = await apiClient.post(`/equipos/${idEquipo}/miembros`, data);
    return response.data;
};
