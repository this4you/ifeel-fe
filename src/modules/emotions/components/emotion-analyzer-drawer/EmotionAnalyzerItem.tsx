import React, { ReactNode } from 'react';
import { Stack, Tooltip, Typography } from '@mui/material';

type Props = {
    name: string;
    icon: ReactNode;
    description?: string;
    disabled?: boolean;
    disabledInfo?: string;
};

export const EmotionAnalyzerItem: React.FC<Props> = ({
    name,
    icon,
    description,
    disabled,
    disabledInfo
}) => {
    return (
        <Tooltip title={disabled ? disabledInfo : ''}>
            <Stack direction={'row'} sx={[{
                position: 'relative',
                padding: '20px',
                display: 'flex',
                alignItems: 'center',
                color: disabled ? 'text.disabled' : 'auto',
                cursor: disabled ? 'not-allowed' : 'pointer',
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
            </Stack>
        </Tooltip>
    );
};