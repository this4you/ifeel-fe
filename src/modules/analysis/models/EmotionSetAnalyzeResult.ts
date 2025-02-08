import { AiAnalysisType } from './AiAnalysisType.ts';

export type EmotionSetAnalyzeResult = {
    type: AiAnalysisType.EMOTION_SET_ANALYZE;
    recommendation: string;
};
