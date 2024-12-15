import { baseAxios } from '@commons/api/baseAxios.ts';
import { CurrentEmotionAnalyzeResult } from '@emotions/models/CurrentEmotionAnalyzeResult.ts';
import { EmotionAnalyzeType } from '@emotions/models/EmotionAnalyzeType.ts';

type CurrentEmotionAnalyzeResponse = {
    emotionId: string;
    childNeed: string | null;
    schema: string | null;
    futureActions: string | null;
    usefulConversation: string | null;
};

export const analyzeEmotionRest = async (emotionSetId: string, emotionId: string): Promise<CurrentEmotionAnalyzeResult> => {
    const result = await baseAxios.post<CurrentEmotionAnalyzeResponse>(
        `/emotion-sets/${emotionSetId}/emotions/${emotionId}/analyze`
    );

    return {
        ...result.data,
        type: EmotionAnalyzeType.CURRENT_EMOTION_ANALYZE,
    };
};
