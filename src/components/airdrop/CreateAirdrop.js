import { Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { airdropData } from "../../services/data";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Token from "./Token";
import NftComponent from "./Nft";
import { AirdropContext } from "../../context/AirdropContext";

const token = [
  {
    title: "Token",
    image: "/assets/images/crypto.png",
  },
  {
    title: "NFT",
    image: "/assets/images/nft.png",
  },
];

const CreateAirdrop = () => {
  const value = useContext(AirdropContext);
  const formdata = value.airdropForm.formData;

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="top-airdrop-banner d-flex ">
            <div className="align-self-center">
              <Typography variant="h4" component="div">
                Create Airdrop
              </Typography>
              <Typography variant="body" color="text.secondary">
                Use typography to present your design and content as clearly and
                efficiently as possible.
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-12">
          <div className="align-self-center my-2">
            <Typography variant="h6" component="div" color="text.secondary">
              Select Airdrop Categories
            </Typography>
          </div>
        </div>
        {airdropData.map((item, i) => {
          return (
            <div
              key={i}
              onClick={() => value.setAirdropCategory(item.title)}
              className="col-12 col-lg-4 col-md-4 col-sm-6 mt-2"
            >
              <div
                className={`community-card  ${
                  value.airdropCategory === item.title ? "active-card" : ""
                }`}
              >
                <Typography variant="h6" component="div">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </div>
            </div>
          );
        })}
      </div>

      <div className="row mt-4">
        <div className="col-12">
          <div className="align-self-center my-2">
            <Typography variant="h6" component="div" color="text.secondary">
              Select Airdrop Token (ERC-20 / ERC-721)
            </Typography>
          </div>
        </div>

        {token.map((item, i) => {
          return (
            <div
              onClick={() => value.setToken(item.title)}
              key={i}
              className="m-2 col-lg-3 col-md-3 col-sm-3 col-12"
            >
              <div
                className={`community-card p-4 ${
                  value.token === item.title ? "active-card" : ""
                }`}
              >
                <Typography variant="h6" component="div">
                  {item.title}
                </Typography>
              </div>
            </div>
          );
        })}
      </div>

      {value.token === "Token" && <Token />}
      {value.token === "NFT" && <NftComponent />}
    </div>
  );
};

export default CreateAirdrop;
