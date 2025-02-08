import { AiAnalysisType } from "../models/AiAnalysisType.ts";
import { AnalyzeParams } from "../use-cases/useAnalyzeCurrentEmotion.ts";
import { baseAxios } from "@commons/api/baseAxios.ts";
import { AnalyzeResult } from "../models/AnalyzeResult.ts";

export const analyzeRest = async (
    analyzeType: AiAnalysisType,
    params: AnalyzeParams,
): Promise<AnalyzeResult> => {
    const result = await baseAxios.post<AnalyzeResult>(
        `/analysis`,
        {
            type: analyzeType,
            params: params,
        }
    );

    return result.data;
};