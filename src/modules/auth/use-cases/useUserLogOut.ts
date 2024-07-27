import { useNavigate } from 'react-router-dom';
import { useUserStore } from '../state/useUserStore.ts';

export const useInitUserInfo = () => {
    const navigate = useNavigate();
    const { setUser } = useUserStore();

    return () => {
        localStorage.clear();
        setUser(null);

        navigate('/');
    }
}