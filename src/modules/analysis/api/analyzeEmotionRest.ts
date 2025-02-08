import { baseAxios } from '@commons/api/baseAxios.ts';
import { EmotionAnalyzeResult } from '../models/EmotionAnalyzeResult.ts';
import { AiAnalysisType } from '../models/AiAnalysisType.ts';

type CurrentEmotionAnalyzeResponse = {
    emotionId: string;
    childNeed: string | null;
    schema: string | null;
    futureActions: string | null;
    usefulConversation: string | null;
};

export const analyzeEmotionRest = async (emotionSetId: string, emotionId: string): Promise<EmotionAnalyzeResult> => {
    const result = await baseAxios.post<CurrentEmotionAnalyzeResponse>(
        `/emotion-sets/${emotionSetId}/emotions/${emotionId}/analyze`
    );

    return {
        ...result.data,
        type: AiAnalysisType.CURRENT_EMOTION_ANALYZE,
    };
};
