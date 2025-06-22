import { Box, Divider, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { EmotionSetAnalyzeResult } from '../../models/EmotionSetAnalyzeResult.ts';
import { EmotionAnalyzeResultCardFooter } from './EmotionAnalyzeResultCardFooter.tsx';

type Props = {
    result: EmotionSetAnalyzeResult
}

export const CurrentEmotionSetAnalyzeResultCard: React.FC<Props> = ({
    result: {
        recommendation
    }
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
                {t('analyzeResult.emotionSetTitle')}
            </Typography>
            <Typography variant="subtitle1" fontWeight={'bold'}>
                {t('analyzeResult.recommendation')}
            </Typography>

            <Typography variant="body2" textAlign={'left'} marginTop={'10px'}>
                {recommendation}
            </Typography>

            <Divider sx={{ marginTop: '20px', marginBottom: '20px' }}/>

            <EmotionAnalyzeResultCardFooter/>
        </Box>
    );
};