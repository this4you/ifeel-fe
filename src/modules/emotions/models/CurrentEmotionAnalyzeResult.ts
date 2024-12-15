import { EmotionAnalyzeType } from '@emotions/models/EmotionAnalyzeType.ts';

export type CurrentEmotionAnalyzeResult = {
    type: EmotionAnalyzeType.CURRENT_EMOTION_ANALYZE;
    emotionId: string;
    childNeed: string | null;
    schema: string | null;
    futureActions: string | null;
    usefulConversation: string | null;
};
