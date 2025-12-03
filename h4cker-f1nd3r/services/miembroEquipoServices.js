import { apiClient } from './api.js';

//Obtener todos los miembros de equipos
export const obtenerMiembros = async () => {
    try {
        const response = await apiClient.get('/miembros');
        return response.data;
    } catch (error) {
        console.error('Error al obtener miembros:', error);
        throw error;
    }
};

//Obtener un miembro por ID
export const obtenerMiembroPorId = async (id) => {
    try {
        const response = await apiClient.get(`/miembros/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error al obtener miembro:', error);
        throw error;
    }
};


 //Agregar un nuevo miembro
export const agregarMiembro = async (miembro) => {
    try {
        const response = await apiClient.post('/miembros', miembro);
        return response.data;
    } catch (error) {
        console.error('Error al agregar miembro:', error);
        throw error;
    }
};


 //Obtener todos los miembros de un equipo específico
export const obtenerMiembrosPorEquipo = async (idEquipo) => {
    try {
        const response = await apiClient.get(`/miembros/equipo/${idEquipo}`);
        return response.data;
    } catch (error) {
        console.error('Error al obtener miembros del equipo:', error);
        throw error;
    }
};

//Obtener todos los equipos de un usuario específico
export const obtenerEquiposPorUsuario = async (idUsuario) => {
    try {
        const response = await apiClient.get(`/miembros/usuario/${idUsuario}`);
        return response.data;
    } catch (error) {
        console.error('Error al obtener equipos del usuario:', error);
        throw error;
    }
};