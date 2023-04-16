import React, { useRef, useState } from "react";
import {
  TextField,
  Button,
  MenuItem,
  Container,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Chip,
  Divider,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import PhotoSharpIcon from "@mui/icons-material/PhotoSharp";
import dayjs from "dayjs";
// import Cimg from '../../public/assets/images/'

const chainOptions = [
  { value: "polygon", label: "Polygon" },
  { value: "ethereum", label: "Ethereum" },
];
const Campaign = () => {
  const [selectedChain, setSelectedChain] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [startDate, setStartDate] = useState(undefined);
  const [endDate, setEndDate] = useState(undefined);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [previewImage, setPreviewImage] = useState(null);

  const handleChainChange = (event) => {
    setSelectedChain(event.target.value);
  };
  const fileInputRef = useRef(null);

  const handleUploadButtonClick = () => {
    fileInputRef.current.click();
  };
  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPreviewImage(null);
    }
  };
  const handleStartTimeChange = (date) => {
    setStartDate(dayjs(date).format("MMM DD YYYY"));
  };

  const handleEndTimeChange = (date) => {
    setEndDate(dayjs(date).format("MMM DD YYYY"));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="container">
        <div className="row">
          <div
            className="offset-xs-1 offset-sm-2 offset-md-1 offset-lg-2 
          col-xs-5 col-sm-9 col-md-10 col-lg-8 mt-5"
          >
            <div className="row top-comp">
              <div className="top-comp-title col-sm-7 col-md-8 col-lg-9">
                <div className="p-2 mt-2">
                  <h1 style={{ color: "white" }}>Campaigns</h1>
                  <h5 className="campaign-h5-tag mt-md-4">
                    Empower Your Imagination, Create Epic Quests Campaign!
                  </h5>
                </div>
              </div>
              <div className="col-sm-5 col-md-4 col-lg-3 media-style">
                <img
                  src="/transtop.png"
                  className="top-comp-img"
                  alt="top-img"
                />
              </div>
              {/* 
              <div className='col-sm-12 col-md-12 col-lg-12 p-2 media-h5'>
                <h5 className='campaign-h5-tag'>Empower Your Imagination, Create Epic Quests Campaign!</h5>
              </div> */}
            </div>
          </div>
        </div>

        {/* <div className="row">
          <div className="offset-sm-2 col-sm-8">
            <div className="row top-comp">
              <div className="col-sm-10 top-comp-title">
                <h2>Campaign</h2> 
              <div className='of p-2'>
                <h5 style={{color:'white'}}>Empower Your Imagination, Create Epic Campaign!</h5>
>>>>>>> master
              </div>
              <div class="col-sm-2 media-style">
                <img src="" className="img-fluid top-comp-img" />
              </div>
              <div className="col-sm-12 media-h5">
                <h6>Empower Your Imagination, Create Epic Quests Campaign!</h6>
              </div>
            </div>
          </div>
        </div> */}

        {/* <Divider className='mt-3' /> */}
        <div className="row mb-5">
          <div className=" col-md-7 col-lg-7">
            <form onSubmit={handleSubmit}>
              <div className="form-group form-main">
                <label color="white" htmlFor="exampleInputEmail1">
                  Title
                </label>

                <TextField
                  onChange={(e) => setTitle(e.target.value)}
                  id="outlined-basic"
                  type="text"
                  variant="outlined"
                  placeholder="Enter title"
                  fullWidth
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Description</label>

                <TextField
                  onChange={(e) => setDescription(e.target.value)}
                  id="outlined-basic"
                  type="text"
                  variant="outlined"
                  placeholder="Description"
                  fullWidth
                />
              </div>
              <div className="form-group">
                <label color="white" htmlFor="selectChain">
                  Select Chain
                </label>
                <TextField
                  id="selectChain"
                  select
                  defaultValue="polygon"
                  fullWidth
                  value={selectedChain}
                  onChange={handleChainChange}
                  variant="outlined"
                >
                  {chainOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label color="white" htmlFor="startDate">
                      Start Date
                    </label>
                    <DatePicker
                      value={startDate}
                      onChange={handleStartTimeChange}
                      placeholder="Basic date picker"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label color="white" htmlFor="endDate">
                      End Date
                    </label>
                    <DatePicker
                      value={endDate}
                      onChange={handleEndTimeChange}
                      placeholder="Basic date picker"
                    />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <div className="opload-submit-btn-container">
                  <label htmlFor="uploadImage">
                    <button
                      onClick={handleUploadButtonClick}
                      className="cenetered-btn upload-button-solid"
                    >
                      Upload Image
                    </button>
                    <input
                      type="file"
                      ref={fileInputRef}
                      style={{ display: "none" }}
                      onChange={handleFileInputChange}
                    />
                  </label>
                  {/* {selectedFile && <span>{selectedFile.name}</span>} */}
                </div>
                <center>
                  {" "}
                  <button
                    type="submit"
                    className="nft-submit-btn cenetered-btn"
                  >
                    Submit
                  </button>
                </center>
              </div>
            </form>
          </div>

          <div className="col-md-5 col-lg-5">
            <div className="row">
              <div className="offset-2 col-8">
                <Card className="row nft-card mt-5">
                  <CardMedia
                    className="col-12 nft-img nft-img-container"
                    image={previewImage ? previewImage : ""}
                    title={title}
                  />
                  <Typography className="text-overlay">
                    <PhotoSharpIcon /> NFT
                  </Typography>

                  <CardContent className="col-12 nft-content">
                    <Typography className="nft-title">
                      {title ? title : "Nft title"}
                    </Typography>
                    <Typography className="nft-description">
                      {description ? description : "description"}
                    </Typography>
                    <div className="nft-chain">
                      Chain{" "}
                      <Chip
                        label={selectedChain ? selectedChain : "on chain"}
                      />
                    </div>
                    <Divider /> {/* Divider added */}
                    <div
                      className="nft-date"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography
                        style={{ fontWeight: "bold" }}
                      >{`Start Date `}</Typography>
                      <Typography>{`${
                        startDate !== undefined ? startDate : ""
                      }`}</Typography>
                    </div>
                    <div
                      className="nft-date"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography
                        style={{ fontWeight: "bold" }}
                      >{`End Date `}</Typography>
                      <Typography>{`${
                        endDate !== undefined ? endDate : ""
                      }`}</Typography>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default Campaign;
