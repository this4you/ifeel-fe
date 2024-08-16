import { create } from 'zustand';
import { EmotionSet } from '../models/EmotionSet.ts';

type EmotionsSetsStore = {
    emotionSets: EmotionSet[],
    isMoodSelectorVisible: boolean;
    setEmotionsSets: (emotionSets: EmotionSet[]) => void,
    addEmotionsSet: (emotionSet: EmotionSet) => void,
    setIsMoodSelectorVisible: (isVisible: boolean) => void,
}

export const useEmotionSetsStore = create<EmotionsSetsStore>((set) => ({
    emotionSets: [],
    isMoodSelectorVisible: true,
    setEmotionsSets: emotionSets => set(() => ({ emotionSets })),
    addEmotionsSet: emotionSet => set(({ emotionSets }) => ({
        emotionSets: [...emotionSets, emotionSet]
    })),
    setIsMoodSelectorVisible: isVisible => set(() => ({
        isMoodSelectorVisible: isVisible
    }))
}));