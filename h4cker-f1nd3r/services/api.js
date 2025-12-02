/*
REVISAR LUEGO Y CORREGIR RUTAS SI ES NECESARIO
Este archivo contiene las funciones para interactuar con la API backend.
Cada función corresponde a un endpoint específico y maneja las solicitudes HTTP necesarias.
*/

import axios from 'axios';

export const apiClient = axios.create({
    baseURL: 'http://13.216.35.92:8080/api/',
    headers: { 
        'Content-Type': 'application/json'
    }
});
