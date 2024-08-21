import { useEmotionsStore } from '../state/useEmotionsStore.ts';

export const useSetActiveEmotion = () => {
    const { setActiveEmotionId, setIsNewEmotionVisible } = useEmotionsStore();

    return (emotionId: string) => {
        setIsNewEmotionVisible(false);
        setActiveEmotionId(emotionId);
    }
};
