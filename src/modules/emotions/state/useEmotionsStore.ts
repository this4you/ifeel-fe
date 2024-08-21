import { create } from 'zustand';
import { Emotion } from '../models/Emotion.ts';

type EmotionsStore = {
    emotions: Emotion[],
    activeEmotionId: string | null,
    isNewEmotionVisible: boolean;
    setEmotions: (emotions: Emotion[]) => void,
    addEmotion: (emotion: Emotion) => void,
    updateEmotion: (emotion: Emotion) => void,
    deleteEmotion: (id: string) => void,
    setIsNewEmotionVisible: (isVisible: boolean) => void,
    setActiveEmotionId: (id: string | null) => void,
}

export const useEmotionsStore = create<EmotionsStore>((set) => ({
    emotions: [],
    activeEmotionId: null,
    isNewEmotionVisible: true,
    setEmotions: emotions => set(() => ({ emotions })),
    addEmotion: emotion => set(({ emotions }) => ({
        emotions: [...emotions, emotion]
    })),
    updateEmotion: emotion => set(({ emotions }) => ({
        emotions: emotions.map(it => it.id == emotion.id ? emotion : it)
    })),
    deleteEmotion: id => set(({ emotions }) => ({
        emotions: emotions.filter(it => it.id !== id)
    })),
    setIsNewEmotionVisible: isVisible => set(() => ({
        isNewEmotionVisible: isVisible
    })),
    setActiveEmotionId: id => set(() => ({ activeEmotionId: id }))
}));