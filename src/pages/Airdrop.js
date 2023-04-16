import React from 'react';
import { data } from '../services/data'; 
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';
import AirdropCard from '../components/airdrop/AirdropCard';

const Airdrop = () => {
    const navigate = useNavigate();
    
    const handleNavigate=()=>{
        navigate('/dashboard/airdrop/create');
    }
    return (
        <div className='container'>
            <div className='row'>
                <div className='col mt-3'>
                    <div className='d-flex justify-content-end'>
                        <button onClick={handleNavigate} className='customButton'><AddIcon fontSize='22' /> Create Airdrop</button>
                    </div>
                </div>
            </div>
            <div className='row'>
                {
                    data.map((item, i) => {
                        return <AirdropCard key={i} data={item} />
                    })
                }
            </div>
        </div>
    );
};

export default Airdrop;