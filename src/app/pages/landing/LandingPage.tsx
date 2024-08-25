import React from 'react';

import { AdaptiveContainer } from '@commons/containers';
import { LandingMobilePage } from './LandingMobilePage.tsx';
import { LandingLargePage } from './LandingLargePage.tsx';
import { LandingMediumPage } from '@app/pages/landing/LandingMediumPage.tsx';

export const LandingPage: React.FC = () => (
    <AdaptiveContainer
        mobile={<LandingMobilePage/>}
        medium={<LandingMediumPage/>}
        large={<LandingLargePage/>}
    />
);
