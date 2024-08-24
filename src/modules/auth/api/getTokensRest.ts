import { baseAxios } from '@commons/api/baseAxios.ts';
import { Tokens } from '../models/Tokens.ts';

export const getTokensRest = async (code: string): Promise<Tokens> => {
    console.log('GOOGLE_REDIRECT_URL_V2', import.meta.env.VITE_GOOGLE_REDIRECT_URL);

    const tokensResponse = await baseAxios.get<Tokens>('/auth/google/grantcode', {
        params: {
            code: code,
            redirect: import.meta.env.VITE_GOOGLE_REDIRECT_URL
        }
    });

    return tokensResponse.data;
}
