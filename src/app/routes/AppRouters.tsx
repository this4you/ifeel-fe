import React from 'react';

import {
    Routes,
    Route,
    Navigate, BrowserRouter
} from 'react-router-dom';
import { LandingPage } from '../pages/LandingPage.tsx';

export const AppRouters: React.FC = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<LandingPage/>}></Route>
            <Route path="*" element={<Navigate to="/" replace/>}/>
        </Routes>
    </BrowserRouter>
);
