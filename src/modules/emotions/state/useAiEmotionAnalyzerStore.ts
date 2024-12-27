import { create } from 'zustand';
import { EmotionAnalyzeResult } from '@emotions/models/EmotionAnalyzeResult.ts';
import { EmotionAnalyzeType } from '@emotions/models/EmotionAnalyzeType.ts';

type AiEmotionAnalyzerStore = {
    isLoading: Record<EmotionAnalyzeType, boolean>;
    setIsLoading: (type: EmotionAnalyzeType, isLoading: boolean) => void;
    emotionAnalyzeResult: EmotionAnalyzeResult | null;
    setEmotionAnalyzeResult: (emotionAnalyzeResult: EmotionAnalyzeResult | null) => void;
}

export const useAiEmotionAnalyzerStore = create<AiEmotionAnalyzerStore>((set, get) => ({
    isLoading: {
        [EmotionAnalyzeType.CURRENT_EMOTION_ANALYZE]: false,
        [EmotionAnalyzeType.CURRENT_EMOTION_SET_ANALYZE]: false,
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