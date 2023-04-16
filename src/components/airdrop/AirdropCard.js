import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia'; 
import Typography from '@mui/material/Typography';

const AirdropCard = ({data}) => {
    return (
        <div className='col-12 col-sm-6 col-md-4 col-lg-4 mt-3'>
            <Card sx={{ p: 1 }} className='custom-card'>
                <CardMedia
                    component="img"
                    alt="campaign"
                    height="200"
                    image={data.image}
                    sx={{ borderRadius: '8px' }}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                       {data.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                         {data.description}
                    </Typography> 
                </CardContent> 
            </Card>
        </div>
    );
};

export default AirdropCard;