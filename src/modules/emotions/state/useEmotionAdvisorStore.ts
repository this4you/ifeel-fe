import { create } from 'zustand';
import { EmotionSet } from '../models/EmotionSet.ts';
import { EmotionAdvisorCategory } from "@emotions/models/EmotionAdvisorCategory.ts";

type EmotionAdvisorStoreState = {
    isEmotionAdvisorVisible: boolean;
    isLoading: boolean;
    categoryLoading: Record<string, boolean>
    emotionsCategories: EmotionAdvisorCategory[];
    setIsEmotionAdvisorVisible: (isEmotionAdvisorVisible: boolean) => void;
    setIsLoading: (isLoading: boolean) => void;
    setIsCategoryLoading: (category: string, isLoading: boolean) => void;
    setEmotionsCategories: (emotionsCategories: EmotionAdvisorCategory[]) => void;
}

export const useEmotionAdvisorStore = create<EmotionAdvisorStoreState>((set) => ({
    isEmotionAdvisorVisible: false,
    isLoading: false,
    categoryLoading: {},
    emotionsCategories: [],
    setIsEmotionAdvisorVisible: isEmotionAdvisorVisible => set(() => ({ isEmotionAdvisorVisible })),
    setIsLoading: isLoading => set(() => ({ isLoading })),
    setEmotionsCategories: emotionsCategories => set(() => ({ emotionsCategories })),
    setIsCategoryLoading: (category, isLoading) => set((state) => ({
        categoryLoading: {
            ...state.categoryLoading,
            [category]: isLoading
        }
    }))
}));
