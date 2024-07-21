import axios from 'axios';
import { Tokens } from '../../modules/auth/models/Tokens.ts';

const BASE_URL = 'http://localhost:8888';

export const baseAxios = axios.create({
    baseURL: BASE_URL
});

baseAxios.interceptors.request.use((config) => {
    const tokensJson = localStorage.getItem('tokens');
    const tokens: Tokens = tokensJson && JSON.parse(tokensJson) || null;

    if (tokens) {
        config.headers.set('Authorization', 'Bearer ' + tokens.accessToken);
    }

    return config;
});

