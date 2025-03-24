import { DatePeriod } from "@analysis/models/DatePeriod.ts";

export interface EmotionPeriodAnalyzeResult {
    period: DatePeriod;
    dominantEmotions: string[];
    averageMoodScore: number;
    identifiedPatterns: IdentifiedPattern[];
    schemasActivated: string[];
    psychologicalInsights: string;
    recommendations: string[];
    sentimentAnalysis: SentimentAnalysis;
    deepProfileSummary: string;
}

export interface IdentifiedPattern {
    pattern: string;
    possibleTriggers: string[];
    linkedSchemas: string[];
}

export interface SentimentAnalysis {
    overallSentiment: string;
    positiveEntriesPercentage: number;
    negativeEntriesPercentage: number;
    neutralEntriesPercentage: number;
}