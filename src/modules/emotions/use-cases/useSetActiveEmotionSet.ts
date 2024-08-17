import { useEmotionSetsStore } from '../state/useEmotionSetsStore.ts';

export const useSetActiveEmotionSet = () => {
    const { setActiveEmotionSetId, setIsMoodSelectorVisible } = useEmotionSetsStore();

    return async (emotionSetId: string | null) => {
        setActiveEmotionSetId(emotionSetId);
        setIsMoodSelectorVisible(false);
    }
};
