import { getUserInfoRest } from '../api/getUserInfoRest.ts';
import { useUserStore } from '../state/useUserStore.ts';
import { useAppLoadingStore } from '@commons/state/useAppLoadingStore.ts';
import { useLogger } from '@commons/use-cases/useLogger.ts';

export const useInitUserInfo = () => {
    const { showLoader, hideLoader } = useAppLoadingStore();
    const { setUser, user } = useUserStore();
    const log = useLogger();

    return async () => {
        if (user) return;

        try {
            showLoader();

            const userInfo = await getUserInfoRest();

            setUser(userInfo);
        } catch (e) {
            log(e as Error, 'Error happens during init user info');
        } finally {
            hideLoader();
        }
    }
}