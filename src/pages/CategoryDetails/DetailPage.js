import React, { useState, useEffect } from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import FaceIcon from "@mui/icons-material/Face";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  doc,
  getDoc,
} from "firebase/firestore";
import { db, userApplications } from "../../services/firebase";
import { TextareaAutosize } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

export default function DetailPage() {
  const [open, setOpen] = React.useState(false);
  const [campaignData, setCampaignData] = useState();
  const [metadata, setMetadata] = useState();

  const { campaignId } = useParams();
  const [userId, setUserId] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const init = async () => {
      const add = window.localStorage.getItem("address");
      const q = query(
        collection(db, "UserProfile"),
        where("Address", "==", add)
      );
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((fire) => {
        setUserId(fire.id);
      });
    };
    init();
  }, []);

  useEffect(() => {
    getCampaigndata();
  }, [campaignId]);

  const getCampaigndata = async () => {
    const docRef = doc(db, "Campaign", campaignId);
    getDoc(docRef)
      .then(async (doc) => {
        if (doc.exists()) {
          console.log("Document data:", doc.data());
          setCampaignData(doc.data());
          const data = await axios.get(doc.data().metadata);
          console.log(data.data, "data");
          const url = data.data.image.replace("ipfs://", "https://nftstorage.link/ipfs/");
          const obj = { ...doc.data(), url };
          setCampaignData(obj)
          setMetadata(data.data)
        } else {
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });

  }

  const applyCampaign = async () => {
    setLoading(true);
    const userData = {
      walletAddress: window.localStorage.getItem("address"),
      campaignId: campaignId,
      communityId: userId,
    };
    const docRef = await addDoc(collection(db, "userApplications"), userData);
    toast.success("Apply Sucessfully!");
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="footer-top">
      <div className="container detail-img mb-4">
        <div className="row">
          <div className="col-8 mx-auto">
            <img height="300" src={campaignData?.url ? campaignData?.url : "/assets/images/detail.png"} alt="detail...." />

            <div>
              <h3 className="h1-detail">{campaignData?.title}</h3>
              <p className="p-detail">
                {campaignData?.description}
              </p>

            </div>
            <div className="chain-detail">
              <span>Campaign Name :- {metadata?.name} </span>

            </div>
            <div className="chain-detail">
              <span>category:- {metadata?.category}</span>

            </div>
            <div className="chain-detail">
              <span>Start Date:- {metadata?.startDate}</span>
            </div>
            <div className="chain-detail">
              <span>End Date:- {metadata?.expireDate}</span>
            </div>
            <div className="">
              <Stack direction="row" spacing={1} className="chip-detail">
                <Chip icon={<FaceIcon />} label="100 KP" />
              </Stack>
            </div>
            <span className="detail-reward">Reward:</span>
              {/* <img className="tab1-img" src="./karma.jpg"></img> */}
              <span className="detail-span2">NFT</span>
              <span className="detail-span2"> 1 KP</span> 

              <div className="m-2">
              <Button 
                onClick={handleClickOpen}
                variant="outlined"
                className="detail-btn" 
              >
                {" "}
                Apply
              </Button> 
              </div>
           

              <div>
                <Dialog
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogTitle id="alert-dialog-title">
                    {"Brief reason for applying :)"}
                  </DialogTitle>
                  <DialogContent>
                    <TextareaAutosize
                      aria-label="minimum height"
                      minRows={3}
                      placeholder="Write reason..."
                      style={{ width: 400, borderRadius: "4px" }}
                    />
                  </DialogContent>
                  <DialogActions>
                    <Button
                      variant="contained"
                      onClick={applyCampaign}
                      autoFocus
                    >
                      Apply
                    </Button>
                  </DialogActions>
                </Dialog>

              </div>
            </div>
          </div>
        </div>
      </div> 
  );
}
