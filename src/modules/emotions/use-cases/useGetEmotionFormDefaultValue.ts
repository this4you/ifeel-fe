import { Emotion } from '../models/Emotion.ts';
import { useEmotionsStore } from '../state/useEmotionsStore.ts';

export const useGetEmotionFormDefaultValue = () => {
    const { activeEmotionId, emotions } = useEmotionsStore();

    return (): Emotion => {
        const activeEmotion = activeEmotionId && emotions.find(it => it.id === activeEmotionId) || null

        if (activeEmotion) {
            return activeEmotion
        } else {
            return {
                id: null,
                name: '',
                description: '',
                schema: null,
                usefulConversation: null,
                futureActions: null,
                childNeed: null
            }
        }
    }
};
