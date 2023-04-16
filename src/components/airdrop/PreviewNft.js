import { Typography } from "@mui/material";
import React, { useContext } from "react";
import { AirdropContext } from "../../context/AirdropContext";
import moment from "moment";

const PreviewNft = () => {
  const value = useContext(AirdropContext);
  const formdata = value.airdropForm.formData;
  return (
    <div className="col-12 col-sm-6 col-lg-5 col-md-5 mt-4">
      <div className="align-self-center my-2">
        <Typography variant="h6" component="div" color="text.secondary">
          Preview NFT
        </Typography>
      </div>
      <div className="preview-card">
        <div className="preview-nft-image">
          <Typography variant="h6" component="div">
            <img src={value.file ? value.file : "/assets/images/symbol.png"} />
          </Typography>
        </div>

        <div className="mt-2">
          <Typography variant="h6" component="div">
            {formdata.collection}
          </Typography>
          <Typography variant="body" color="text.secondary">
            {formdata.description}
          </Typography>
          {/* <p>Start Date : {moment(formdata.startDate).format('MM/DD/YYYY')}</p>
                    <p>End Date : {moment(formdata.expiredate).format('MM/DD/YYYY')}</p> */}
        </div>
      </div>
      <div className="align-self-center my-4">
        <button className="airdrop-btn" disabled={value.loading} onClick={() => value.createAirdropofCampaign("nft")}>
          {value.loading ? "Loading..." : "Create Airdrop"}
        </button>
      </div>
    </div>
  );
};

export default PreviewNft;
