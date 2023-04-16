import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { data } from '../services/data'
import { CampaignContext } from '../context/CampaignContext';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function LendingCards() {

    const campaignContext = React.useContext(CampaignContext);
    const { allCampaigns } = campaignContext;
    return (
        <div className='container mb-5'>
            <div className=' mt-5 mb-0'>
                <h4>Upcoming Compaigns</h4>
            </div>

            <div className='row  mt-4'>  
                 
                    {allCampaigns && allCampaigns.map((item, i) => {
                        return (
                            <div  key={i} className='col-12 col-lg-3 col-md-3 col-sm-6 mt-4'>
                            <ImageListItem> 
                                    <Card sx={{ p: 1 }} className='custom-card'>
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
                                            <Typography variant="body2" color="text.secondary">
                                                {item.description}
                                            </Typography>
                                        </CardContent>
                                         
                                    </Card> 
                            </ImageListItem>
                            </div>
                        )
                    })}  
                 
            </div>
        </div>
    )
}
