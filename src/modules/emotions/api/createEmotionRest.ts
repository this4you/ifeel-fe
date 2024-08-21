import { baseAxios } from '@commons/api/baseAxios.ts';
import { Emotion } from '../models/Emotion.ts';

export const createEmotionRest = async (
    emotionSetId: string,
    emotion: Emotion
): Promise<Emotion> => {
    const emotionResponse = await baseAxios.post<Emotion>(
        `/emotion-sets/${emotionSetId}/emotions`,
        emotion
    );

    return emotionResponse.data;
}