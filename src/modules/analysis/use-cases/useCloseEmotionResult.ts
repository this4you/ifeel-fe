import { useAiEmotionAnalyzerStore } from '../state/useAiEmotionAnalyzerStore.ts';

export const useCloseEmotionResult = () => {
    const { setEmotionAnalyzeResult } = useAiEmotionAnalyzerStore();

    return () => {
        setEmotionAnalyzeResult(null);
    }
};
