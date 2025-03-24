import { Box, Chip, Divider, Stack, Typography } from '@mui/material';
import React from 'react';
import moment from 'moment';
import { EmotionAnalyzeResultCardFooter } from './EmotionAnalyzeResultCardFooter.tsx';
import { EmotionPeriodAnalyzeResult } from "@analysis/models/EmotionPeriodAnalyzeResult.ts";

type Props = {
    result: EmotionPeriodAnalyzeResult
}

export const EmotionPeriodAnalyzeResultCard: React.FC<Props> = ({
    result
}) => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            padding: '20px',
        }}>
            <Typography variant="h6" marginTop={'10px'} marginBottom={'10px'} fontWeight={'bold'}>
                Analyze emotions period result
            </Typography>
            <Typography variant='subtitle2' color={'#9a9a9a'}>
                {moment(result.period.from).format('MMMM D, YYYY')} - {moment(result.period.to).format('MMMM D, YYYY')}
            </Typography>
            <Typography variant="subtitle1" marginTop={'50px'} marginBottom={'10px'} fontWeight={'bold'}>
                Dominant emotions:
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {result.dominantEmotions.map((it, index) => (
                    <Chip key={index} label={it} />
                ))}
            </Box>

            <Box marginTop={'30px'}>
                <Typography variant="subtitle1" fontWeight="bold">
                    Average mood score:
                </Typography>
                <Typography variant="h6" color="primary">
                    {result.averageMoodScore.toFixed(1)} / 10
                </Typography>
            </Box>

            <Box marginTop={'30px'}>
                <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
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
                        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                            🧩 Pattern {index + 1}: {pattern.pattern}
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
                <Typography variant="subtitle1" fontWeight="bold">
                    Activated schemas:
                </Typography>
                <Stack direction="row" gap={'10px'} flexWrap="wrap">
                    {result.schemasActivated.map((schema, index) => (
                        <Chip key={index} label={schema} color="warning" variant="outlined" />
                    ))}
                </Stack>
            </Box>

            <Box marginTop={'30px'}>
                <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
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
                <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                    Sentiment analysis:
                </Typography>
                <Stack direction="column" gap={'10px'}>
                    <Chip label={`😊 Positive: ${result.sentimentAnalysis.positiveEntriesPercentage}%`} sx={{ backgroundColor: 'rgba(76, 175, 80, 0.15)', color: '#4caf50' }} />
                    <Chip label={`😐 Neutral: ${result.sentimentAnalysis.neutralEntriesPercentage}%`} sx={{ backgroundColor: 'rgba(158, 158, 158, 0.15)', color: '#9e9e9e' }} />
                    <Chip label={`😞 Negative: ${result.sentimentAnalysis.negativeEntriesPercentage}%`} sx={{ backgroundColor: 'rgba(244, 67, 54, 0.15)', color: '#f44336' }} />
                </Stack>
                <Typography variant="body2" color="text.secondary" marginTop={1}>
                    Overall sentiment: <strong>{result.sentimentAnalysis.overallSentiment}</strong>
                </Typography>
            </Box>

            <Box marginTop={'30px'}>
                <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                    Recommendations:
                </Typography>
                <Stack component="ul" spacing={1} paddingLeft={2}>
                    {result.recommendations.map((rec, index) => (
                        <Typography component="li" variant="body1" key={index}>
                            {rec}
                        </Typography>
                    ))}
                </Stack>
            </Box>

            <Divider sx={{ marginTop: '20px', marginBottom: '20px' }}/>

            <EmotionAnalyzeResultCardFooter/>
        </Box>
    );
};