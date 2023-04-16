import { Button, CircularProgress } from '@mui/material';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function UserCard(props) {
    const [loading, setLoading] = useState(false);
    const [update, setUpdate] = useState(false);

    const navigate = useNavigate();

    const isPrime = num => {
        for (let i = 2; i < num; i++)
            if (num % i === 0) return false;
        return num > 1;
    }
    const isOdd = (num) => { return num % 2; }
    const getBackGroundColor = (num) => {
        let color = '#9a73c3';
        if (num === 0) {
            color = '#2679c1';
        }
        if (isOdd(num)) {
            color = '#ef6a37';
        } else {
            color = '#468f72';
        }
        if (isPrime(num)) {
            color = '#f7b643'
        }
        return color;
    }

    const handleNavigate = (id) => {
        navigate(`/newprofile/${id}`)
    }


    return (
        <div >
            <div className="story" style={{ backgroundColor: getBackGroundColor(4) }} >
                    <p> title here</p>
                    <div className='image'
                        style={{
                            backgroundImage: `linear-gradient(360deg, rgba(0,0,0,0.1) 100%, rgba(0,0,0,0.1) 100%), url(https://superfun.infura-ipfs.io/ipfs/QmRY4nWq3tr6SZPUbs1Q4c8jBnLB296zS249n9pRjfdobF)`
                                     ,
                            height: "100px", margin: "7px",
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            borderRadius: '6px'
                        }}
                    ></div>
                <Button
                    variant="contained"
                    size="small"
                    style={{ backgroundColor: 'black', color: getBackGroundColor(4), fontWeight: "bold" }}
                >{loading ? <CircularProgress size={20} /> : "Follow"}
                </Button>

            </div>
        </div>
    )
}

export default UserCard