import { apiClient } from "./api";

/**
 * Crear una nueva publicación
 * @param {Object} publicacion - Objeto con titulo, contenido y usuario
 * @param {string} publicacion.titulo - Título de la publicación
 * @param {string} publicacion.contenido - Contenido de la publicación
 * @param {Object} publicacion.usuario - Objeto del usuario
 * @param {number} publicacion.usuario.idUsuario - ID del usuario que crea la publicación
 * @returns {Promise} - Promesa con los datos de la publicación creada
 */
export const crearPublicacion = async (publicacion) => {
    try {
        const response = await apiClient.post('/publicaciones', publicacion);
        return response.data;
    } catch (error) {
        console.error('Error al crear publicación:', error);
        throw error;
    }
};

/**
 * Obtener todas las publicaciones
 * @returns {Promise<Array>} - Promesa con el array de publicaciones
 */
export const obtenerPublicaciones = async () => {
    try {
        const response = await apiClient.get('/publicaciones');
        return response.data;
    } catch (error) {
        console.error('Error al obtener publicaciones:', error);
        throw error;
    }
};

/**
 * Obtener una publicación por ID
 * @param {number} id - ID de la publicación
 * @returns {Promise<Object>} - Promesa con los datos de la publicación
 */
export const obtenerPublicacionPorId = async (id) => {
    try {
        const response = await apiClient.get(`/publicaciones/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error al obtener publicación:', error);
        throw error;
    }
};

/**
 * Actualizar una publicación existente
 * @param {number} id - ID de la publicación a actualizar
 * @param {Object} publicacion - Datos actualizados de la publicación
 * @returns {Promise<Object>} - Promesa con los datos actualizados
 */
export const actualizarPublicacion = async (id, publicacion) => {
    try {
        const response = await apiClient.put(`/publicaciones/${id}`, publicacion);
        return response.data;
    } catch (error) {
        console.error('Error al actualizar publicación:', error);
        throw error;
    }
};

/**
 * Eliminar una publicación
 * @param {number} id - ID de la publicación a eliminar
 * @returns {Promise} - Promesa vacía
 */
export const eliminarPublicacion = async (id) => {
    try {
        const response = await apiClient.delete(`/publicaciones/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error al eliminar publicación:', error);
        throw error;
    }
};