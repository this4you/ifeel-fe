import React from 'react';

import {
    Routes,
    Route,
    Navigate, BrowserRouter
} from 'react-router-dom';
import { LandingPage, UserHomePage } from '../pages';
import { OnlyNotAuthRoute, PrivateRoute } from '@auth/components';
import { Emotions } from '../../modules/emotions/components';
import { BASE_LOCATION } from '@commons/constants.ts';

export const AppRouters: React.FC = () => (
    <BrowserRouter>
        <Routes>
            <Route
                path="/ifeel-fe"
                element={
                    <OnlyNotAuthRoute>
                        <LandingPage/>
                    </OnlyNotAuthRoute>
                }>
            </Route>
            <Route
                path={`${BASE_LOCATION}/user`}
                element={
                    <PrivateRoute>
                        <UserHomePage/>
                    </PrivateRoute>
                }
            >
                <Route
                    index
                    element={<Navigate to={`${BASE_LOCATION}/user/emotions`} replace />}
                />
                <Route
                    path={`${BASE_LOCATION}/user/emotions`}
                    element={
                        <Emotions/>
                    }
                />
                <Route
                    path={`${BASE_LOCATION}/user/*`}
                    element={<Navigate to={`${BASE_LOCATION}/user/emotions`} replace/>}
                />
            </Route>
            <Route
                path="*"
                element={<Navigate to={`/${BASE_LOCATION}`} replace/>}
            />
        </Routes>
    </BrowserRouter>
);
