import React, { useState, createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  collection,
  addDoc,
  updateDoc,
  doc,
  query,
  where,
  getDocs,
  getDoc
} from "firebase/firestore";
import { db } from "../services/firebase";
export const KarmaContext = createContext(undefined);
export const KarmaContextProvider = (props) => {
  const [userAdd, setUserAdd] = useState("");
  const [connected, setConnected] = useState(false);

  const navigate = useNavigate();
  const login = async () => {
    if (!window.ethereum) return;
    const accounts = await window.ethereum?.request({
      method: "eth_requestAccounts",
    });
    const q = query(
      collection(db, "UserProfile"),
      where("Address", "==", accounts[0])
    );
    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty) {
      setUserAdd(accounts[0]);
      window.localStorage.setItem("address", accounts[0]);
      setConnected(true); 
      navigate("/editprofile");
    } else {
      setUserAdd(accounts[0]);
      window.localStorage.setItem("address", accounts[0]);
      setConnected(true);
  
      navigate("/campaigns");
    }
  };
  function logout() {
    navigate("/");
    window.localStorage.removeItem("address");
    window.location.reload();
    setConnected(false);
  }

  return (
    <KarmaContext.Provider
      value={{
        login,
        userAdd,
        connected,
        logout,
      }}
      {...props}
    >
      {props.children}
    </KarmaContext.Provider>
  );
};
