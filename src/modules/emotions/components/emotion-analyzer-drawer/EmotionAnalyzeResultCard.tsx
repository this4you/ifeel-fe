import React from 'react';
import { EmotionAnalyzeResult } from '@emotions/models/EmotionAnalyzeResult.ts';
import { CurrentEmotionAnalyzeResult } from '@emotions/models/CurrentEmotionAnalyzeResult.ts';
import { EmotionAnalyzeType } from '@emotions/models/EmotionAnalyzeType.ts';
import { CurrentEmotionAnalyzeResultCard } from '@emotions/components/emotion-analyzer-drawer/CurrentEmotionAnalyzeResultCard.tsx';

type Props = {
    emotionAnalyzeResult: EmotionAnalyzeResult;
}

const isCurrentEmotionAnalyzeResult = (emotionAnalyzeResult: EmotionAnalyzeResult): emotionAnalyzeResult is CurrentEmotionAnalyzeResult => {
    return emotionAnalyzeResult.type === EmotionAnalyzeType.CURRENT_EMOTION_ANALYZE
}

export const EmotionAnalyzeResultCard: React.FC<Props> = ({
    emotionAnalyzeResult
}) => {
    if (isCurrentEmotionAnalyzeResult(emotionAnalyzeResult)) {
        return <CurrentEmotionAnalyzeResultCard result={emotionAnalyzeResult} />
    }

    return null;
};


