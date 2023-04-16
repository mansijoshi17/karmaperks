import { Button, Divider } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProfileTabs from "./ProfileTabs";
import {
  collection,
  addDoc,
  updateDoc,
  doc,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { db } from "../services/firebase";

const Profile = () => {
  const [profileData, setProfileData] = useState();

  const shortAddress = (addr) =>
    addr?.length > 10 && addr?.startsWith("0x")
      ? `${addr?.substring(0, 6)}...${addr?.substring(addr.length - 4)}`
      : addr;

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
  }, []);

  return (
    <>
      <div className="footer-top main-profile">
        <div>
          <div class="card_background_img bg-profile-pic-profile">
            <label class="-label" for="file">
              <span class="glyphicon glyphicon-camera"></span>
            </label>

            <img
              src="https://source.unsplash.com/9wg5jCEPBsw"
              id="output"
              width="200"
            />
          </div>
          <div class="card_profile_img profile-pic-profile">
            <label class="-label" for="file">
              <span class="glyphicon glyphicon-camera"></span>
            </label>

            <img src={profileData?.avatar ? profileData?.avatar : "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png"} alt='profile...' id="output" width="200" />
          </div>
        </div>
        <div className="address-profile">
          <span>
            {shortAddress(profileData?.address)}
            {/* {window.localStorage.getItem("address")} */}
          </span>
        </div>
        <div className="container edit-btn-profile">
          <Link to="/editprofile" style={{ textDecoration: "none" }}>
            <Button variant="outlined">Edit Profile</Button>
          </Link>
        </div>
        <div className="container">
          <div
            style={{ marginTop: "80px" }}
            className="  d-flex justify-content-around test-class"
          >
            <div className="profile-p">
              <p>3 KP</p>
              <span>Bug</span>
            </div>
            <Divider orientation="vertical" color="white" flexItem />
            <div className="profile-p">
              <p>5 KP</p>
              <span>Opensource</span>
            </div>
            <Divider orientation="vertical" color="white" flexItem />
            <div className="profile-p">
              <p>5 KP</p>
              <span>volunteer</span>
            </div>
            <Divider orientation="vertical" color="white" flexItem />
            <div className="profile-p">
              <p>5 KP</p>
              <span>Defi</span>
            </div>
            <Divider orientation="vertical" color="white" flexItem />
            <div className="profile-p" style={{ fontWeight: "bolder" }}>
              <p>23 KP</p>
              <span>Total</span>
            </div>
          </div>
        </div>
        <div className="container profile-tabs">
          <ProfileTabs />
        </div>
      </div>
    </>
  );
};

export default Profile;
