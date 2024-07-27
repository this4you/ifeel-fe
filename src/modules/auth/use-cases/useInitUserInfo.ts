import { getUserInfoRest } from '../api/getUserInfoRest.ts';
import { useUserStore } from '../state/useUserStore.ts';

export const useInitUserInfo = () => {
    const { setUser, setLoading, user } = useUserStore();

    return async () => {
        if (user) return;

        try {
            setLoading(true);

            const userInfo = await getUserInfoRest();

            setUser(userInfo);
        } catch (e) {
            console.error('Error happens during init user info', e);
        } finally {
            setLoading(false);
        }
    }
}