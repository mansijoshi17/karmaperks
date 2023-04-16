import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom"; 
import { styled } from "@mui/material/styles";  
import DashboardNavbar from "../dashboard/DashboardNavbar";
import DashboardSidebar from "../dashboard/DashboardSidebar";

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 92;

const RootStyle = styled("div")({
  display: "flex",
  minHeight: "100%",
  overflow: "hidden",
//   backgroundColor: "rgb(238,238,238)",
  backgroundImage: `linear-gradient(to right, #010109, #08061d, #0b0c2c, #09103c, #09114c, #11145b, #1b166b, #27177a, #381c8d, #4a20a1, #5d24b4, #7127c7)`,
  });

const MainStyle = styled("div")(({ theme }) => ({
  flexGrow: 1,
  overflow: "auto",
  minHeight: "100%",
  paddingTop: APP_BAR_MOBILE + 8,
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up("lg")]: {
    paddingTop: APP_BAR_DESKTOP + 8,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));

export default function DashboardLayout() {
  const [open, setOpen] = useState(false); 

  return (
    <RootStyle>
      <DashboardNavbar onOpenSidebar={() => setOpen(true)} />
      <DashboardSidebar
        isOpenSidebar={open}
        onCloseSidebar={() => setOpen(false)}
      />
      <MainStyle>
        <Outlet />
      </MainStyle>
    </RootStyle>
  );
}
