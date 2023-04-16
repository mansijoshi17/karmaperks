import { CircularProgress, Typography } from '@mui/material';
import React, { useContext, useEffect } from 'react';
import moment from 'moment'; 

const PreviewCampaign = ({ value, formdata , url}) => {
 

    return (
        <div className='col-12 col-sm-6 col-lg-5 col-md-5 mt-4'>
            <div className='align-self-center my-2'>
                <Typography variant="h6" component="div" color="text.secondary">
                    Preview NFT
                </Typography>
            </div>
            <div className='preview-card'>
                <div className='preview-nft-image'>
                    <Typography variant="h6" component="div">
                        <img src={url ? url : '/assets/images/symbol.png'} />
                    </Typography>
                </div>

                <div className='mt-2'>
                    <Typography variant="h6" component="div">
                        {formdata.title}
                    </Typography>
                    <Typography variant="body" color="text.secondary">
                        {formdata.description}
                    </Typography>

                    <p>Start Date : {moment(formdata.startDate).format('ll')}</p>
                    <p>End Date : {moment(formdata.endDate).format('ll')} </p>
                </div>
                {/* <div className='mt-2 d-flex justify-content-between'>
                    <Typography variant="h6" component="div">
                      {formdata.category}
                    </Typography> 
                    <Typography variant="h6" component="div">
                      {formdata.chain}
                    </Typography> 
                </div> */}
            </div>
            <div className='align-self-center my-4'>
                <button onClick={value.creatcampaign} className='airdrop-btn'>{value.imageLoader ? <CircularProgress  sx={{color:'white'}} /> :  'Create Campaign'}</button>
            </div>
        </div>
    );
};

export default PreviewCampaign;