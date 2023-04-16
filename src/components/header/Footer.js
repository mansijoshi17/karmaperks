import { AppBar } from "@mui/material";
import React from "react";
import { BsDiscord, BsTwitter, AiFillFacebook } from "react-icons/bs";

export default function Footer() {
    return (
        <AppBar position="static" sx={{
            backdropFilter: "blur(6px)",
            boxShadow: 'none',
            WebkitBackdropFilter: "blur(6px)",
            backgroundColor: 'transparent',
            borderBottom: '2px solid rgba(255, 255, 255, 0.12)',
            backgroundImage: 'none',
        }}>
            <div className=" ">
                <footer id="footer">
                    <div className="text">
                        Made with Karma ❤️
                    </div>

                    <div className=" "  >
                        <div className="d-flex" >
                            <a href="/" target="_blank" style={{ fontSize: "20px", color: "#488e72", marginInline: "20px" }}>
                                {<BsTwitter />}
                            </a>
                            <a href="/" target="_blank" style={{ fontSize: "20px", color: "#488e72", marginInline: "20px" }}>
                                {<BsDiscord />}
                            </a>
                        </div>
                    </div>
                </footer>
            </div>
        </AppBar>
    );
}