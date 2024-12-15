import React, { ReactNode, useCallback } from 'react';
import { Box, CircularProgress, Stack, Tooltip, Typography } from '@mui/material';

type Props = {
    name: string;
    icon: ReactNode;
    onClick?: () => any;
    description?: string;
    disabled?: boolean;
    disabledInfo?: string;
    isLoading?: boolean;
};

export const EmotionAnalyzerItem: React.FC<Props> = ({
    name,
    icon,
    description,
    disabled,
    disabledInfo,
    isLoading,
    onClick
}) => {
    const onClickHandler = useCallback(() => {
        if (!disabled && onClick) {
            onClick();
        }
    }, [disabled, onClick]);

    const isDisabled = disabled || isLoading;
    const disabledText = isDisabled ? disabledInfo : '';

    return (
        <Tooltip title={isDisabled ? disabledText : ''}>
            <Stack onClick={onClickHandler} direction={'row'} sx={[{
                position: 'relative',
                padding: '20px',
                display: 'flex',
                alignItems: 'center',
                color: isDisabled ? 'text.disabled' : 'auto',
                cursor: isDisabled ? 'not-allowed' : 'pointer',
            }, {
                '&:hover': {
                    backgroundColor: 'background.default',
                },
            }]}>
                {icon}
                <Stack direction={'column'}>
                    <Typography variant={'subtitle2'} marginLeft={'20px'}>
                        {name}
                    </Typography>
                    <Typography
                        variant={'caption'}
                        marginLeft={'20px'}
                        color="text.disabled"
                    >
                        {description}
                    </Typography>
                </Stack>
                {isLoading && (
                    <Box sx={{
                        display: 'flex',
                        flex: '1',
                        justifyContent: 'end'
                    }}>
                        <CircularProgress size={30} sx={{ color: 'text.secondary' }}/>
                    </Box>
                )}
            </Stack>
        </Tooltip>
    );
};