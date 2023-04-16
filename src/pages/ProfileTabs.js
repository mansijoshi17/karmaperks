import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { yellow } from '@mui/material/colors';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div

            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" indicatorColor="secondary">
                    <Tab label="Contributed Compaigns" {...a11yProps(0)} className='tab-profile' />
                    <Tab label="  Achived Perks" {...a11yProps(1)} className='tab-profile' />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>

                <div className='row'>

                    <div className='col-12 col-sm-6 col-md-3 col-lg-3 mt-3'>
                        <Card sx={{ p: 1, maxWidth: 230 }} className='custom-card'>
                            <CardMedia
                                component="img"
                                alt="campaign"
                                height="200"
                                image='https://st.depositphotos.com/2001755/3622/i/600/depositphotos_36220949-stock-photo-beautiful-landscape.jpg'
                                sx={{ borderRadius: '8px' }}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div">
                                    Title
                                </Typography>

                            </CardContent>
                            <div className='tab-nft'>
                                <img className='tab1-img' src='./karma.jpg'></img><span className='span-tab1'>NFT</span>
                                <span className='span-tab1' style={{ float: "right" }}> 1 NFT</span>
                            </div>
                        </Card>
                    </div>
                    <div className='col-12 col-sm-6 col-md-3 col-lg-3 mt-3'>
                        <Card sx={{ p: 1, maxWidth: 230 }} className='custom-card'>
                            <CardMedia
                                component="img"
                                alt="campaign"
                                height="200"
                                image='https://st.depositphotos.com/2001755/3622/i/600/depositphotos_36220949-stock-photo-beautiful-landscape.jpg'
                                sx={{ borderRadius: '8px' }}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div">
                                    Title
                                </Typography>
                            </CardContent>
                            <div className='tab-nft'>
                                <img className='tab1-img' src='./karma.jpg'></img><span className='span-tab1'>NFT</span>
                                <span className='span-tab1' style={{ float: "right" }}> 1 NFT</span>
                            </div>
                        </Card>
                    </div>
                    <div className='col-12 col-sm-6 col-md-3 col-lg-3 mt-3'>
                        <Card sx={{ p: 1, maxWidth: 230 }} className='custom-card'>
                            <CardMedia
                                component="img"
                                alt="campaign"
                                height="200"
                                image='https://st.depositphotos.com/2001755/3622/i/600/depositphotos_36220949-stock-photo-beautiful-landscape.jpg'
                                sx={{ borderRadius: '8px' }}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div">
                                    Title
                                </Typography>
                            </CardContent>
                            <div className='tab-nft'>
                                <img className='tab1-img' src='./karma.jpg'></img><span className='span-tab1'>NFT</span>
                                <span className='span-tab1' style={{ float: "right" }}> 1 NFT</span>
                            </div>
                        </Card>
                    </div>

                </div>


            </TabPanel>
            <TabPanel value={value} index={1}>
                <div className='row'>
                    <div className='col-12 col-sm-6 col-md-3 col-lg-3 mt-3'>
                        <div className='container-tab'>
                            <div class="user-image">
                                <img src="https://st.depositphotos.com/2001755/3622/i/600/depositphotos_36220949-stock-photo-beautiful-landscape.jpg"
                                    alt="this image contains user-image" />
                            </div>
                            <CardContent>

                                <Typography gutterBottom variant="h6" component="div">
                                    ETH Global  2023
                                </Typography>

                            </CardContent>
                            <div className='tab-nft' style={{ float: "right" }}>
                                <img className='tab2-img' src='./polychain.png'></img><span className='span-tab1' >Chain</span>
                            </div>

                        </div>
                    </div>

                    <div className='col-12 col-sm-6 col-md-3 col-lg-3 mt-3'>
                        <div className='container-tab'>
                            <div class="user-image">
                                <img src="https://st.depositphotos.com/2001755/3622/i/600/depositphotos_36220949-stock-photo-beautiful-landscape.jpg"
                                    alt="this image contains user-image" />
                            </div>
                            <CardContent>

                                <Typography gutterBottom variant="h6" component="div">
                               Trust 2023
                                </Typography>

                            </CardContent>
                            <div className='tab-nft' style={{ float: "right" }}>
                                <img className='tab2-img' src='./polychain.png'></img><span className='span-tab1' >Chain</span>
                            </div>

                        </div>
                    </div>

                    <div className='col-12 col-sm-6 col-md-3 col-lg-3 mt-3'>
                        <div className='container-tab'>
                            <div class="user-image">
                                <img src="https://st.depositphotos.com/2001755/3622/i/600/depositphotos_36220949-stock-photo-beautiful-landscape.jpg"
                                    alt="this image contains user-image" />
                            </div>
                            <CardContent>

                                <Typography gutterBottom variant="h6" component="div">
                                Dorahacks 2023
                                </Typography>

                            </CardContent>
                            <div className='tab-nft' style={{ float: "right" }}>
                                <img className='tab2-img' src='./polychain.png'></img><span className='span-tab1' >Chain</span>
                            </div>

                        </div>
                    </div>
                </div>

            </TabPanel>

        </Box>
    );
}