import { create } from 'zustand';
import { Emotion } from '../models/Emotion.ts';

type EmotionsStore = {
    emotions: Emotion[],
    activeEmotionId: string | null,
    isNewEmotionVisible: boolean;
    setEmotions: (emotions: Emotion[]) => void,
    addEmotion: (emotion: Emotion) => void,
    updateEmotion: (emotion: Emotion) => void,
    deleteEmotion: (id: string) => Emotion[],
    setIsNewEmotionVisible: (isVisible: boolean) => void,
    setActiveEmotionId: (id: string | null) => void,
}

export const useEmotionsStore = create<EmotionsStore>((set, get) => ({
    emotions: [],
    activeEmotionId: null,
    isNewEmotionVisible: true,
    setEmotions: emotions => set(() => ({ emotions })),
    addEmotion: emotion => set(({ emotions }) => ({
        emotions: [emotion, ...emotions]
    })),
    updateEmotion: emotion => set(({ emotions }) => ({
        emotions: emotions.map(it => it.id == emotion.id ? emotion : it)
    })),
    deleteEmotion: id => {
        const newEmotions = get().emotions.filter(it => it.id !== id)

        set(() => ({
            emotions: newEmotions
        }))

        return newEmotions;
    },
    setIsNewEmotionVisible: isVisible => set(() => ({
        isNewEmotionVisible: isVisible
    })),
    setActiveEmotionId: id => set(() => ({ activeEmotionId: id }))
}));