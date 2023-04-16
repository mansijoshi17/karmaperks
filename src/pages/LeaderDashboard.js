import React from 'react';
import { data } from '../services/data';
import { Typography } from '@mui/material';
import LeaderBoardCard from '../components/leaderboard/LeaderBoardCard'; 

const LeaderDashboard = () => { 
    return (
        <div className='container footer-top'>
            <div className='row'>
                <div className='col mt-3'>
                    <Typography gutterBottom variant="h5" component="div">
                        Leaderboard
                    </Typography>
                </div>
            </div>
            <div className='row'>
                {
                    data.map((item, i) => {
                        return <LeaderBoardCard key={i} data={item} rank={i}/>
                    })
                }
            </div>
        </div>
    );
};

export default LeaderDashboard;