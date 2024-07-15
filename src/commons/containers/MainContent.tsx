import { FC, PropsWithChildren } from 'react';
import { Box } from '@mui/material';

export const MainContent: FC<PropsWithChildren> = ({ children }) => (
    <Box sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    }}>
        {children}
    </Box>
);
