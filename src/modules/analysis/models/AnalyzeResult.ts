import { AiAnalysisType } from "./AiAnalysisType.ts";

export type AnalyzeResult = {
    id: string;
    userId: string;
    referenceId: string;
    date: string;
    type: AiAnalysisType;
    result: object;
};
