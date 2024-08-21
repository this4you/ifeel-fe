import { baseAxios } from '@commons/api/baseAxios.ts';
import { Emotion } from '../models/Emotion.ts';

export const updateEmotionRest = async (
    emotionSetId: string,
    emotion: Emotion
): Promise<Emotion> => {
    const emotionResponse = await baseAxios.put<Emotion>(
        `/emotion-sets/${emotionSetId}/emotions/${emotion.id}`,
        emotion
    );

    return emotionResponse.data;
}