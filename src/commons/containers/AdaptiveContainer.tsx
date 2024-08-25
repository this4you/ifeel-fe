import React, { FC } from 'react';
import { useMediaQuery, useTheme } from '@mui/material';

type AdaptiveContainerProps = {
    mobile: React.ReactNode;
    medium: React.ReactNode;
    large: React.ReactNode;
};

export const AdaptiveContainer: FC<AdaptiveContainerProps> = ({
    large,
    medium,
    mobile,
}) => {
    const { breakpoints } = useTheme();

    const isLarge = useMediaQuery(breakpoints.up('lg'));
    const isMedium = useMediaQuery(breakpoints.between('sm', 'lg'));
    const isMobile = useMediaQuery(breakpoints.down('sm'));

    if (isLarge) {
        return large;
    } else if (isMedium) {
        return medium;
    } else if (isMobile) {
        return mobile;
    }
};
