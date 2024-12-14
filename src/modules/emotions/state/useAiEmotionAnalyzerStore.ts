import { create } from 'zustand';

type AiEmotionAnalyzerStore = {
    isLoading: boolean;
    setIsLoading: (isLoading: boolean) => void;
}

export const useAiEmotionAnalyzerStore = create<AiEmotionAnalyzerStore>((set, get) => ({
    isLoading: false,
    setIsLoading: isLoading => set(() => ({
        isLoading
    }))
}));