import { Button, CircularProgress } from "@mui/material";
import zIndex from "@mui/material/styles/zIndex";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify"; 

function UserCard(props) {
  const [loading, setLoading] = useState(false);
  const [update, setUpdate] = useState(false);
   
  const navigate = useNavigate();

  const handleClickNavigate = (id) => {
    navigate(`/details/${id}`);
  }


  return (
    <div>
     
      <div
        className="story"
        style={{
          backgroundColor: 'rgba(255,255,255,0.09)',
          marginRight: "12px",
        }}
      >
        <span>
          <p>{props?.data?.title}</p>

          <img
            alt="img"
            className="imageSlider"
            style={{
              margin: "7px",
              backgroundPosition: "center",
              backgroundSize: "cover",
              borderRadius: "6px",
            }}
            src={props.data?.image}
          ></img>
        </span>
        <button
           className="sign-btn" 
          onClick={() => handleClickNavigate(props.data.id)}
        >
          {loading ? <CircularProgress size={22} /> : "Apply"}
        </button>
      </div> 
    </div>
  );
}

export default UserCard;
