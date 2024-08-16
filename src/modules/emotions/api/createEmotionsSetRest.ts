import { EmotionSet } from '../models/EmotionSet.ts';
import { baseAxios } from '@commons/api/baseAxios.ts';

export const createEmotionsSetRest = async (moodScore: number): Promise<EmotionSet> => {
    const emotionsSet = await baseAxios.post<EmotionSet>(
        '/emotion-sets',
        { moodScore }
    );

    return emotionsSet.data;
}