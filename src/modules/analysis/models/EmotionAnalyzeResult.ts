export type EmotionAnalyzeResult = {
    emotionId: string;
    childNeed: string | null;
    schema: string | null;
    futureActions: string | null;
    usefulConversation: string | null;
};
