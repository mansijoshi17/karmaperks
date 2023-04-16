import {
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
import { CampaignContext } from "../../context/CampaignContext";
import { AirdropContext } from "../../context/AirdropContext";

const Token = () => {
  const Compvalue = useContext(CampaignContext);
  const value = useContext(AirdropContext);
  const formdata = value.airdropForm.formData;

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
              <InputLabel id="demo-simple-select-label">Campaign</InputLabel>
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
        <div className="align-self-center my-2">
          <Typography variant="h6" component="div" color="text.secondary">
            Token Address
          </Typography>
        </div>

        <TextField
          fullWidth
          type="text"
          id="outlined-basic"
          label="Token"
          variant="outlined"
          name="token"
          value={formdata.token}
          onChange={value.setAirdropFormdata("token")}
        />

        <div className="align-self-center my-2 mt-4">
          <Typography variant="h6" component="div" color="text.secondary">
            Token Quentity
          </Typography>
        </div>
        <TextField
          fullWidth
          type="number"
          id="outlined-basic"
          label="Quentity"
          variant="outlined"
          name="quentity"
          value={formdata.quentity}
          onChange={value.setAirdropFormdata("quentity")}
        />
        <div className="align-self-center my-2 mt-4">
          <Typography variant="h6" component="div" color="text.secondary">
            Airdrop Title
          </Typography>
        </div>
        <TextField
          fullWidth
          type="text"
          id="outlined-basic"
          label="Airdrop Title"
          variant="outlined"
          name="title"
          value={formdata.title}
          onChange={value.setAirdropFormdata("title")}
        />
        <div className="align-self-center my-2 mt-4">
          <Typography variant="h6" component="div" color="text.secondary">
            Airdrop Description
          </Typography>
        </div>
        <TextField
          fullWidth
          multiline
          rows={4}
          id="outlined-multiline-static"
          label="Airdrop description"
          variant="outlined"
          name="description"
          value={formdata.description}
          onChange={value.setAirdropFormdata("description")}
        />

<FormControl fullWidth sx={{marginTop:"10px"}}>
                        <InputLabel id="demo-simple-select-label">Chain</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            defaultValue='polygon'
                            label="Chain"
                            name='chain'
                            value={formdata.chain}
                            onChange={value.setAirdropFormdata('chain')}
                        >
                            <MenuItem value="polygon">Polygon</MenuItem>
                            <MenuItem value="celo">Celo</MenuItem>
                            <MenuItem value="filecoin">Filecoin</MenuItem>
                            <MenuItem value="ethereum">Ethereum</MenuItem>
                        </Select>
                    </FormControl>

        <div className="d-flex justify-content-start">
          <div>
            <div className="align-self-center my-2 mt-4">
              <Typography variant="h6" component="div" color="text.secondary">
                Select Start Date
              </Typography>
            </div>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker />
            </LocalizationProvider>
          </div>
          <div className="ml-2">
            <div className="align-self-center my-2 mt-4">
              <Typography variant="h6" component="div" color="text.secondary">
                Select End Date
              </Typography>
            </div>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker />
            </LocalizationProvider>
          </div>
        </div>
      </div>
      <PreviewToken />
    </div>
  );
};

export default Token;
