import { create } from 'zustand';
import { EmotionSet } from '../models/EmotionSet.ts';

type EmotionsSetsStore = {
    emotionSets: EmotionSet[],
    activeEmotionSetId: string | null,
    isMoodSelectorVisible: boolean;
    setEmotionsSets: (emotionSets: EmotionSet[]) => void,
    addEmotionsSet: (emotionSet: EmotionSet) => void,
    deleteEmotionsSet: (id: string) => void,
    setIsMoodSelectorVisible: (isVisible: boolean) => void,
    setActiveEmotionSetId: (id: string | null) => void
}

export const useEmotionSetsStore = create<EmotionsSetsStore>((set) => ({
    emotionSets: [],
    activeEmotionSetId: null,
    isMoodSelectorVisible: true,
    setEmotionsSets: emotionSets => set(() => ({ emotionSets })),
    addEmotionsSet: emotionSet => set(({ emotionSets }) => ({
        emotionSets: [...emotionSets, emotionSet]
    })),
    deleteEmotionsSet: id => set(({ emotionSets }) => ({
        emotionSets: emotionSets.filter(it => it.id !== id)
    })),
    setIsMoodSelectorVisible: isVisible => set(() => ({
        isMoodSelectorVisible: isVisible
    })),
    setActiveEmotionSetId: id => set(() => ({ activeEmotionSetId: id }))
}));