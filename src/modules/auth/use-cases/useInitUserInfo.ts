import { getUserInfoRest } from '../api/getUserInfoRest.ts';
import { useUserStore } from '../state/useUserStore.ts';
import { useAppLoadingStore } from '@commons/state/useAppLoadingStore.ts';

export const useInitUserInfo = () => {
    const {setLoading: setAppLoading} = useAppLoadingStore();

    const { setUser, user } = useUserStore();

    return async () => {
        if (user) return;

        try {
            setAppLoading(true);

            const userInfo = await getUserInfoRest();

            setUser(userInfo);
        } catch (e) {
            console.error('Error happens during init user info', e);
        } finally {
            setTimeout(() => {
                setAppLoading(false);
            }, 1000);
        }
    }
}