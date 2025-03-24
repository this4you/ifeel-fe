import { Box, Chip, Divider, Stack, Typography, Paper, LinearProgress, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';
import moment from 'moment';
import { EmotionAnalyzeResultCardFooter } from './EmotionAnalyzeResultCardFooter.tsx';
import { EmotionPeriodAnalyzeResult } from "@analysis/models/EmotionPeriodAnalyzeResult.ts";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

type Props = {
    result: EmotionPeriodAnalyzeResult
}

export const EmotionPeriodAnalyzeResultCard: React.FC<Props> = ({
    // result
}) => {
    const result: EmotionPeriodAnalyzeResult = {
        period: {
            from: "2025-03-01",
            to: "2025-03-15"
        },
        dominantEmotions: ["радість", "вдячність", "тривожність", "спокій", "збудження", "гордість", "здивування"],
        averageMoodScore: 6.8,
        identifiedPatterns: [
            {
                pattern: "Спад настрою після робочих зустрічей",
                possibleTriggers: ["тривалі мітинги", "відсутність зворотного зв'язку"],
                linkedSchemas: ["відчуття неповноцінності", "перфекціонізм"]
            },
            {
                pattern: "Покращення настрою у вихідні",
                possibleTriggers: ["спілкування з друзями", "активний відпочинок"],
                linkedSchemas: ["потреба в приналежності", "потреба в автономії"]
            }
        ],
        schemasActivated: ["страх покинутості", "невдача", "прагнення до визнання"],
        psychologicalInsights: "Ваш емоційний стан сильно залежить від зовнішньої оцінки. Ви переживаєте емоційні підйоми й спади залежно від продуктивності та соціального зворотного зв’язку.",
        recommendations: [
            "Практикуйте усвідомленість після стресових подій",
            "Щодня відзначайте свої маленькі досягнення",
            "Обмежте час перед екраном перед сном"
        ],
        sentimentAnalysis: {
            overallSentiment: "змішаний",
            positiveEntriesPercentage: 52,
            negativeEntriesPercentage: 34,
            neutralEntriesPercentage: 14
        },
        deepProfileSummary: "Ви емоційно свідомі та схильні до саморефлексії. Часто оцінюєте себе через призму результатів і соціального визнання. Створення стабільної рутини допоможе підвищити емоційну стійкість."
    };

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            padding: '20px',
        }}>
            <Typography variant="h6" marginTop={'10px'} marginBottom={'10px'} fontWeight={'bold'}>
                Emotional Summary for the Period
            </Typography>
            <Typography variant='subtitle2' color={'#9a9a9a'}>
                {moment(result.period.from).format('MMMM D, YYYY')} - {moment(result.period.to).format('MMMM D, YYYY')}
            </Typography>
            <Typography variant="subtitle1" marginTop={'20px'} marginBottom={'8px'} fontWeight={'bold'}>
                Dominant emotions:
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {result.dominantEmotions.map((it, index) => (
                    <Chip key={index} label={it} />
                ))}
            </Box>

            <Box marginTop={'30px'}>
                <Typography variant="subtitle1" fontWeight="bold" marginBottom={'8px'}>
                    Average mood score:
                </Typography>
                <Typography variant="h6" color="primary">
                    {result.averageMoodScore.toFixed(1)} / 10
                </Typography>
            </Box>

            <Box marginTop={'30px'}>
                <Typography variant="subtitle1" fontWeight="bold" marginBottom={'8px'}>
                    Identified patterns:
                </Typography>

                {result.identifiedPatterns.map((pattern, index) => (
                    <Box
                        key={index}
                        sx={{
                            padding: '16px',
                            border: '1px solid #e0e0e0',
                            borderRadius: '8px',
                            marginBottom: '16px',
                            backgroundColor: '#fafafa'
                        }}
                    >
                        <Typography variant="body1" marginBottom={'12px'}>
                            🧩 {pattern.pattern}
                        </Typography>

                        <Typography variant="subtitle2" fontWeight="medium" color="text.secondary">
                            📍 Possible triggers:
                        </Typography>
                        <Stack direction="row" flexWrap="wrap" gap={'10px'} marginBottom={1}>
                            {pattern.possibleTriggers.map((trigger, i) => (
                                <Chip key={i} size={'small'} label={trigger} variant="outlined" />
                            ))}
                        </Stack>

                        <Typography variant="subtitle2" fontWeight="medium" color="text.secondary">
                            🧠 Linked schemas:
                        </Typography>
                        <Stack direction="row" flexWrap="wrap" gap={'10px'}>
                            {pattern.linkedSchemas.map((schema, i) => (
                                <Chip key={i} size={'small'} label={schema} color="secondary" variant="outlined" />
                            ))}
                        </Stack>
                    </Box>
                ))}
            </Box>

            <Box marginTop={'30px'}>
                <Typography variant="subtitle1" fontWeight="bold" marginBottom={'8px'}>
                    Activated schemas:
                </Typography>
                <Stack direction="row" gap={'10px'} flexWrap="wrap">
                    {result.schemasActivated.map((schema, index) => (
                        <Chip key={index} label={schema} color="warning" variant="outlined" />
                    ))}
                </Stack>
            </Box>

            <Box marginTop={'30px'}>
                <Typography variant="subtitle1" fontWeight="bold" marginBottom={'8px'}>
                    Psychological analysis:
                </Typography>

                <Typography variant="subtitle2" fontWeight="medium" gutterBottom>
                    🧠 Short-term insights:
                </Typography>
                <Typography variant="body1" paragraph>
                    {result.psychologicalInsights}
                </Typography>

                <Typography variant="subtitle2" fontWeight="medium" gutterBottom>
                    🌌 Long-term profile summary:
                </Typography>
                <Typography variant="body1">
                    {result.deepProfileSummary}
                </Typography>
            </Box>

            <Box marginTop={'30px'}>
                <Typography variant="subtitle1" fontWeight="bold" marginBottom={'8px'}>
                    Sentiment analysis:
                </Typography>
                <Stack spacing={1}>
                    <Typography>😊 Positive: {result.sentimentAnalysis.positiveEntriesPercentage}%</Typography>
                    <LinearProgress variant="determinate" value={result.sentimentAnalysis.positiveEntriesPercentage} sx={{ height: 10, borderRadius: 5 }} />
                    <Typography>😐 Neutral: {result.sentimentAnalysis.neutralEntriesPercentage}%</Typography>
                    <LinearProgress variant="determinate" value={result.sentimentAnalysis.neutralEntriesPercentage} sx={{ height: 10, borderRadius: 5 }} />
                    <Typography>😞 Negative: {result.sentimentAnalysis.negativeEntriesPercentage}%</Typography>
                    <LinearProgress variant="determinate" value={result.sentimentAnalysis.negativeEntriesPercentage} sx={{ height: 10, borderRadius: 5 }} />
                </Stack>
                <Typography variant="body2" color="text.secondary" marginTop={1}>
                    Overall sentiment: <strong>{result.sentimentAnalysis.overallSentiment}</strong>
                </Typography>
            </Box>

            <Box marginTop={'30px'}>
                <Typography variant="subtitle1" fontWeight="bold" marginBottom={'8px'}>
                    Recommendations:
                </Typography>
                <List>
                    {result.recommendations.map((rec, index) => (
                        <ListItem key={index}>
                            <ListItemIcon>
                                <CheckCircleIcon color="primary" />
                            </ListItemIcon>
                            <ListItemText primary={rec} />
                        </ListItem>
                    ))}
                </List>
            </Box>

            <Divider sx={{ marginTop: '20px', marginBottom: '20px' }}/>

            <EmotionAnalyzeResultCardFooter/>
        </Box>
    );
};