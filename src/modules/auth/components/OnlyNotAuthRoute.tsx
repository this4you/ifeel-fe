import React, { PropsWithChildren, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useUserStore } from '../state/useUserStore.ts';
import { useInitUserInfo } from '../use-cases/useInitUserInfo.ts';

export const OnlyNotAuthRoute: React.FC<PropsWithChildren> = ({ children }) => {
    const { user, isLoading } = useUserStore();

    const initUserInfo = useInitUserInfo();

    useEffect(() => {
        initUserInfo();
    }, []);

    if (isLoading) {
        return <></>;
    }

    if (user) {
        return <Navigate to={'/emotions'}/>
    }

    return (
        <>
            {children}
        </>
    );
};
