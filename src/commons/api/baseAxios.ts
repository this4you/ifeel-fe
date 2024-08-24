import axios from 'axios';
import { Tokens } from '@auth/models/Tokens.ts';

export const baseAxios = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL
});

baseAxios.interceptors.request.use((config) => {
    const tokensJson = localStorage.getItem('tokens');
    const tokens: Tokens = tokensJson && JSON.parse(tokensJson) || null;

    if (tokens) {
        config.headers.set('Authorization', 'Bearer ' + tokens.accessToken);
    }

    return config;
});

