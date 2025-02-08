import { useEmotionSetsStore } from '@emotions/state/useEmotionSetsStore.ts';
import { useEmotionsStore } from "@emotions/state/useEmotionsStore.ts";
import { EmotionAnalyzeParams } from "../models/EmotionAnalyzeParams.ts";
import { useUserStore } from "@auth/state/useUserStore.ts";
import { useAnalyzer } from "./useAnalyzer.ts";
import { AiAnalysisType } from "../models/AiAnalysisType.ts";

export const useAnalyzeCurrentEmotion = () => {
    const { activeEmotionSetId } = useEmotionSetsStore();
    const { activeEmotionId } = useEmotionsStore();
    const { user } = useUserStore();
    const analyzer = useAnalyzer();

    return async () => {
        if (!user?.id || !activeEmotionId || !activeEmotionSetId) {
            return
        }

        const emotionAnalyzeParams: EmotionAnalyzeParams = {
            userId: user.id,
            emotionId: activeEmotionId
        }

        await analyzer(AiAnalysisType.EMOTION_ANALYZE, emotionAnalyzeParams);
    };
};
