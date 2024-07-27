import React from 'react';

import { Box, Typography, useTheme } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import { useGoogleOAuthLogin } from '../use-cases/useGoogleOAuthLogin.ts';

export const GoogleLogin: React.FC = () => {
    const theme = useTheme();
    const googleLogin = useGoogleOAuthLogin();

    return (
        <Box
            onClick={googleLogin}
            sx={[
                {
                    width: '240px',
                    height: '50px',
                    borderRadius: theme.shape.borderRadius * 1.4,
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    cursor: 'pointer',
                    backgroundColor: theme.palette.background.default
                },
                {
                    '&:hover': {
                        backgroundColor: 'white',
                        boxShadow: '1px 4px 55px -13px rgba(66, 68, 90, 1)'
                    },
                },
            ]}>
            <GoogleIcon color="primary"/>
            <Typography variant={'subtitle2'}>
                Sing in with Google
            </Typography>
        </Box>
    )
}