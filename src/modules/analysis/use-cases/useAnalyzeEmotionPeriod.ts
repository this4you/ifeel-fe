import { AiAnalysisType } from '../models/AiAnalysisType.ts';
import { useUserStore } from "@auth/state/useUserStore.ts";
import { useAnalyzer } from "@analysis/use-cases/useAnalyzer.ts";
import { DatePeriod } from "@analysis/models/DatePeriod.ts";
import { EmotionPeriodAnalyzeParams } from "@analysis/models/EmotionPeriodAnalyzeParams.ts";

export const useAnalyzeEmotionPeriod = () => {
    const { user } = useUserStore();
    const analyzer = useAnalyzer();

    return async (period: DatePeriod) => {
        if (!user?.id) {
            return
        }

        const emotionPeriodAnalyzeParams: EmotionPeriodAnalyzeParams = {
            userId: user.id,
            period: period,
        }

        await analyzer(AiAnalysisType.EMOTION_PERIOD_ANALYZE, emotionPeriodAnalyzeParams);
    };
};
