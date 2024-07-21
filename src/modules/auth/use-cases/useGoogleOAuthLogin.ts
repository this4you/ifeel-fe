import { useGoogleLogin } from '@react-oauth/google';
import { getTokensRest } from '../api/getTokensRest.ts';
import { useNavigate } from 'react-router-dom';

export const useGoogleOAuthLogin = () => {
    const navigate = useNavigate();

    return useGoogleLogin({
        flow: 'auth-code',
        onSuccess: async (codeResponse) => {
            const tokens = await getTokensRest(codeResponse.code);

            localStorage.setItem('tokens', JSON.stringify(tokens));

            navigate('/emotions');
        },
        onError: errorResponse => console.log(errorResponse),
    })
}