import { useAppLoadingStore } from '@commons/state/useAppLoadingStore.ts';
import { useLogger } from '@commons/use-cases/useLogger.ts';
import { useEmotionsStore } from '../state/useEmotionsStore.ts';
import { getEmotionsRest } from '../api/getEmotionsRest.ts';

export const useInitEmotions = () => {
    const { showLoader, hideLoader } = useAppLoadingStore();
    const { setEmotions, setIsNewEmotionVisible, setActiveEmotionId } = useEmotionsStore();
    const log = useLogger();

    return async (emotionSetId: string) => {
        try {
            showLoader();

            const emotions = await getEmotionsRest(emotionSetId);

            setEmotions(emotions);

            if (emotions.length === 0) {
                setIsNewEmotionVisible(true);
                setActiveEmotionId(null);
            } else {
                setIsNewEmotionVisible(false);
                setActiveEmotionId(emotions[0].id);
            }
        } catch (e) {
            log(e as Error, 'Error happens during init emotions');
        } finally {
            hideLoader();
        }
    }
};
