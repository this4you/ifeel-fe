import { baseAxios } from '@commons/api/baseAxios.ts';
import { Emotion } from '../models/Emotion.ts';

export const getEmotionsRest = async (emotionSetId: string): Promise<Emotion[]> => {
    const emotions = await baseAxios.get<Emotion[]>(
        `/emotion-sets/${emotionSetId}/emotions`
    );

    return emotions.data.reverse();
}
