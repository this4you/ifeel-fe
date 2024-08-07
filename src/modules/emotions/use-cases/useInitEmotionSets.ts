import { useEmotionSetsStore } from '../state/useEmotionSetsStore.ts';
import { useAppLoadingStore } from '@commons/state/useAppLoadingStore.ts';
import { getEmotionsSetsRest } from '../api/getEmotionsSetsRest.ts';
import { useLogger } from '@commons/use-cases/useLogger.ts';

export const useInitEmotionSets = () => {
    const { showLoader, hideLoader } = useAppLoadingStore();
    const { setEmotionsSets } = useEmotionSetsStore();
    const log = useLogger();

    return async () => {
        try {
            showLoader();

            const emotionsSets = await getEmotionsSetsRest();

            setEmotionsSets(emotionsSets);
        } catch (e) {
            log(e as Error, 'Error happens during init emotions sets');
        } finally {
            hideLoader();
        }
    }
};
