import React from 'react';
import { EmotionAnalyzeResult } from '../../models/EmotionAnalyzeResult.ts';
import { AiAnalysisType } from '../../models/AiAnalysisType.ts';
import { CurrentEmotionAnalyzeResultCard } from './CurrentEmotionAnalyzeResultCard.tsx';
import { EmotionSetAnalyzeResult } from '../../models/EmotionSetAnalyzeResult.ts';
import { CurrentEmotionSetAnalyzeResultCard } from './CurrentEmotionSetAnalyzeResultCard.tsx';
import { AnalyzeResult } from "@analysis/models/AnalyzeResult.ts";
import { EmotionPeriodAnalyzeResult } from "@analysis/models/EmotionPeriodAnalyzeResult.ts";
import {
    EmotionPeriodAnalyzeResultCard
} from "@analysis/components/emotion-analyzer-drawer/EmotionPeriodAnalyzeResultCard.tsx";

type Props = {
    emotionAnalyzeResult: AnalyzeResult;
}

const isCurrentEmotionAnalyzeResult = (type: AiAnalysisType, result: Object): result is EmotionAnalyzeResult => {
    return type === AiAnalysisType.EMOTION_ANALYZE
}

const isCurrentEmotionSetAnalyzeResult = (type: AiAnalysisType, result: Object): result is EmotionSetAnalyzeResult => {
    return type === AiAnalysisType.EMOTION_SET_ANALYZE
}

const isEmotionPeriodAnalyseResult = (type: AiAnalysisType, result: Object): result is EmotionPeriodAnalyzeResult => {
    return type === AiAnalysisType.EMOTION_PERIOD_ANALYZE
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

    if (isEmotionPeriodAnalyseResult(emotionAnalyzeResult.type, emotionAnalyzeResult.result)) {
        return <EmotionPeriodAnalyzeResultCard result={emotionAnalyzeResult.result}/>
    }

    return null;
};
