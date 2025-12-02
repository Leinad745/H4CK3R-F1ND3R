import axios from 'axios';

export const apiClient = axios.create({
    baseURL: 'http://13.216.35.92:8080/api/',
    headers: { 
        'Content-Type': 'application/json'
    }
});
