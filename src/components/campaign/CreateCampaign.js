import { Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react'; 
import PreviewCampaign from './Preview';
import { CampaignContext } from '../../context/CampaignContext';


const CreateCampaign = () => {
    const value = useContext(CampaignContext);
    const formdata = value.campaignForm.formData; 

    const [previewUrl, setPreviewUrl]= useState('');
 
    const handleUploadImage = async (e) => {
        const image = e.target.files[0];
        const url = URL.createObjectURL(image);
        setPreviewUrl(url)
        value.setImage(url);
    }

    const handleUploadBadge = async (e) => {
        const image = e.target.files[0]; 
        const url = URL.createObjectURL(image);
        value.setBadge(url);
    } 


    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <div className='top-airdrop-banner d-flex '>
                        <div className='align-self-center'>
                            <Typography variant="h4" component="div">
                                Create Campaign
                            </Typography>
                            <Typography variant="body" color="text.secondary">
                                Use typography to present your design and content as clearly and efficiently as possible.
                            </Typography>
                        </div>

                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-12 col-sm-12 col-lg-6 col-md-6 mt-4'>
                    <div className='align-self-center my-2'>
                        <Typography variant="h6" component="div" color="text.secondary">
                            Select Campaign Category
                        </Typography>
                    </div>

                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Category</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            defaultValue='bug'
                            label="Category"
                            name='category'
                            value={formdata.category}
                            onChange={value.setCampaignFormdata('category')}
                        >
                            <MenuItem value="bug">Bug Report</MenuItem>
                            <MenuItem value="research">Customer Research Interview</MenuItem>
                            <MenuItem value="test">Test Pilot</MenuItem>
                            <MenuItem value="volunteer">Event Volunteer</MenuItem>
                            <MenuItem value="contribution">Code Contribution</MenuItem>
                        </Select>
                    </FormControl>

                    <div className='align-self-center my-2 mt-4'>
                        <Typography variant="h6" component="div" color="text.secondary">
                            Campaign Title
                        </Typography>
                    </div>
                    <TextField
                        fullWidth type='text'
                        id="outlined-basic"
                        label="Campaign Title"
                        variant="outlined"
                        name='title'
                        value={formdata.title}
                        onChange={value.setCampaignFormdata('title')}

                    />
                    <div className='align-self-center my-2 mt-4'>
                        <Typography variant="h6" component="div" color="text.secondary">
                            Campaign Description
                        </Typography>
                    </div>
                    <TextField fullWidth
                        multiline
                        rows={4}
                        id="outlined-multiline-static"
                        label="Campaign description"
                        variant="outlined"
                        name='description'
                        value={formdata.description}
                        onChange={value.setCampaignFormdata('description')}
                    />

                    <div className='align-self-center my-2 mt-4'>
                        <Typography variant="h6" component="div" color="text.secondary">
                            Select Chain
                        </Typography>
                    </div>

                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Chain</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            defaultValue='polygon'
                            label="Chain"
                            name='chain'
                            value={formdata.chain}
                            onChange={value.setCampaignFormdata('chain')}
                        >
                            <MenuItem value="polygon">Polygon</MenuItem>
                            <MenuItem value="celo">Celo</MenuItem>
                            <MenuItem value="filecoin">Filecoin</MenuItem>
                            <MenuItem value="ethereum">Ethereum</MenuItem>
                        </Select>
                    </FormControl>

                    <div className='d-flex justify-content-start'>
                        <div>
                            <div className='align-self-center my-2 mt-4'>
                                <Typography variant="h6" component="div" color="text.secondary">
                                    Select Start Date
                                </Typography>
                            </div>
                            
                            <TextField
                                id="date"
                                fullWidth
                                label="Start Date"
                                type="date"
                                InputLabelProps={{
                                    shrink: true,
                                    color:'secondary'
                                }}
                                name="startDate"
                                onChange={value.setCampaignFormdata("startDate")}
                                value={formdata.startDate}
                            />
                        </div>

                        <div className='ml-2'>
                            <div className='align-self-center my-2 mt-4'>
                                <Typography variant="h6" component="div" color="text.secondary">
                                    Select End Date
                                </Typography>
                            </div> 
                            <TextField
                                id="date"
                                label="End Date"
                                type="date"
                                fullWidth
                                InputLabelProps={{
                                    shrink: true,
                                    color:'secondary', 
                                }}
                                name="endDate"
                                onChange={value.setCampaignFormdata("endDate")}
                                value={formdata.endDate}
                            /> 
                        </div>
                    </div>
                    <div className='align-self-center my-4  upload-image-btn'>
                        <p>PNG, GIF, WEBP,JPEG,JPG</p>
                        <Button variant='contained' component="label">
                            <input onChange={(e) => handleUploadImage(e)} hidden accept="image/*" type="file" />
                            Upload Image
                        </Button>
                    </div>
                    <div className='align-self-center my-4  upload-image-btn'>
                        <p>PNG, GIF, WEBP,JPEG,JPG</p>
                        <Button variant='contained' component="label">
                            <input onChange={(e) => handleUploadBadge(e)} hidden accept="image/*" type="file" />
                            Upload Badge
                        </Button>
                    </div>
                </div>
                <PreviewCampaign value={value} formdata={formdata} url={previewUrl} />
            </div>
        </div>
    );
};

export default CreateCampaign;