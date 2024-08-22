import { useEmotionSetsStore } from '../state/useEmotionSetsStore.ts';
import { useAppLoadingStore } from '@commons/state/useAppLoadingStore.ts';
import { useLogger } from '@commons/use-cases/useLogger.ts';
import { createEmotionsSetRest } from '../api/createEmotionsSetRest.ts';

export const useCreateEmotionSet = () => {
    const { showLoader, hideLoader } = useAppLoadingStore();
    const { addEmotionsSet, setIsMoodSelectorVisible, setActiveEmotionSetId } = useEmotionSetsStore();
    const log = useLogger();

    return async (moodScore: number) => {
        try {
            showLoader();

            const emotionsSet = await createEmotionsSetRest(moodScore);

            addEmotionsSet(emotionsSet);
            setActiveEmotionSetId(emotionsSet.id);
            setIsMoodSelectorVisible(false);
        } catch (e) {
            log(e as Error, 'Error happens during create emotion set');
        } finally {
            hideLoader();
        }
    }
};
