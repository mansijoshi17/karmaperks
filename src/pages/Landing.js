import { Button } from '@mui/material';
import React from 'react';
import { KarmaContext } from '../context/context';
import RecentCampaign from './LendingSlider';
import LendingCards from './LendingCards'
const LandingPage = () => {
    const karmaContext = React.useContext(KarmaContext);
    const { login } = karmaContext;
    return ( 
            <div className='footer-top justify-content-between'>
                <RecentCampaign />
                <LendingCards />
            </div> 
    );
};

export default LandingPage;