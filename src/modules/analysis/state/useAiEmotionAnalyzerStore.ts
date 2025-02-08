import { create } from 'zustand';
import { AiAnalysisType } from '../models/AiAnalysisType.ts';
import { AnalyzeResult } from "../models/AnalyzeResult.ts";

type AiEmotionAnalyzerStore = {
    isLoading: Record<AiAnalysisType, boolean>;
    setIsLoading: (type: AiAnalysisType, isLoading: boolean) => void;
    emotionAnalyzeResult: AnalyzeResult | null;
    setEmotionAnalyzeResult: (emotionAnalyzeResult: AnalyzeResult | null) => void;
}

export const useAiEmotionAnalyzerStore = create<AiEmotionAnalyzerStore>((set, get) => ({
    isLoading: {
        [AiAnalysisType.CURRENT_EMOTION_ANALYZE]: false,
        [AiAnalysisType.CURRENT_EMOTION_SET_ANALYZE]: false,
    },
    setIsLoading: (type, isLoading) => set((store) => ({
        isLoading: {
            ...store.isLoading,
            [type]: isLoading
        }
    })),
    emotionAnalyzeResult: null,
    setEmotionAnalyzeResult: emotionAnalyzeResult => set(() => ({
        emotionAnalyzeResult
    })),
}));