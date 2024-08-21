import { useAppLoadingStore } from '@commons/state/useAppLoadingStore.ts';
import { useLogger } from '@commons/use-cases/useLogger.ts';
import { useEmotionsStore } from '../state/useEmotionsStore.ts';
import { deleteEmotionRest } from '../api/deleteEmotionRest.ts';
import { useEmotionSetsStore } from '../state/useEmotionSetsStore.ts';

export const useDeleteActiveEmotion = () => {
    const { showLoader, hideLoader } = useAppLoadingStore();
    const {
        deleteEmotion,
        setActiveEmotionId,
        setIsNewEmotionVisible,
        activeEmotionId,
    } = useEmotionsStore();

    const { activeEmotionSetId} = useEmotionSetsStore();
    const log = useLogger();

    return async () => {
        if (activeEmotionId === null || activeEmotionSetId === null) {
            return null;
        }

        try {
            showLoader();

            await deleteEmotionRest(activeEmotionSetId, activeEmotionId);

            const emotionsAfterDelete = deleteEmotion(activeEmotionId);

            if (emotionsAfterDelete.length > 0) {
                setActiveEmotionId(emotionsAfterDelete[0].id);
            } else {
                setActiveEmotionId(null);
                setIsNewEmotionVisible(true);
            }

        } catch (e) {
            log(e as Error, 'Error happens during deleting emotion set');
        } finally {
            hideLoader();
        }
    }
};
