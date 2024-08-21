import { useEmotionsStore } from '../state/useEmotionsStore.ts';

export const useAddNewEmotion = () => {
    const { setIsNewEmotionVisible, setActiveEmotionId } = useEmotionsStore();

    return () => {
        setIsNewEmotionVisible(true);
        setActiveEmotionId(null);
    }
};
