import { apiClient } from "./api";


export const registrarUsuario = async (usuario) => {
    const response = await apiClient.post('/usuarios/register', usuario);
    return response.data;
};

export const loginUsuario = async (credentials) => {
    const response = await apiClient.post('/usuarios/login', credentials);
    return response.data;
};

// Obtener usuario por ID
export const obtenerUsuarioPorId = async (id) => {
    const response = await apiClient.get(`/usuarios/${id}`);
    return response.data;
};

// Obtener usuario por username
export const obtenerUsuarioPorUsername = async (username) => {
    const response = await apiClient.get(`/usuarios/username/${username}`);
    return response.data;
};

// Obtener top 10 usuarios
export const obtenerTop10 = async () => {
    const response = await apiClient.get('/usuarios/top10');
    return response.data;
};

// ========== ENDPOINTS DE PUBLICACIONES ==========

// Crear publicación
export const crearPublicacion = async (publicacion) => {
    const response = await apiClient.post('/publicaciones', publicacion);
    return response.data;
};

// Obtener todas las publicaciones
export const obtenerPublicaciones = async () => {
    const response = await apiClient.get('/publicaciones');
    return response.data;
};

// Obtener publicación por ID
export const obtenerPublicacionPorId = async (id) => {
    const response = await apiClient.get(`/publicaciones/${id}`);
    return response.data;
};

// ========== ENDPOINTS DE EQUIPOS ==========

// Crear equipo
export const crearEquipo = async (equipo) => {
    const response = await apiClient.post('/equipos', equipo);
    return response.data;
};

// Obtener todos los equipos
export const obtenerEquipos = async () => {
    const response = await apiClient.get('/equipos');
    return response.data;
};

// Obtener equipo por ID
export const obtenerEquipoPorId = async (id) => {
    const response = await apiClient.get(`/equipos/${id}`);
    return response.data;
};

// Obtener equipo por nombre
export const obtenerEquipoPorNombre = async (nombreEquipo) => {
    const response = await apiClient.get(`/equipos/nombre/${nombreEquipo}`);
    return response.data;
};

// Agregar miembro a equipo
export const agregarMiembroAEquipo = async (idEquipo, data) => {
    const response = await apiClient.post(`/equipos/${idEquipo}/miembros`, data);
    return response.data;
};

// ========== ENDPOINTS DE MIEMBROS ==========

// Crear miembro de equipo
export const crearMiembro = async (miembro) => {
    const response = await apiClient.post('/miembros', miembro);
    return response.data;
};

// Obtener todos los miembros
export const obtenerMiembros = async () => {
    const response = await apiClient.get('/miembros');
    return response.data;
};

// Obtener miembro por ID
export const obtenerMiembroPorId = async (id) => {
    const response = await apiClient.get(`/miembros/${id}`);
    return response.data;
};

// Obtener miembros de un equipo
export const obtenerMiembrosPorEquipo = async (idEquipo) => {
    const response = await apiClient.get(`/miembros/equipo/${idEquipo}`);
    return response.data;
};

// Obtener equipos de un usuario
export const obtenerEquiposPorUsuario = async (idUsuario) => {
    const response = await apiClient.get(`/miembros/usuario/${idUsuario}`);
    return response.data;
};

// Eliminar miembro
export const eliminarMiembro = async (id) => {
    const response = await apiClient.delete(`/miembros/${id}`);
    return response.data;
};

// ========== MANEJO DE ERRORES ==========

// Interceptor para manejar errores globalmente
apiClient.interceptors.response.use(
    response => response,
    error => {
        if (error.response) {
            // El servidor respondió con un código de error
            console.error('Error de respuesta:', error.response.data);
            console.error('Status:', error.response.status);
        } else if (error.request) {
            // La petición se hizo pero no hubo respuesta
            console.error('Error de red:', error.request);
        } else {
            // Algo pasó al configurar la petición
            console.error('Error:', error.message);
        }
        return Promise.reject(error);
    }
);

export default apiClient;
