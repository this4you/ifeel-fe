import { Box, Button, Divider, IconButton, Stack, Typography } from '@mui/material';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import React from 'react';
import { CurrentEmotionAnalyzeResult } from '@emotions/models/CurrentEmotionAnalyzeResult.ts';
import { useEmotionsStore } from '@emotions/state/useEmotionsStore.ts';
import { useCloseEmotionResult } from '@emotions/use-cases/useCloseEmotionResult.ts';

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
    const closeEmotionResult = useCloseEmotionResult();
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

            <Stack
                direction="row"
                justifyContent={'space-between'}
                alignItems={'center'}
                marginBottom={'20px'}
            >
                <Stack direction="row">
                    <IconButton
                        sx={{
                            width: '40px',
                            height: '40px'
                        }}
                    >
                        <ThumbUpOffAltIcon/>
                    </IconButton>
                    <IconButton
                        sx={{
                            width: '40px',
                            height: '40px'
                        }}
                    >
                        <ThumbDownOffAltIcon/>
                    </IconButton>
                </Stack>
                <Button
                    color={'inherit'}
                    variant={'contained'}
                    sx={{
                        width: '100px'
                    }}
                    onClick={closeEmotionResult}
                >
                    Close
                </Button>
            </Stack>
        </Box>
    );
};