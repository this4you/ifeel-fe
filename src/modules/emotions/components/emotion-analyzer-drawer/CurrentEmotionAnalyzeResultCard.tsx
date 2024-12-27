import { Box, Divider, Typography } from '@mui/material';
import React from 'react';
import { CurrentEmotionAnalyzeResult } from '@emotions/models/CurrentEmotionAnalyzeResult.ts';
import { useEmotionsStore } from '@emotions/state/useEmotionsStore.ts';
import { EmotionAnalyzeResultCardFooter } from '@emotions/components/emotion-analyzer-drawer/EmotionAnalyzeResultCardFooter.tsx';

type Props = {
    result: CurrentEmotionAnalyzeResult
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
            <Typography variant="subtitle1" marginTop={'10px'} fontWeight={'bold'}>
                Emotion
            </Typography>
            <Typography variant="body2">
                {emotion?.name}
            </Typography>

            <Typography variant="subtitle1" marginTop={'10px'} fontWeight={'bold'}>
                Description
            </Typography>
            <Typography variant="body2">
                {emotion?.description}
            </Typography>

            <Divider sx={{ marginTop: '20px', marginBottom: '20px' }}/>

            <Typography variant="subtitle1">
                AI analyze
            </Typography>

            {
                childNeed && (
                    <>
                        <Typography variant="subtitle1" marginTop={'10px'} fontWeight={'bold'}>
                            Child need
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
                            Schema
                        </Typography>
                        <Typography variant="body2">
                            {schema}
                        </Typography>
                    </>
                )
            }

            {
                futureActions && (
                    <>
                        <Typography variant="subtitle1" marginTop={'10px'} fontWeight={'bold'}>
                            Future actions
                        </Typography>
                        <Typography variant="body2">
                            {futureActions}
                        </Typography>
                    </>
                )
            }

            {
                usefulConversation && (
                    <>
                        <Typography variant="subtitle1" marginTop={'10px'} fontWeight={'bold'}>
                            Useful conversation
                        </Typography>
                        <Typography variant="body2">
                            {usefulConversation}
                        </Typography>
                    </>
                )
            }

            <Divider sx={{ marginTop: '20px', marginBottom: '20px' }}/>

            <EmotionAnalyzeResultCardFooter/>
        </Box>
    );
};