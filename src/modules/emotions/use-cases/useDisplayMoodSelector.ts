import { useEmotionSetsStore } from '../state/useEmotionSetsStore.ts';
import { useEmotionsStore } from '@emotions/state/useEmotionsStore.ts';

export const useDisplayMoodSelector = () => {
    const { setActiveEmotionSetId, setIsMoodSelectorVisible } = useEmotionSetsStore();
    const { setActiveEmotionId } = useEmotionsStore();

    return async () => {
        setActiveEmotionSetId(null);
        setActiveEmotionId(null);
        setIsMoodSelectorVisible(true);
    }
};
