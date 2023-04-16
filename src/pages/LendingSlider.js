import { Avatar, Box, Button, CircularProgress, Link } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link as RouterLink, useNavigate } from "react-router-dom";
import Slider from 'react-slick';
import SkeletonCard from '../components/assets/SkeletonCard';
import UserCard from './UserCard';
// import img from '../../public/assets/images/1.png'
import { CampaignContext } from '../context/CampaignContext';
function RecentCampaign() {

    const [story, setStory] = useState([]);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const campaignContext = React.useContext(CampaignContext);
    const { allCampaigns } = campaignContext;

    // const stories = [
    //     {
    //         name: 'Campaign 1',
    //         image: 'https://superfun.infura-ipfs.io/ipfs/bafkreifx5tdlukr4vgessa4jv4xha7rbitblikatld62r77r5tnds6gexm'
    //     },
    //     {
    //         name: 'Campaign 1',
    //         image: 'https://superfun.infura-ipfs.io/ipfs/bafkreif6pvdurm734ti3rbkndlz77o37czgpol6mr4v5xxwopnp6ie3yim'
    //     },
    //     {
    //         name: 'Campaign 2',
    //         image: 'https://superfun.infura-ipfs.io/ipfs/bafybeieelngvnvbwhu7edixraav5ivedzj7dwmanfcdi4el6lvyartzq3q'
    //     },
    //     {
    //         name: 'Campaign 3',
    //         image: 'https://superfun.infura-ipfs.io/ipfs/bafybeigxxeqxgc4ul3hfgnhhovykdrha3ocfaazr4zbmf4hwfpnhb4vsta'
    //     },
    //     {
    //         name: 'Campaign 4',
    //         image: 'https://superfun.infura-ipfs.io/ipfs/bafybeiaf6w5zdbpm5o7w6w4ljr3i67u7cyyzw2mriz7ydnglaxceqbcqta'
    //     },
    //     {
    //         name: 'Campaign 5',
    //         image: 'https://superfun.infura-ipfs.io/ipfs/bafybeigxxeqxgc4ul3hfgnhhovykdrha3ocfaazr4zbmf4hwfpnhb4vsta'
    //     },
    //     {
    //         name: 'Campaign 6',
    //         image: 'https://superfun.infura-ipfs.io/ipfs/bafybeigxxeqxgc4ul3hfgnhhovykdrha3ocfaazr4zbmf4hwfpnhb4vsta'
    //     },
    //     {
    //         name: 'Campaign 7',
    //         image: 'https://superfun.infura-ipfs.io/ipfs/bafybeigxxeqxgc4ul3hfgnhhovykdrha3ocfaazr4zbmf4hwfpnhb4vsta'
    //     },

    // ]


    
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 540,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const skele = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];




    return (
        <div className='container mt-3'>
            <div className='row'>
                <div className='col'>
                    <div className="d-flex justify-content-between mb-4 mt-3">
                        <h4>Recent Campaigns</h4>
                    </div>
                    <Slider {...settings}>
                        {
                            allCampaigns && allCampaigns.map((e, i) => {
                                return (
                                    <UserCard key={i} data={e} index={i} />
                                )
                            })
                        }
                    </Slider>
                    {
                    allCampaigns.length === 0 && <h5>No data available</h5>
                }
                </div>
            </div >

        </div >

    )
}

export default RecentCampaign

// #ef6a37, #f7b643, #468f72, #2679c1, #9a73c3