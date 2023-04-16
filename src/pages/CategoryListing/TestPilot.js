import * as React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CampaignContext } from '../../context/CampaignContext';

export default function TestPilot() {
    const campaignContext = React.useContext(CampaignContext);
    const { allCampaigns } = campaignContext;
    return (
        <>
            <div className='container listing-pg footer-top'>
            <div className='row'>
                    {
                        allCampaigns && allCampaigns.map((item) => {
                            if (item.category === "test") {
                                return (
                                    <div className='col-12 col-sm-6 col-md-3 col-lg-3 mt-3'>
                                        <Card sx={{ p: 1, }} className='custom-card'>
                                            <CardMedia
                                                component="img"
                                                alt="campaign"
                                                height="200"
                                                image={item.image}
                                                sx={{ borderRadius: '8px' }}
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    {item.title}
                                                </Typography>

                                            </CardContent>
                                            <div className='tab-nft'>
                                                <img alt='img' className='tab1-img' src='./xp.png'></img><span className='span-tab1'>NFT</span>
                                                <span className='span-tab1' style={{ float: "right" }}> 1 NFT</span>
                                            </div>
                                        </Card>
                                    </div>
                                )
                            }
                        })
                    }
                </div>
            </div>

        </>
    )
}
