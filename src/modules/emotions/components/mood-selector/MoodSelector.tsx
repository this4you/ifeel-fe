import { Box, Button, Fade, IconContainerProps, Rating, styled, Typography } from '@mui/material';
import React, { useState } from 'react';


const StyledRating = styled(Rating)(({ theme }) => ({
    '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
        color: theme.palette.action.disabled,
    },
}));

const customIcons: {
    [index: string]: {
        icon: React.ReactElement;
        label: string;
    };
} = {
    1: {
        icon: <span>😢</span>,
        label: '',
    },
    2: {
        icon: <span>😞</span>,
        label: '',
    },
    3: {
        icon: <span>😟</span>,
        label: '',
    },
    4: {
        icon: <span>😐</span>,
        label: '',
    },
    5: {
        icon: <span>😌</span>,
        label: '',
    },
    6: {
        icon: <span>🙂</span>,
        label: '',
    },
    7: {
        icon: <span>😃</span>,
        label: '',
    },
    8: {
        icon: <span>😊</span>,
        label: 'Neutral',
    },
    9: {
        icon: <span>😍</span>,
        label: 'Satisfied',
    },
    10: {
        icon: <span>😎</span>,
        label: 'Very Satisfied',
    },
};

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
            {customIcons[value].icon}
            <Typography variant={'subtitle2'}>
                {value}
            </Typography>
        </Box>
    );
}


export const MoodSelector: React.FC = () => {
    const [mood, setMood] = useState<number | null>(null);
    const isConfirmVisible = mood !== null;

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
                getLabelText={(value: number) => customIcons[value].label}
                highlightSelectedOnly
                onChange={(_, value) => setMood(value)}
            />
            {
                <Fade in={isConfirmVisible}>
                    <Button
                        sx={{ marginTop: 2 }}
                        variant={'contained'}>
                        Confirm
                    </Button>
                </Fade>
            }
        </Box>
    )
}