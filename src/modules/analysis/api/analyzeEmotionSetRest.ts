import { baseAxios } from '@commons/api/baseAxios.ts';
import { AiAnalysisType } from '../models/AiAnalysisType.ts';
import { EmotionSetAnalyzeResult } from '../models/EmotionSetAnalyzeResult.ts';
import { AnalyzeParams } from "../use-cases/useAnalyzeCurrentEmotion.ts";

type CurrentEmotionSetAnalyzeResponse = {
    recommendation: string;
};

export const analyzeEmotionSetRest = async (emotionSetId: string,): Promise<EmotionSetAnalyzeResult> => {
    const result = await baseAxios.post<CurrentEmotionSetAnalyzeResponse>(
        `/emotion-sets/${emotionSetId}/analyze`
    );

    return {
        ...result.data,
        type: AiAnalysisType.CURRENT_EMOTION_SET_ANALYZE,
    };
};

