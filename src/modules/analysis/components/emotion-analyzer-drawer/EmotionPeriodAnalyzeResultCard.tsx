import { Box, Chip, Divider, Stack, Typography, LinearProgress, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
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
    const { t } = useTranslation();
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            padding: '20px',
        }}>
            <Typography variant="h6" marginTop={'10px'} marginBottom={'10px'} fontWeight={'bold'}>
                {t('analyzeResult.periodSummaryTitle')}
            </Typography>
            <Typography variant='subtitle2' color={'#9a9a9a'}>
                {moment(result.period.from).format('MMMM D, YYYY')} - {moment(result.period.to).format('MMMM D, YYYY')}
            </Typography>
            <Typography variant="subtitle1" marginTop={'20px'} marginBottom={'8px'} fontWeight={'bold'}>
                {t('analyzeResult.dominantEmotions')}
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {result.dominantEmotions.map((it, index) => (
                    <Chip key={index} label={it} />
                ))}
            </Box>

            <Box marginTop={'30px'}>
                <Typography variant="subtitle1" fontWeight="bold" marginBottom={'8px'}>
                    {t('analyzeResult.averageMood')}
                </Typography>
                <Typography variant="h6" color="primary">
                    {result.averageMoodScore.toFixed(1)} / 10
                </Typography>
            </Box>

            <Box marginTop={'30px'}>
                <Typography variant="subtitle1" fontWeight="bold" marginBottom={'8px'}>
                    {t('analyzeResult.identifiedPatterns')}
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
                            📍 {t('analyzeResult.possibleTriggers')}
                        </Typography>
                        <Stack direction="row" flexWrap="wrap" gap={'10px'} marginBottom={1}>
                            {pattern.possibleTriggers.map((trigger, i) => (
                                <Chip key={i} size={'small'} label={trigger} variant="outlined" />
                            ))}
                        </Stack>

                        <Typography variant="subtitle2" fontWeight="medium" color="text.secondary">
                            🧠 {t('analyzeResult.linkedSchemas')}
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
                    {t('analyzeResult.activatedSchemas')}
                </Typography>
                <Stack direction="row" gap={'10px'} flexWrap="wrap">
                    {result.schemasActivated.map((schema, index) => (
                        <Chip key={index} label={schema} color="warning" variant="outlined" />
                    ))}
                </Stack>
            </Box>

            <Box marginTop={'30px'}>
                <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                    {t('analyzeResult.profileSummary')}
                </Typography>
                <Typography variant="body1" sx={{ whiteSpace: 'pre-line' }}>
                    {result.deepProfileSummary}
                </Typography>
            </Box>

            <Box marginTop={'30px'}>
                <Typography variant="subtitle1" fontWeight="bold" marginBottom={'8px'}>
                    {t('analyzeResult.sentimentAnalysis')}
                </Typography>
                <Stack spacing={1}>
                    <Typography>😊 {t('analyzeResult.positive')}: {result.sentimentAnalysis.positiveEntriesPercentage}%</Typography>
                    <LinearProgress variant="determinate" value={result.sentimentAnalysis.positiveEntriesPercentage} sx={{ height: 10, borderRadius: 5 }} />
                    <Typography>😐 {t('analyzeResult.neutral')}: {result.sentimentAnalysis.neutralEntriesPercentage}%</Typography>
                    <LinearProgress variant="determinate" value={result.sentimentAnalysis.neutralEntriesPercentage} sx={{ height: 10, borderRadius: 5 }} />
                    <Typography>😞 {t('analyzeResult.negative')}: {result.sentimentAnalysis.negativeEntriesPercentage}%</Typography>
                    <LinearProgress variant="determinate" value={result.sentimentAnalysis.negativeEntriesPercentage} sx={{ height: 10, borderRadius: 5 }} />
                </Stack>
                <Typography variant="body2" color="text.secondary" marginTop={1}>
                    {t('analyzeResult.overallSentiment')} <strong>{result.sentimentAnalysis.overallSentiment}</strong>
                </Typography>
            </Box>

            <Box marginTop={'30px'}>
                <Typography variant="subtitle1" fontWeight="bold" marginBottom={'8px'}>
                    {t('analyzeResult.recommendations')}
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