import { Box, Divider, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { EmotionAnalyzeResult } from '../../models/EmotionAnalyzeResult.ts';
import { useEmotionsStore } from '@emotions/state/useEmotionsStore.ts';
import { EmotionAnalyzeResultCardFooter } from './EmotionAnalyzeResultCardFooter.tsx';

type Props = {
    result: EmotionAnalyzeResult
}

export const CurrentEmotionAnalyzeResultCard: React.FC<Props> = ({
    result: {
        emotionId,
        childNeed,
        schema,
        futureActions,
        usefulConversation,
    }
}) => {
    const { emotions} = useEmotionsStore();
    const { t } = useTranslation();

    const emotion = emotions.find(it => it.id === emotionId);

    if (emotion === null) {
        return null;
    }

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            padding: '20px',
        }}>
            <Typography variant="h6" marginTop={'10px'} marginBottom={'10px'} fontWeight={'bold'}>
                {t('analyzeResult.currentEmotionTitle')}
            </Typography>
            <Typography variant="subtitle1" marginTop={'10px'} fontWeight={'bold'}>
                {t('analyzeResult.emotion')}
            </Typography>
            <Typography variant="body2">
                {emotion?.name}
            </Typography>

            <Typography variant="subtitle1" marginTop={'10px'} fontWeight={'bold'}>
                {t('analyzeResult.description')}
            </Typography>
            <Typography variant="body2">
                {emotion?.description}
            </Typography>

            <Divider sx={{ marginTop: '20px', marginBottom: '20px' }}/>

            <Typography variant="subtitle1">
                {t('analyzeResult.aiAnalyze')}
            </Typography>

            {
                childNeed && (
                    <>
                        <Typography variant="subtitle1" marginTop={'10px'} fontWeight={'bold'}>
                            {t('analyzeResult.childNeed')}
                        </Typography>
                        <Typography variant="body2">
                            {childNeed}
                        </Typography>
                    </>
                )
            }

            {
                schema && (
                    <>
                        <Typography variant="subtitle1" marginTop={'10px'} fontWeight={'bold'}>
                            {t('analyzeResult.schema')}
                        </Typography>
                        <Typography variant="body2">
                            {schema}
                        </Typography>
                    </>
                )
            }

            {
                usefulConversation && (
                    <>
                        <Typography variant="subtitle1" marginTop={'10px'} fontWeight={'bold'}>
                            {t('analyzeResult.usefulConversation')}
                        </Typography>
                        <Typography variant="body2">
                            {usefulConversation}
                        </Typography>
                    </>
                )
            }
            {
                futureActions && (
                    <>
                        <Typography variant="subtitle1" marginTop={'10px'} fontWeight={'bold'}>
                            {t('analyzeResult.futureActions')}
                        </Typography>
                        <Typography variant="body2">
                            {futureActions}
                        </Typography>
                    </>
                )
            }

            <Divider sx={{ marginTop: '20px', marginBottom: '20px' }}/>

            <EmotionAnalyzeResultCardFooter/>
        </Box>
    );
};