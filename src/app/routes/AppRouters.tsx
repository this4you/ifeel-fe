import React from 'react';

import {
    Routes,
    Route,
    Navigate, BrowserRouter
} from 'react-router-dom';
import { LandingPage, EmotionsPage } from '../pages';
import { PrivateRoute } from '../../modules/auth/components';

export const AppRouters: React.FC = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<LandingPage/>}></Route>
            <Route path="/emotions" element={
                <PrivateRoute>
                    <EmotionsPage/>
                </PrivateRoute>
            }></Route>
            <Route path="*" element={<Navigate to="/" replace/>}/>
        </Routes>
    </BrowserRouter>
);
