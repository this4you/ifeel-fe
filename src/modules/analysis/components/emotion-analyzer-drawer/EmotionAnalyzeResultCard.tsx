import React from 'react';
import { EmotionAnalyzeResult } from '../../models/EmotionAnalyzeResult.ts';
import { AiAnalysisType } from '../../models/AiAnalysisType.ts';
import { CurrentEmotionAnalyzeResultCard } from './CurrentEmotionAnalyzeResultCard.tsx';
import { EmotionSetAnalyzeResult } from '../../models/EmotionSetAnalyzeResult.ts';
import { CurrentEmotionSetAnalyzeResultCard } from './CurrentEmotionSetAnalyzeResultCard.tsx';
import { AnalyzeResult } from "@analysis/models/AnalyzeResult.ts";

type Props = {
    emotionAnalyzeResult: AnalyzeResult;
}

const isCurrentEmotionAnalyzeResult = (type: AiAnalysisType, result: Object): result is EmotionAnalyzeResult => {
    return type === AiAnalysisType.EMOTION_ANALYZE
}

const isCurrentEmotionSetAnalyzeResult = (type: AiAnalysisType, result: Object): result is EmotionSetAnalyzeResult => {
    return type === AiAnalysisType.EMOTION_SET_ANALYZE
}

export const EmotionAnalyzeResultCard: React.FC<Props> = ({
    emotionAnalyzeResult
}) => {
    if (isCurrentEmotionAnalyzeResult(emotionAnalyzeResult.type, emotionAnalyzeResult.result)) {
        return <CurrentEmotionAnalyzeResultCard result={emotionAnalyzeResult.result}/>
    }

    if (isCurrentEmotionSetAnalyzeResult(emotionAnalyzeResult.type, emotionAnalyzeResult.result)) {
        return <CurrentEmotionSetAnalyzeResultCard result={emotionAnalyzeResult.result}/>
    }

    return null;
};


