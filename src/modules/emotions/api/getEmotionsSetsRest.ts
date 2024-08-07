import { baseAxios } from '@commons/api/baseAxios.ts';
import { EmotionSet } from '../models/EmotionSet.ts';

export const getEmotionsSetsRest = async (): Promise<EmotionSet[]> => {
    const emotionsSets = await baseAxios.get<EmotionSet[]>('/emotion-sets');

    return emotionsSets.data;
}
