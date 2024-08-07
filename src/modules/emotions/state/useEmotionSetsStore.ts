import { create } from 'zustand';
import { EmotionSet } from '../models/EmotionSet.ts';

type EmotionsSetsStore = {
    emotionSets: EmotionSet[],
    setEmotionsSets: (emotionSets: EmotionSet[]) => void,
}

export const useEmotionSetsStore = create<EmotionsSetsStore>((set) => ({
    emotionSets: [],
    setEmotionsSets: emotionSets => set(() => ({ emotionSets }))
}));