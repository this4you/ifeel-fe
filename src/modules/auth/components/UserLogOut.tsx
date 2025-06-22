import React from 'react';
import { useTranslation } from 'react-i18next';
import { MdLogout } from 'react-icons/md';
import { Stack, Typography, useTheme } from '@mui/material';
import { useInitUserInfo } from '../use-cases/useUserLogOut.ts';

export const UserLogOut: React.FC = () => {
    const { spacing, palette } = useTheme();
    const logOut = useInitUserInfo();
    const { t } = useTranslation();

    return (
        <Stack
            onClick={logOut}
            marginTop={spacing(3)}
            direction={'row'}
            alignItems={'center'}
            color={palette.common.white}
            gap={spacing(2)}
            sx={{
                cursor: 'pointer'
            }}>
            <MdLogout size={'30'}/>
            <Typography variant={'subtitle2'}>
                {t('google.logOut')}
            </Typography>
        </Stack>
    );
}