import { FC, PropsWithChildren } from 'react';
import { Box } from '@mui/material';

export const MainContent: FC<PropsWithChildren> = ({ children }) => (
    <Box sx={theme => ({
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderRadius: '40px 0 0 40px',
        backgroundColor: theme.palette.background.default
    })}>
        {children}
    </Box>
);
