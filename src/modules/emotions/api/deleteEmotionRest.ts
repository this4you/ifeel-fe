import { baseAxios } from '@commons/api/baseAxios.ts';

export const deleteEmotionRest = async (emotionSetId: string, emotionId: string): Promise<void> => {
    await baseAxios.delete(`/emotion-sets/${emotionSetId}/emotions/${emotionId}`);
}