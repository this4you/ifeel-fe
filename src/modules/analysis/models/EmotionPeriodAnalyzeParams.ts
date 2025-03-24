import { AnalyzeParams } from "./AnalyzeParams.ts";
import { DatePeriod } from "@analysis/models/DatePeriod.ts";

export type EmotionPeriodAnalyzeParams = {
    period: DatePeriod;
} & AnalyzeParams;