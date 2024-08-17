import { Box, Button, Fade, IconContainerProps, Rating, styled, Typography } from '@mui/material';
import React, { useCallback, useState } from 'react';
import { useCreateEmotionSet } from '../../use-cases/useCreateEmotionSet.ts';
import { getMoodScoreItem } from '../../utils/getMoodScoreItem.tsx';


const StyledRating = styled(Rating)(({ theme }) => ({
    '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
        color: theme.palette.action.disabled,
    },
}));

function IconContainer(props: IconContainerProps) {
    const { value, ...other } = props;

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '10px'
            }}
            {...other}>
            {getMoodScoreItem(value)?.icon}
            <Typography variant={'subtitle2'}>
                {value}
            </Typography>
        </Box>
    );
}


export const MoodSelector: React.FC = () => {
    const [moodScore, setMoodScore] = useState<number | null>(null);
    const isConfirmVisible = moodScore !== null;

    const createEmotionSet = useCreateEmotionSet();

    const onConfirmClick = useCallback(() => {
        if (moodScore) {
            createEmotionSet(moodScore)
        }
    }, [moodScore, createEmotionSet])

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <Typography variant={'h5'} marginBottom={2}>
                How are you feeling now?
            </Typography>
            <StyledRating
                name="highlight-selected-only"
                max={10}
                IconContainerComponent={IconContainer}
                getLabelText={(value: number) => getMoodScoreItem(value).label}
                highlightSelectedOnly
                onChange={(_, value) => setMoodScore(value)}
            />
            {
                <Fade in={isConfirmVisible}>
                    <Button
                        sx={{ marginTop: 2 }}
                        variant={'contained'}
                        onClick={onConfirmClick}
                    >
                        Confirm
                    </Button>
                </Fade>
            }
        </Box>
    )
}