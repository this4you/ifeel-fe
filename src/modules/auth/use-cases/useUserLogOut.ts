import { useNavigate } from 'react-router-dom';
import { useUserStore } from '../state/useUserStore.ts';
import { BASE_LOCATION } from '@commons/constants.ts';

export const useInitUserInfo = () => {
    const navigate = useNavigate();
    const { setUser } = useUserStore();

    return () => {
        localStorage.clear();
        setUser(null);

        navigate(`${BASE_LOCATION}`);
    }
}