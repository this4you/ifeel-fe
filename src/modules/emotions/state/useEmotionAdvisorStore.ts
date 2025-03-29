import { create } from 'zustand';
import { EmotionSet } from '../models/EmotionSet.ts';
import { EmotionAdvisorCategory } from "@emotions/models/EmotionAdvisorCategory.ts";

type EmotionAdvisorStoreState = {
    isEmotionAdvisorVisible: boolean;
    emotionsCategories: EmotionAdvisorCategory[];
    setIsEmotionAdvisorVisible: (isEmotionAdvisorVisible: boolean) => void;
    setEmotionsCategories: (emotionsCategories: EmotionAdvisorCategory[]) => void;

}

export const useEmotionAdvisorStore = create<EmotionAdvisorStoreState>((set) => ({
    isEmotionAdvisorVisible: false,
    emotionsCategories: [],
    setIsEmotionAdvisorVisible: isEmotionAdvisorVisible => set(() => ({ isEmotionAdvisorVisible })),
    setEmotionsCategories: emotionsCategories => set(() => ({ emotionsCategories })),
}));
