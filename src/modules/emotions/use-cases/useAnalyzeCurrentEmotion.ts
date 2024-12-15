import { useEmotionsStore } from '../state/useEmotionsStore.ts';
import { useAiEmotionAnalyzerStore } from '@emotions/state/useAiEmotionAnalyzerStore.ts';
import { analyzeEmotionRest } from '@emotions/api/analyzeEmotionRest.ts';
import { useEmotionSetsStore } from '@emotions/state/useEmotionSetsStore.ts';
import { useLogger } from '@commons/use-cases/useLogger.ts';
import { EmotionAnalyzeType } from '@emotions/models/EmotionAnalyzeType.ts';

export const useAnalyzeCurrentEmotion = () => {
    const { setIsLoading, setEmotionAnalyzeResult } = useAiEmotionAnalyzerStore();
    const { activeEmotionSetId } = useEmotionSetsStore();
    const { activeEmotionId } = useEmotionsStore();
    const log = useLogger();

    return async () => {
        if (activeEmotionSetId === null || activeEmotionId === null) {
            return;
        }

        setIsLoading(EmotionAnalyzeType.CURRENT_EMOTION_ANALYZE, true);

        try {
            const analyzeResult = await analyzeEmotionRest(activeEmotionSetId, activeEmotionId);

            setEmotionAnalyzeResult(analyzeResult);
        } catch (e) {
            log(e as Error, 'Error happens during analyze current emotion');
        } finally {
            setIsLoading(EmotionAnalyzeType.CURRENT_EMOTION_ANALYZE, false);
        }
    }
};
