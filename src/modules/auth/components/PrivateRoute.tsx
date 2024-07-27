import React, { PropsWithChildren, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useUserStore } from '../state/useUserStore.ts';
import { useInitUserInfo } from '../use-cases/useInitUserInfo.ts';
import { useAppLoadingStore } from '@commons/state/useAppLoadingStore.ts';

export const PrivateRoute: React.FC<PropsWithChildren> = ({ children }) => {
    const { isLoading } = useAppLoadingStore();
    const { user } = useUserStore();

    const initUserInfo = useInitUserInfo();

    useEffect(() => {
        initUserInfo();
    }, []);

    if (isLoading) {
        return <> </>;
    }

    if (!user) {
        return <Navigate to={'/'}/>
    }

    return (
        <>
            {children}
        </>
    );
};
