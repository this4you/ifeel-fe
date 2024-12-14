import React, { ReactNode } from 'react';
import { Stack, Typography, useTheme } from '@mui/material';

type Props = {
    name: string;
    icon: ReactNode;
    description?: string;
};

export const EmotionAnalyzerItem: React.FC<Props> = ({
    name,
    icon,
    description
}) => {
    const { palette} = useTheme();

    return (
        <Stack direction={'row'} sx={{
            padding: '20px',
            display:'flex',
            alignItems:'center',
            cursor: 'pointer',
        }}>
            {icon}
            <Stack direction={'column'}>
                <Typography variant={'subtitle2'} marginLeft={'20px'}>
                    {name}
                </Typography>
                <Typography
                    variant={'caption'}
                    marginLeft={'20px'}
                    color={palette.text.disabled}
                >
                    {description}
                </Typography>
            </Stack>
        </Stack>
    );
};