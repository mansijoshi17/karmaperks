import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import PreviewToken from "./PreviewToken";
import { AirdropContext } from "../../context/AirdropContext";
import { CampaignContext } from "../../context/CampaignContext";
import PreviewNft from "./PreviewNft";

const NftComponent = () => {
  const Compvalue = useContext(CampaignContext);
  const value = useContext(AirdropContext);
  const formdata = value.airdropForm.formData;

  const handleImageChange = (e) => {
    const image = e.target.files[0];
    value.setFile(URL.createObjectURL(image));
  };

  return (
    <div className="row">
      <div className="col-12 col-sm-12 col-lg-6 col-md-6 mt-4">
        {value.airdropCategory === "Karma" && (
          <>
            <div className="align-self-center my-2">
              <Typography variant="h6" component="div" color="text.secondary">
                Karma Points
              </Typography>
            </div>
            <TextField
              fullWidth
              type="number"
              id="outlined-basic"
              label="Karma Point"
              variant="outlined"
              name="karma"
              value={formdata.karma}
              onChange={value.setAirdropFormdata("karma")}
            />
          </>
        )}
        {value.airdropCategory === "Campaign" && (
          <>
            <div className="align-self-center my-2">
              <Typography variant="h6" component="div" color="text.secondary">
                Select Campaign
              </Typography>
            </div>

            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Campaigns</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                defaultValue="bug"
                label="Campaign"
                name="event"
                value={formdata.event}
                onChange={value.setAirdropFormdata("event")}
              >
                {Compvalue.allCampaigns.map((comp) => (
                  <MenuItem value={comp.id}>{comp.title}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </>
        )}
        <div className="align-self-center my-2 mt-4">
          <Typography variant="h6" component="div" color="text.secondary">
            NFT Collection Name
          </Typography>
        </div>
        <TextField
          fullWidth
          type="text"
          id="outlined-basic"
          label="Collection"
          variant="outlined"
          name="collection"
          value={formdata.collection}
          onChange={value.setAirdropFormdata("collection")}
        />
        <div className="align-self-center my-2 mt-4">
          <Typography variant="h6" component="div" color="text.secondary">
            NFT Description
          </Typography>
        </div>
        <TextField
          fullWidth
          multiline
          rows={4}
          id="outlined-multiline-static"
          label="NFT description"
          variant="outlined"
          name="description"
          value={formdata.description}
          onChange={value.setAirdropFormdata("description")}
        />

        <div className="align-self-center my-2 mt-4">
          <Typography variant="h6" component="div" color="text.secondary">
            Symbol
          </Typography>
        </div>
        <TextField
          fullWidth
          type="text"
          id="outlined-basic"
          label="Symbol"
          variant="outlined"
          name="symbol"
          value={formdata.symbol}
          onChange={value.setAirdropFormdata("symbol")}
        />
       
        <FormControl fullWidth sx={{marginTop:"10px"}}>
          <InputLabel id="demo-simple-select-label">Chain</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            defaultValue="polygon"
            label="Chain"
            name="chain"
            value={formdata.chain}
            onChange={value.setAirdropFormdata("chain")}
          >
            <MenuItem value="polygon">Polygon</MenuItem>
            <MenuItem value="celo">Celo</MenuItem>
            <MenuItem value="filecoin">Filecoin</MenuItem>
            <MenuItem value="ethereum">Ethereum</MenuItem>
          </Select>
        </FormControl>

        <div className="align-self-center my-4  upload-image-btn">
          <p>PNG, GIF, WEBP,JPEG,JPG</p>
          <Button variant="contained" component="label">
            <input
              onChange={(e) => handleImageChange(e)}
              hidden
              accept="image/*"
              type="file"
            />
            Upload File
          </Button>
        </div>
      </div>
      <PreviewNft />
    </div>
  );
};

export default NftComponent;
