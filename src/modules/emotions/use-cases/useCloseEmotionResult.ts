import { useAiEmotionAnalyzerStore } from '@emotions/state/useAiEmotionAnalyzerStore.ts';

export const useCloseEmotionResult = () => {
    const { setEmotionAnalyzeResult } = useAiEmotionAnalyzerStore();

    return () => {
        setEmotionAnalyzeResult(null);
    }
};
