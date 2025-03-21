import { AiAnalysisType } from "../models/AiAnalysisType.ts";
import { useAiEmotionAnalyzerStore } from "../state/useAiEmotionAnalyzerStore.ts";
import { analyzeRest } from "../api/analyzeRest.ts";
import { useLogger } from "@commons/use-cases/useLogger.ts";
import { AnalyzeParams } from "../models/AnalyzeParams.ts";

export const useAnalyzer = () => {
    const { setIsLoading, setEmotionAnalyzeResult } = useAiEmotionAnalyzerStore();
    const log = useLogger();

    return async (analyzeType: AiAnalysisType, params: Partial<AnalyzeParams>) => {
        setIsLoading(analyzeType, true);

        try {
            const analyzeResult = await analyzeRest(analyzeType, params);

            setEmotionAnalyzeResult(analyzeResult);
        } catch (e) {
            log(e as Error, 'Error happens during analyze process');
        } finally {
            setIsLoading(analyzeType, false);
        }
    }
}