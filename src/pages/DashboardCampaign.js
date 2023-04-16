import React, { useEffect, useState } from 'react';
import { data } from '../services/data';
import CampaignCard from '../components/campaign/CampaignCard';
import { useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../services/firebase';

const DashboardCampaign = () => {
    const [campaignData, setCamapignData] = useState([]);
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate('/dashboard/campaign/create');
    }

    const getCampaigns = async () => {
        const array = [];
        const address = window.localStorage.getItem('address'); 
        const q = query(
            collection(db, "Campaign"),
            where("createdBy", "==", address)
        );
        const querySnapshot = await getDocs(q); 
        querySnapshot.forEach((doc) => {
            const data = doc.data(); 
            const id = doc.id;
            const obj = { ...data, id };
            array.push(obj);
        })
        setCamapignData(array);
    }

    useEffect(() => {
        getCampaigns();
    }, []) 

    return (
        <div className='container'>
            <div className='row'>
                <div className='col mt-3'>
                    <div className='d-flex justify-content-end'>
                        <button onClick={handleNavigate} className='customButton'><AddIcon fontSize='22' /> Create Campaign</button>
                    </div>
                </div>
            </div>
            <div className='row'>
                {
                  campaignData && campaignData.map((item, i) => {
                        return <CampaignCard key={i} data={item} />
                    })
                }
                {
                    campaignData.length === 0 && <h5>No data available</h5>
                }
            </div>
        </div>
    );
};

export default DashboardCampaign;