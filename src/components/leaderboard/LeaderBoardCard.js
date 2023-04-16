import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardHeader } from "@mui/material";
import BugReportIcon from "@mui/icons-material/BugReport";
import Iconify from "../dashboard/Iconify";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";

const LeaderBoardCard = ({ data, rank }) => {
  return (
    <div className="col-12 mt-3">
      <Card
        sx={{ p: 1 }}
        className="custom-card-leader d-flex justify-content-between"
      >
        <div className="d-flex align-self-center align-item-center">
          <p> #{rank}</p>
          <CardMedia
            component="img"
            alt="campaign"
            height="20"
            width="20"
            image={data.image}
            sx={{ borderRadius: "8px" }}
          />
          <CardContent className="p-2">
            <Typography variant="h6" component="div">
              {data.title}
            </Typography>
            <div className="m-1 d-block d-md-flex d-lg-flex d-sm-flex">
              <button className="card-badges text-danger">
                <BugReportIcon fontSize="15" />
                Bug Bounty
              </button>
              <button className="card-badges text-warning">
                <Iconify
                  icon="fluent-mdl2:open-source"
                  sx={{ width: 15, height: 15 }}
                />
                Open Source
              </button>
              <button className="card-badges text-success">
                <VolunteerActivismIcon fontSize="15" />
                Volunteer
              </button>
            </div>
          </CardContent>
        </div>
        <div className="d-flex  align-self-center">
          <div className="p-2 text-center align-self-center d-none d-md-block d-lg-block ">
            <Typography variant="subtitle2">Bug Bounty</Typography>
            <p>{data.bug}</p>
          </div>
          <div className="p-2 text-center align-self-center d-none d-md-block d-lg-block ">
            <Typography variant="subtitle2">Open Source</Typography>
            <p>{data.openSource}</p>
          </div>
          <div className="p-2 text-center align-self-center d-none d-md-block d-lg-block">
            <Typography variant="subtitle2">Volunteer</Typography>
            <p>{data.volunteer}</p>
          </div>
          <CardActions className="d-flex justify-content-center">
            <div className="overall-rank">
              {data.bug + data.openSource + data.volunteer}
            </div>
          </CardActions>
        </div>
      </Card>
    </div>
  );
};

export default LeaderBoardCard;
