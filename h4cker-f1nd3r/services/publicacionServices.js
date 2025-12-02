import { apiClient } from "./api";

export const crearPublicacion = async (publicacion) => {
    const response = await apiClient.post('/publicaciones', publicacion);
    return response.data;
};

export const obtenerPublicaciones = async () => {
    const response = await apiClient.get('/publicaciones');
    return response.data;
};

export const obtenerPublicacionPorId = async (id) => {
    const response = await apiClient.get(`/publicaciones/${id}`);
    return response.data;
};