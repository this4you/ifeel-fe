import React, { PropsWithChildren, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useUserStore } from '../state/useUserStore.ts';
import { useInitUserInfo } from '../use-cases/useInitUserInfo.ts';
import { useAppLoadingStore } from '@commons/state/useAppLoadingStore.ts';
import { BASE_LOCATION } from '@commons/constants.ts';

export const OnlyNotAuthRoute: React.FC<PropsWithChildren> = ({ children }) => {
    const { isLoading } = useAppLoadingStore();
    const { user } = useUserStore();

    const initUserInfo = useInitUserInfo();

    useEffect(() => {
        initUserInfo();
    }, []);

    if (isLoading && !user) {
        return <></>;
    }

    if (user) {
        return <Navigate to={`${BASE_LOCATION}/user`}/>
    }

    return (
        <>
            {children}
        </>
    );
};
