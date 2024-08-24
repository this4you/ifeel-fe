import { baseAxios } from '@commons/api/baseAxios.ts';
import { Tokens } from '../models/Tokens.ts';

export const getTokensRest = async (code: string): Promise<Tokens> => {
    const tokensResponse = await baseAxios.get<Tokens>('/auth/google/grantcode', {
        params: {
            code: code,
            redirect: import.meta.env.VITE_GOOGLE_REDIRECT_URL
        }
    });

    return tokensResponse.data;
}
