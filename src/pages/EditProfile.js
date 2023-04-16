 
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
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
import { toast } from "react-toastify";

export default function EditProfile() {
  const storage = getStorage();
  const [update, setUpdate] = useState(false);
  const [loading, setLoading] = useState(false);
  const [profileData, setProfileData] = useState({
    avatar:
      "https://cdn.pixabay.com/photo/2017/08/06/21/01/louvre-2596278_960_720.jpg",
    bgImage: "https://source.unsplash.com/9wg5jCEPBsw",
    userName: "",
    link: "",
    address: "",
    role: "Community",
  });

  async function onChangeAvatar(e) {
    setLoading(true);

    const file = e.target.files[0];
    const storageRef = ref(storage, `profile/${file.name}`);
    uploadBytes(storageRef, file).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setProfileData({ ...profileData, avatar: url });
      });
    });
    setLoading(false);
  }

  async function onChangeBgImage(e) {
    setLoading(true);

    const file = e.target.files[0];
    const storageRef = ref(storage, `bg/${file.name}`);
    uploadBytes(storageRef, file).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setProfileData({ ...profileData, bgImage: url });
      });
    });
    setLoading(false);
  }

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
  }, [update]);

  const updateProfile = async () => {
    try {
      setLoading(true);
      const add = window.localStorage.getItem("address");
      const data = {
        UserName: profileData.userName,
        link: profileData.link,
        Photo: profileData.avatar,
        bgImage: profileData.bgImage,
        Address: add,
        CreatedAt: new Date(),
        role: profileData.role,
      };
      const q = query(
        collection(db, "UserProfile"),
        where("Address", "==", add)
      );
      const querySnapshot = await getDocs(q);
      if (querySnapshot.empty) {
        addDoc(collection(db, "UserProfile"), data);
        setUpdate(!update);
        alert("Profile successfully Added!");
      } else {
        querySnapshot.forEach((fire) => {
          const data = {
            UserName:
              profileData.userName !== ""
                ? profileData.userName
                : fire.data().UserName,
            link: profileData.link !== "" ? profileData.link : fire.data().link,
            Photo:
              profileData.avatar !== ""
                ? profileData.avatar
                : fire.data().Photo,
            bgImage:
              profileData.bgImage !== ""
                ? profileData.bgImage
                : fire.data().bgImage,
            Address: add,
            UpdatedAt: new Date(),
            role: profileData.role !== "" ? profileData.role : fire.data().role,
          };
          const dataref = doc(db, "UserProfile", fire.id); 
          alert("Profile successfully updated!!");
          updateDoc(dataref, data);
          setUpdate(!update);
          setLoading(false);
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container width-small footer-top">
        <div className="container">
          <div className="card_background_img bg-profile-pic">
            {/* <label className="-label" for="file">
              <span className="glyphicon glyphicon-camera"></span>
              <span>Change Bg Image</span>
            </label>
            <input id="file-1" type="file" onChange={(e) => onChangeBgImage(e)} />
            <img src={profileData.bgImage} id="bg" width="200" /> */}
          </div>
          <div className="card_profile_img profile-pic">
            <label className="-label" for="file">
              <span className="glyphicon glyphicon-camera"></span>
              <span>Change Image</span>
            </label>
            <input id="file" type="file" onChange={(e) => onChangeAvatar(e)} />
            <img src={profileData.avatar} id="profile" width="200" />
          </div>
        </div>
        <form className="container form-main">
          <div className="form-group">
            <label>User Name :</label>
            <TextField
              id="outlined-basic"
              variant="outlined"
              placeholder="Enter your name"
              fullWidth
              value={profileData.userName}
              onChange={(e) =>
                setProfileData({ ...profileData, userName: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label>Links</label>

            <TextField
              id="outlined-basic"
              variant="outlined"
              placeholder="eg.portfolio.com"
              fullWidth
              value={profileData.link}
              onChange={(e) =>
                setProfileData({ ...profileData, link: e.target.value })
              }
            />
          </div>
          <div>
            <fieldset className="form-group">
              <div className="row">
                <label className="col-form-label col-sm-2 pt-0">
                  You are a :
                </label>
                <div className="col-sm-10">
                  <div className="form-check custom-control-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gridRadios"
                      id="gridRadios1"
                      value="Community"
                      checked={profileData.role === "Community"}
                      onChange={(e) =>
                        setProfileData({ ...profileData, role: e.target.value })
                      }
                    />
                    <p
                      className="form-check-label"
                      for="gridRadios1"
                      style={{ color: "white" }}
                    >
                      Community
                    </p>
                  </div>
                  <div className="form-check custom-control-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gridRadios"
                      id="gridRadios2"
                      value="Contributor"
                      checked={profileData.role === "Contributor"}
                      onChange={(e) =>
                        setProfileData({ ...profileData, role: e.target.value })
                      }
                    />
                    <p
                      className="form-check-label"
                      for="gridRadios2"
                      style={{ color: "white" }}
                    >
                      Contributor
                    </p>
                  </div>
                </div>
              </div>
            </fieldset>
          </div>
          <div className="button-save">
            <button
              type="button"
              className="btn btn-primary "
              onClick={updateProfile}
              disabled={loading}
            >
              {loading ? "Loading" : "Save"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
