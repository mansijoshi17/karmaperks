import React, { useEffect } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Container,
  Button,
  Tooltip,
  Avatar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { KarmaContext } from "../../context/context";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import CampaignIcon from "@mui/icons-material/Campaign";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import BoltIcon from "@mui/icons-material/Bolt";
import { Link, useNavigate } from "react-router-dom";
import {
  collection,
  addDoc,
  updateDoc,
  doc,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { db } from "../../services/firebase";
import { async } from "@firebase/util";
import { CredentialType, IDKitWidget, ISuccessResult } from "@worldcoin/idkit";

const Header = () => {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [profileData, setProfileData] = React.useState();
  const [updated, setUpdate] = React.useState(false);
  const karmaContext = React.useContext(KarmaContext);
  const { userAdd, login, connected, logout } = karmaContext;

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleNavigate = (e) => {
    navigate(`${e}`);
  };

  useEffect(() => {
    const init = async () => { 
      const add = window.localStorage.getItem("address");
      const q = query(
        collection(db, "UserProfile"),
        where("Address", "==", add)
      );
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((fire) => {
        let obj = {
          avatar: fire.data().Photo,
          bgImage: fire.data().bgImage,
          userName: fire.data().UserName,
          link: fire.data().link,
          address: fire.data().Address,
          role: fire.data().role,
        }; 
        setProfileData(obj);
      });
    };
    init();
  }, [updated]);




  const handleProof = (result) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(), 3000);
      // NOTE: Example of how to decline the verification request and show an error message to the user
    });
  };

  const onSuccess = (result) => {
     login();
  };

  const urlParams = new URLSearchParams(window.location.search);
  const credential_types = urlParams.get("credential_types")?.split(",") ?? [
    CredentialType.Orb,
    CredentialType.Phone,
  ];

  const action = urlParams.get("action") ?? "";
  const app_id = urlParams.get("app_id") ?? "wid_staging_1234";

  return (
    <AppBar
      position="static"
      sx={{
        backdropFilter: "blur(6px)",
        boxShadow: "none",
        WebkitBackdropFilter: "blur(6px)",
        backgroundColor: "transparent",
        borderBottom: "2px solid rgba(255, 255, 255, 0.12)",
        backgroundImage: "none",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to="/">
            <img src="/assets/images/karmalogo.png" className="karma-logo" />
          </Link>
          {connected ? (
            <Box
              className="header-box"
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {profileData?.role == "Community" ? (
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Button
                      startIcon={<CampaignIcon color="warning" />}
                      sx={{ color: "white", mr: 1 }}
                      onClick={() => handleNavigate("/dashboard/campaign")}
                    >
                      campaign
                    </Button>
                  </MenuItem>
                ) : (
                  ""
                )}
                <MenuItem onClick={handleCloseNavMenu}>
                  <Button
                    startIcon={<LeaderboardIcon color="warning" />}
                    sx={{ color: "white", mr: 1 }}
                    onClick={() => handleNavigate("/dashboard/leaderboard")}
                  >
                    leaderboard
                  </Button>
                </MenuItem>

                <MenuItem onClick={handleCloseNavMenu}>
                  <Button
                    startIcon={<BoltIcon color="warning" />}
                    sx={{ color: "white", mr: 1 }}
                    onClick={() => handleNavigate("/campaigns")}
                  >
                    campaigns
                  </Button>
                </MenuItem>
              </Menu>
            </Box>
          ) : (
            ""
          )}
          {connected ? (
            <>
              <Box
                sx={{
                  flexGrow: 1,
                  display: {
                    xs: "none",
                    md: "flex",
                    flexDirection: "row-reverse",
                  },
                }}
                className="header-box"
              >
                <Button
                  startIcon={<LeaderboardIcon color="warning" />}
                  onClick={() => handleNavigate("/leaderboard")}
                  sx={{ color: "white", mr: 1 }}
                >
                  leaderboard
                </Button>
                {profileData?.role == "Community" ? (
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Button
                      startIcon={<CampaignIcon color="warning" />}
                      sx={{ color: "white", mr: 1 }}
                      onClick={() => handleNavigate("/dashboard/campaign")}
                    >
                      campaign
                    </Button>
                  </MenuItem>
                ) : (
                  ""
                )}

                <Button
                  startIcon={<BoltIcon color="warning" />}
                  sx={{ color: "white", mr: 1 }}
                  onClick={() => handleNavigate("/campaigns")}
                >
                  campaigns    
                </Button>
              </Box>
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Profile">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Jaydip Patel" src={profileData?.avatar} />
                  </IconButton>
                </Tooltip>

                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Link to="/profile">
                      <Button
                        className="main-menu-btn"
                        startIcon={<PersonIcon color="warning" />}
                        sx={{ color: "white", mr: 1 }}
                      >
                        Profile
                      </Button>
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={logout}>
                    <Button
                      className="main-menu-btn"
                      startIcon={<LogoutIcon color="warning" />}
                      sx={{ color: "white", mr: 1 }}
                    >
                      Logout
                    </Button>
                  </MenuItem>
                </Menu>
              </Box>
            </>
          ) : (
            <>
              <Box
                sx={{
                  flexGrow: 1,
                  display: {
                    xs: "flex",
                    md: "flex",
                    flexDirection: "row-reverse",
                  },
                }}
              >
                <button onClick={login} className="sign-btn">
                  Sign In
                </button>
              </Box>&nbsp;
              <IDKitWidget
                action={action}
                signal="my_signal"
                onSuccess={onSuccess}
                handleVerify={handleProof}
                app_id={app_id}
                credential_types={credential_types}
                // walletConnectProjectId="get_this_from_walletconnect_portal"
              >
                {({ open }) => (
                  <button
                    onClick={open}
                    className="sign-btn"
                    sx={{
                      flexGrow: 1,
                      display: {
                        xs: "flex",
                        md: "flex",
                        flexDirection: "row-reverse",
                      },
                    }}
                  >
                    Sign In With Worldcoin
                  </button>
                )}
              </IDKitWidget>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
