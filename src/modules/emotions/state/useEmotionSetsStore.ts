import { create } from 'zustand';
import { EmotionSet } from '../models/EmotionSet.ts';

type EmotionsSetsStore = {
    emotionSets: EmotionSet[]
}

export const useEmotionSetsStore = create<EmotionsSetsStore>(() => ({
    emotionSets: []
}));