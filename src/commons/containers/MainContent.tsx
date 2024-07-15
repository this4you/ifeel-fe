import { FC, PropsWithChildren } from 'react';
import { Box } from '@mui/material';

export const MainContent: FC<PropsWithChildren> = ({ children }) => (
    <Box>
        {children}
    </Box>
);
