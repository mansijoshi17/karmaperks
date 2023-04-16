import React, { useContext, useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { CampaignContext } from '../../context/CampaignContext';
import { CircularProgress } from '@material-ui/core';

const CampaignCard = ({ data }) => { 
    const value = useContext(CampaignContext);
    const [image,setImage]=useState('');
    const [chain,setChain]=useState('');
    useEffect(() => {
        getMetadata();
    }, [data]) 
    const getMetadata = async () => {
        const meta = await axios.get(data?.metadata); 
        const url = meta.data.image.replace("ipfs://", "https://nftstorage.link/ipfs/");  
        const obj = { ...meta.data, data };
        setChain(obj)
        setImage(url)
    }
    return (
        <div className='col-12 col-sm-6 col-md-4 col-lg-4 mt-3'>
            <Card sx={{ p: 1 }} className='custom-card'>
                <CardMedia
                    component="img"
                    alt="campaign"
                    height="200"
                    image={image ? image : '/assets/images/1.png'}
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
                <CardActions className='d-flex justify-content-center'>
                    <button className='customButton' onClick={()=>value.sendKarmaperk(chain)}>{value.loader ? <CircularProgress sx={{color:'#ccc'}}/> : "Send Perks"}</button>
                </CardActions>
            </Card>
        </div>
    );
};

export default CampaignCard;