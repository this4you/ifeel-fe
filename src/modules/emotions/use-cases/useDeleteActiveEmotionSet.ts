import { useEmotionSetsStore } from '../state/useEmotionSetsStore.ts';
import { useAppLoadingStore } from '@commons/state/useAppLoadingStore.ts';
import { useLogger } from '@commons/use-cases/useLogger.ts';
import { deleteEmotionsSetRest } from '../api/deleteEmotionsSetRest.ts';

export const useDeleteActiveEmotionSet = () => {
    const { showLoader, hideLoader } = useAppLoadingStore();
    const {
        deleteEmotionsSet,
        setActiveEmotionSetId,
        setIsMoodSelectorVisible,
        activeEmotionSetId,
    } = useEmotionSetsStore();
    const log = useLogger();

    return async () => {
        if (activeEmotionSetId === null) {
            return null;
        }

        try {
            showLoader();

            await deleteEmotionsSetRest(activeEmotionSetId);

            deleteEmotionsSet(activeEmotionSetId);

            setActiveEmotionSetId(null);
            setIsMoodSelectorVisible(true);
        } catch (e) {
            log(e as Error, 'Error happens during deleting emotion set');
        } finally {
            hideLoader();
        }
    }
};
