import React from 'react';
import { useTranslation } from 'react-i18next';

import { Box, Typography, useTheme } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import { useGoogleOAuthLogin } from '../use-cases/useGoogleOAuthLogin.ts';

export const GoogleLogin: React.FC = () => {
    const theme = useTheme();
    const googleLogin = useGoogleOAuthLogin();
    const { t } = useTranslation();

    return (
        <Box
            onClick={googleLogin}
            sx={[
                {
                    width: '80%',
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
                {t('google.signIn')}
            </Typography>
        </Box>
    )
}