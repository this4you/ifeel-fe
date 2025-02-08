import { useEmotionSetsStore } from '@emotions/state/useEmotionSetsStore.ts';
import { AiAnalysisType } from '../models/AiAnalysisType.ts';
import { useUserStore } from "@auth/state/useUserStore.ts";
import { EmotionSetAnalyzeParams } from "@analysis/models/EmotionSetAnalyzeParams.ts";
import { useAnalyzer } from "@analysis/use-cases/useAnalyzer.ts";

export const useAnalyzeCurrentEmotionSet = () => {
    const { activeEmotionSetId } = useEmotionSetsStore();
    const { user } = useUserStore();
    const analyzer = useAnalyzer();

    return async () => {
        if (!user?.id || !activeEmotionSetId) {
            return
        }

        const emotionSetAnalyzeParams: EmotionSetAnalyzeParams = {
            userId: user.id,
            emotionSetId: activeEmotionSetId
        }

        await analyzer(AiAnalysisType.EMOTION_SET_ANALYZE, emotionSetAnalyzeParams);
    };
};
