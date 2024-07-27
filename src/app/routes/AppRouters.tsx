import React from 'react';

import {
    Routes,
    Route,
    Navigate, BrowserRouter
} from 'react-router-dom';
import { LandingPage, UserHomePage } from '../pages';
import { OnlyNotAuthRoute, PrivateRoute } from '../../modules/auth/components';
import { Emotions } from '../../modules/emotions/components';

export const AppRouters: React.FC = () => (
    <BrowserRouter>
        <Routes>
            <Route
                path="/"
                element={
                    <OnlyNotAuthRoute>
                        <LandingPage/>
                    </OnlyNotAuthRoute>
                }>
            </Route>
            <Route
                path="/user"
                element={
                    <PrivateRoute>
                        <UserHomePage/>
                    </PrivateRoute>
                }
            >
                <Route
                    index
                    element={<Navigate to="/user/emotions" replace />}
                />
                <Route
                    path="/user/emotions"
                    element={
                        <Emotions/>
                    }
                />
                <Route
                    path="/user/*"
                    element={<Navigate to="/user/emotions" replace/>}
                />
            </Route>
            <Route
                path="*"
                element={<Navigate to="/" replace/>}
            />
        </Routes>
    </BrowserRouter>
);
