import { create } from 'zustand';
import { EmotionSet } from '../models/EmotionSet.ts';

type EmotionsSetsStore = {
    emotionSets: EmotionSet[],
    isMoodSelectorVisible: boolean;
    setEmotionsSets: (emotionSets: EmotionSet[]) => void,
}

export const useEmotionSetsStore = create<EmotionsSetsStore>((set) => ({
    emotionSets: [],
    isMoodSelectorVisible: true,
    setEmotionsSets: emotionSets => set(() => ({ emotionSets }))
}));