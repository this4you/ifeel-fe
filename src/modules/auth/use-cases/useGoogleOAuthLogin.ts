import { useGoogleLogin } from '@react-oauth/google';
import { getTokensRest } from '../api/getTokensRest.ts';
import { useNavigate } from 'react-router-dom';
import { useAppLoadingStore } from '@commons/state/useAppLoadingStore.ts';

export const useGoogleOAuthLogin = () => {
    const navigate = useNavigate();
    const { setLoading } = useAppLoadingStore();

    return useGoogleLogin({
        flow: 'auth-code',
        onSuccess: async (codeResponse) => {
            setLoading(true);
            const tokens = await getTokensRest(codeResponse.code);

            localStorage.setItem('tokens', JSON.stringify(tokens));

            navigate('/user');
        },
        onError: errorResponse => console.log(errorResponse),
    })
}