import React, { useEffect } from "react";
import PropTypes from "prop-types"; 
import { Link as RouterLink, useLocation } from "react-router-dom"; 
import { styled } from "@mui/material/styles";
import {
  Box,
  Link,
  Button,
  Drawer,
  Typography,
  Avatar,
  Stack,
} from "@mui/material"; 
import NavSection from "./NavSection";
import Scrollbar from "./Scrollbar";
import useResponsive from "./useResponsive";
import sidebarConfig from "./SidebarConfig";
import Logo from "./Logo";

const DRAWER_WIDTH = 250;

const RootStyle = styled("div")(({ theme }) => ({
  backgroundColor: 'transparent', 
  backgroundImage:'none',
  [theme.breakpoints.up("lg")]: {
    flexShrink: 0,
    width: DRAWER_WIDTH,
  },
}));

 
// ----------------------------------------------------------------------

DashboardSidebar.propTypes = {
  isOpenSidebar: PropTypes.bool,
  onCloseSidebar: PropTypes.func,
};

export default function DashboardSidebar({ isOpenSidebar, onCloseSidebar }) {
  const { pathname } = useLocation();

  const isDesktop = useResponsive("up", "lg");

  useEffect(() => {
    if (isOpenSidebar) {
      onCloseSidebar();
    }
  }, [pathname]);

  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,
        "& .simplebar-content": {
          height: 1,
          display: "flex",
          flexDirection: "column",
        },
      }}
    >
      <Box>
       <Logo/>
      </Box> 
      <NavSection navConfig={sidebarConfig} />  
    </Scrollbar>
  );

  return (
    <RootStyle>
      {!isDesktop && (
        <Drawer
          open={isOpenSidebar}
          onClose={onCloseSidebar}
          PaperProps={{
            sx: {
               width: DRAWER_WIDTH,
               bgcolor: '#09114c', 
               backgroundImage: 'linear-gradient(to bottom, #474762, #43436a, #3f3f73, #3b3b7a, #373782, #3f3b8e, #483f99, #5243a5, #6a51b8);',
             }, 
          }}
        >
          {renderContent}
        </Drawer>
      )}

      {isDesktop && (
        <Drawer
          open
          variant="persistent"
          PaperProps={{
            sx: {
              width: DRAWER_WIDTH, 
              bgcolor: 'transparent', 
              backgroundImage:'none',
              borderRightStyle: "dashed",
            },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </RootStyle>
  );
}
