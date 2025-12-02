import { apiClient } from "./api";

export const registrarUsuario = async (usuario) => {
    const response = await apiClient.post('/usuarios/register', usuario);
    return response.data;
};

export const loginUsuario = async (credentials) => {
    const response = await apiClient.post('/usuarios/login', credentials);
    return response.data;
};

export const obtenerUsuarioPorId = async (id) => {
    const response = await apiClient.get(`/usuarios/${id}`);
    return response.data;
};

export const obtenerUsuarioPorUsername = async (username) => {
    const response = await apiClient.get(`/usuarios/username/${username}`);
    return response.data;
};

export const obtenerTop10 = async () => {
    const response = await apiClient.get('/usuarios/top10');
    return response.data;
};
