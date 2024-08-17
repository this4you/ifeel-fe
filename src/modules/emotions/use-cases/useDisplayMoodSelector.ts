import { useEmotionSetsStore } from '../state/useEmotionSetsStore.ts';

export const useDisplayMoodSelector = () => {
    const { setActiveEmotionSetId, setIsMoodSelectorVisible } = useEmotionSetsStore();

    return async () => {
        setActiveEmotionSetId(null);
        setIsMoodSelectorVisible(true);
    }
};
