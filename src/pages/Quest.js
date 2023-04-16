import React from "react";
import { Card, CardContent, Typography, CardMedia, Button, CardActions } from "@mui/material";
import BugReportIcon from '@mui/icons-material/BugReport';
import CodeIcon from '@mui/icons-material/Code';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import { Link } from "react-router-dom";



const cateData = [
    {
        title: "Bug Report",
        icon: <BugReportIcon fontSize="large" style={{ color: "white" }} />
    },
    {
        title: "Event Volunteer",
        icon: <EventAvailableOutlinedIcon fontSize="large" style={{ color: "white" }} />
    },
    {
        title: " Customer Research Interview",
        icon: <VolunteerActivismIcon fontSize="large" style={{ color: "white" }} />
    },
    {
        title: "Test Pilot",
        icon: <CurrencyBitcoinIcon fontSize="large" style={{ color: "white" }} />
    },
    {
        title: "Code Contribution",
        icon: <CodeOutlinedIcon fontSize="large" style={{ color: "white" }} />
    }
]



export default function Quest() {

    return (
        <div className="container footer-top mt-5 q-margin">
            <div className="">
                <h2 className="quest-h2-head mb-4">Categories</h2>
            </div>
            {/* <div className="row">
                <div className="col">
                    <div className="d-flex justify-content-start">
                        {
                            cateData.map((e) => {
                                return (
                                    <Card sx={{ p: 1}} className='custom-card text-center m-2'>
                                     {e.icon}
                                    <CardContent>
                                        <Typography gutterBottom variant="body" component="div">
                                            {e.title}
                                        </Typography> 
                                    </CardContent>
                                    <CardActions className='d-flex justify-content-center'>
                                        <button className='customButton' >Subscribe</button>
                                    </CardActions>
                                </Card>
                                )
                            })
                        }
                    </div>
                </div>
            </div> */}


            <div className="category-root row mt-5 mb-5">
                <div className=" col-2">

                    <Card className='category-card-1'>
                        <Link to='/bughunting' className="linkcampaigns" >

                            <CardContent className='category-card-content'>
                                <div>
                                    <BugReportIcon fontSize="large" style={{ color: "white" }} />
                                </div>
                                <Typography variant="" className='category-card-title'>
                                    Bug Report
                                </Typography>
                            </CardContent>
                        </Link>
                        <div className='btn-subscribe' >
                            <Button className="btn-subscribe" variant="contained" style={{ color: "white" }} >
                                Subscribe
                            </Button>
                        </div>

                    </Card>
                </div>
                <div className="col-2">
                    <Card className='category-card-2 '>
                        <Link to='/volunteer' className="linkcampaigns">
                            <CardContent className='category-card-content'>
                                <div>
                                    <EventAvailableOutlinedIcon fontSize="large" style={{ color: "white" }} />
                                </div>
                                <Typography variant="" className='category-card-title'>
                                    Event Volunteer
                                </Typography>
                            </CardContent>
                        </Link>
                        <div className='btn-subscribe' >
                            <Button className="btn-subscribe" variant="contained" style={{ color: "white" }} >
                                Subscribe
                            </Button>
                        </div>
                    </Card>
                </div>
                <div className="col-2">
                    <Card className='category-card-3'>
                        <Link to='/customerresearch' className="linkcampaigns">
                            <CardContent className='category-card-content'>
                                <div>
                                    <VolunteerActivismIcon fontSize="large" style={{ color: "white" }} />
                                </div>
                                <Typography variant="" className='category-card-title' style={{ fontSize: "16px" }}>
                                    Customer Research Interview
                                </Typography>
                            </CardContent>
                        </Link>
                        <div className='btn-subscribe' >
                            <Button className="btn-subscribe" variant="contained" style={{ color: "white" }} >
                                Subscribe
                            </Button>
                        </div>
                    </Card>
                </div>
                <div className="col-2">
                    <Card className='category-card-4 '>
                        <Link to='/testpilot' className="linkcampaigns">
                            <CardContent className='category-card-content'>
                                <div>
                                    <CurrencyBitcoinIcon fontSize="large" style={{ color: "white" }} />
                                </div>
                                <Typography variant="" className='category-card-title' >
                                    Test Pilot
                                </Typography>
                            </CardContent>
                        </Link>
                        <div className='btn-subscribe' >
                            <Button className="btn-subscribe" variant="contained" style={{ color: "white", marginTop: "29px" }} >
                                Subscribe
                            </Button>
                        </div>
                    </Card>
                </div>

                <div className="col-2">
                    <Card className='category-card-5'>
                        <Link to='/codecontribution' className="linkcampaigns">
                            <CardContent className='category-card-content'>
                                <div>
                                    <CodeOutlinedIcon fontSize="large" style={{ color: "white" }} />

                                </div>
                                <Typography variant="" className='category-card-title'>
                                    Code Contribution
                                </Typography>
                            </CardContent>
                        </Link>
                        <div className='btn-subscribe' >
                            <Button className="btn-subscribe" variant="contained" style={{ color: "white" }} >
                                Subscribe
                            </Button>
                        </div>
                    </Card>
                </div>

            </div>


            <div className="row">
                <div className="offset-2 col-8">
                    <h3 className="quest-h2">Embark on an Adventure of Goodness: Complete Quests and Earn Karma Tokens with Karma Perks!</h3>
                </div>
            </div>

            <div className='row mt-5 mb-5'>
                <div className='col-12 col-sm-6 col-md-3 col-lg-3 mt-3'>
                    <Card sx={{ p: 1, }} className='custom-card'>
                        <CardMedia
                            component="img"
                            alt="campaign"
                            height="200"
                            image='/assets/images/1.png'
                            sx={{ borderRadius: '8px' }}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Title
                            </Typography>

                        </CardContent>
                        <div className='tab-nft'>
                            <img className='tab1-img' src='./karma.jpg'></img><span className='span-tab1'>NFT</span>
                            <span className='span-tab1' style={{ float: "right" }}> 1 NFT</span>
                        </div>
                    </Card>
                </div>  <div className='col-12 col-sm-6 col-md-3 col-lg-3 mt-3'>
                    <Card sx={{ p: 1, }} className='custom-card'>
                        <CardMedia
                            component="img"
                            alt="campaign"
                            height="200"
                            image='/assets/images/1.png'
                            sx={{ borderRadius: '8px' }}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Title
                            </Typography>

                        </CardContent>
                        <div className='tab-nft'>
                            <img className='tab1-img' src='./karma.jpg'></img><span className='span-tab1'>NFT</span>
                            <span className='span-tab1' style={{ float: "right" }}> 1 NFT</span>
                        </div>
                    </Card>
                </div>  <div className='col-12 col-sm-6 col-md-3 col-lg-3 mt-3'>
                    <Card sx={{ p: 1, }} className='custom-card'>
                        <CardMedia
                            component="img"
                            alt="campaign"
                            height="200"
                            image='/assets/images/1.png'
                            sx={{ borderRadius: '8px' }}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Title
                            </Typography>

                        </CardContent>
                        <div className='tab-nft'>
                            <img className='tab1-img' src='./karma.jpg'></img><span className='span-tab1'>NFT</span>
                            <span className='span-tab1' style={{ float: "right" }}> 1 NFT</span>
                        </div>
                    </Card>
                </div>  <div className='col-12 col-sm-6 col-md-3 col-lg-3 mt-3'>
                    <Card sx={{ p: 1, }} className='custom-card'>
                        <CardMedia
                            component="img"
                            alt="campaign"
                            height="200"
                            image='/assets/images/1.png'
                            sx={{ borderRadius: '8px' }}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Title
                            </Typography>

                        </CardContent>
                        <div className='tab-nft'>
                            <img className='tab1-img' src='./karma.jpg'></img><span className='span-tab1'>NFT</span>
                            <span className='span-tab1' style={{ float: "right" }}> 1 NFT</span>
                        </div>
                    </Card>
                </div>    <div className='col-12 col-sm-6 col-md-3 col-lg-3 mt-3'>
                    <Card sx={{ p: 1, }} className='custom-card'>
                        <CardMedia
                            component="img"
                            alt="campaign"
                            height="200"
                            image='/assets/images/1.png'
                            sx={{ borderRadius: '8px' }}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
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
                    <Card sx={{ p: 1, }} className='custom-card'>
                        <CardMedia
                            component="img"
                            alt="campaign"
                            height="200"
                            image='/assets/images/1.png'
                            sx={{ borderRadius: '8px' }}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
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

        </div>
    );
}