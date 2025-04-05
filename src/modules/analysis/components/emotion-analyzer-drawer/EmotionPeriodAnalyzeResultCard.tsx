import { Box, Chip, Divider, Stack, Typography, LinearProgress, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';
import moment from 'moment';
import { EmotionAnalyzeResultCardFooter } from './EmotionAnalyzeResultCardFooter.tsx';
import { EmotionPeriodAnalyzeResult } from "@analysis/models/EmotionPeriodAnalyzeResult.ts";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

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
                <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                    Psychological profile summary
                </Typography>
                <Typography variant="body1" sx={{ whiteSpace: 'pre-line' }}>
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