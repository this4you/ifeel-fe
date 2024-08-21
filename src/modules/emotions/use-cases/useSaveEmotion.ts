import { useEmotionSetsStore } from '../state/useEmotionSetsStore.ts';
import { useAppLoadingStore } from '@commons/state/useAppLoadingStore.ts';
import { useLogger } from '@commons/use-cases/useLogger.ts';
import { Emotion } from '../models/Emotion.ts';
import { createEmotionRest } from '../api/createEmotionRest.ts';
import { useEmotionsStore } from '../state/useEmotionsStore.ts';
import { updateEmotionRest } from '../api/updateEmotionRest.ts';

export const useSaveEmotion = () => {
    const { showLoader, hideLoader } = useAppLoadingStore();
    const { activeEmotionSetId } = useEmotionSetsStore();
    const { addEmotion, setIsNewEmotionVisible, setActiveEmotionId, updateEmotion } = useEmotionsStore();
    const log = useLogger();

    return async (emotion: Emotion) => {
        if (activeEmotionSetId === null) {
            return;
        }

        try {
            showLoader();


            if (emotion.id === null) {
                const newEmotion = await createEmotionRest(activeEmotionSetId, emotion);

                addEmotion(newEmotion);
                setIsNewEmotionVisible(false);
                setActiveEmotionId(newEmotion.id);
            } else {
                const updatedEmotion = await updateEmotionRest(activeEmotionSetId, emotion);
                updateEmotion(updatedEmotion);
            }

        } catch (e) {
            log(e as Error, 'Error happens during create emotion');
        } finally {
            hideLoader();
        }
    }
};
