import React, { PropsWithChildren, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useUserStore } from '../state/useUserStore.ts';
import { useInitUserInfo } from '../use-cases/useInitUserInfo.ts';

export const PrivateRoute: React.FC<PropsWithChildren> = ({ children }) => {
    const { user, isLoading } = useUserStore();

    const initUserInfo = useInitUserInfo();

    useEffect(() => {
        initUserInfo();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
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
