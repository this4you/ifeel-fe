import { baseAxios } from '@commons/api/baseAxios.ts';
import { EmotionAnalyzeType } from '@emotions/models/EmotionAnalyzeType.ts';
import { CurrentEmotionSetAnalyzeResult } from '@emotions/models/CurrentEmotionSetAnalyzeResult.ts';

type CurrentEmotionSetAnalyzeResponse = {
    recommendation: string;
};

export const analyzeEmotionSetRest = async (emotionSetId: string,): Promise<CurrentEmotionSetAnalyzeResult> => {
    const result = await baseAxios.post<CurrentEmotionSetAnalyzeResponse>(
        `/emotion-sets/${emotionSetId}/analyze`
    );

    return {
        ...result.data,
        type: EmotionAnalyzeType.CURRENT_EMOTION_SET_ANALYZE,
    };
};
