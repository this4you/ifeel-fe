import { useAiEmotionAnalyzerStore } from '@emotions/state/useAiEmotionAnalyzerStore.ts';
import { useEmotionSetsStore } from '@emotions/state/useEmotionSetsStore.ts';
import { useLogger } from '@commons/use-cases/useLogger.ts';
import { EmotionAnalyzeType } from '@emotions/models/EmotionAnalyzeType.ts';
import { analyzeEmotionSetRest } from '@emotions/api/analyzeEmotionSetRest.ts';

export const useAnalyzeCurrentEmotionSet = () => {
    const { setIsLoading, setEmotionAnalyzeResult } = useAiEmotionAnalyzerStore();
    const { activeEmotionSetId } = useEmotionSetsStore();
    const log = useLogger();

    return async () => {
        if (activeEmotionSetId === null) {
            return;
        }

        setIsLoading(EmotionAnalyzeType.CURRENT_EMOTION_SET_ANALYZE, true);

        try {
            const analyzeResult = await analyzeEmotionSetRest(activeEmotionSetId);

            setEmotionAnalyzeResult(analyzeResult);
        } catch (e) {
            log(e as Error, 'Error happens during analyze current emotion set');
        } finally {
            setIsLoading(EmotionAnalyzeType.CURRENT_EMOTION_SET_ANALYZE, false);
        }
    }
};
