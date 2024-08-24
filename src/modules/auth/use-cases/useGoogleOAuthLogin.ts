import { useGoogleLogin } from '@react-oauth/google';
import { getTokensRest } from '../api/getTokensRest.ts';
import { useNavigate } from 'react-router-dom';
import { useAppLoadingStore } from '@commons/state/useAppLoadingStore.ts';
import { BASE_LOCATION } from '@commons/constants.ts';

export const useGoogleOAuthLogin = () => {
    const navigate = useNavigate();
    const { showLoader } = useAppLoadingStore();

    return useGoogleLogin({
        flow: 'auth-code',
        onSuccess: async (codeResponse) => {
            showLoader();

            const tokens = await getTokensRest(codeResponse.code);

            localStorage.setItem('tokens', JSON.stringify(tokens));

            navigate(`${BASE_LOCATION}/user`);
        },
        onError: errorResponse => console.log(errorResponse),
    })
}