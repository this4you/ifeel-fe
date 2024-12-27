import { EmotionAnalyzeType } from '@emotions/models/EmotionAnalyzeType.ts';

export type CurrentEmotionSetAnalyzeResult = {
    type: EmotionAnalyzeType.CURRENT_EMOTION_SET_ANALYZE;
    recommendation: string;
};
