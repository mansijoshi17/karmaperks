import React, { createContext, useState } from "react";
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
import { contracts } from "../config";
import AirdropFactory from "../abi/AirdropFactory.json";
import karmatoken from "../abi/KarmaToken.json"
import { ethers } from "ethers";
import { toast } from "react-toastify";




export const AirdropContext = createContext(undefined);

export const AirdropContextProvider = (props) => {
  const [airdropCategory, setAirdropCategory] = useState("Community");
  const [token, setToken] = useState("Token");
  const [file, setFile] = useState("");
  const [loading, setLoading] = useState(false);

  const [airdropForm, setAirdropForm] = useState({
    formData: {
      quentity: "",
      token: "",
      title: "",
      description: "",
      chain: "polygon",
      collection: "",
      symbol: "",
      image: "",
      badge: "",
      startDate: new Date(),
      expireDate: "",
      event: "",
    },
  });

  const setAirdropFormdata = (prop) => (event) => {
    setAirdropForm({
      ...airdropForm,
      formData: { ...airdropForm.formData, [prop]: event.target.value },
    });
  };

  async function switchNetwork(chainId) {
    await window.ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: `${chainId}` }], // chainId must be in HEX with 0x in front
    });
    document.location.reload();
  }

  const createAirdropofCampaign = async (type) => {
    setLoading(true);
  let contributors = await getCommunityContributors(airdropForm.formData.event);
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();

  const { chainId } = await provider.getNetwork();
        if (airdropForm.formData.chain == "polygon" && chainId !== 80001) {
            await switchNetwork(ethers.utils.hexlify(80001));
        } else if (airdropForm.formData.chain == "celo" && chainId !== 44787) {
            await switchNetwork(ethers.utils.hexlify(44787));
        } else if (airdropForm.formData.chain == "filecoin" && chainId !== 3141) {
            await switchNetwork(ethers.utils.hexlify(3141));
        } else if (airdropForm.formData.chain == "ethereum" && chainId !== 5) {
            await switchNetwork(ethers.utils.hexlify(5));
        }


 

  const airdropFactoryCon =  new ethers.Contract(
    contracts[airdropForm.formData.chain].airdropfactory,
    AirdropFactory.abi,
    signer
  );
  if(type == "nft"){
   
    let createTokenTransaction = await airdropFactoryCon.createToken(
      airdropForm.formData.collection,
      airdropForm.formData.symbol
    );
    let tx = await createTokenTransaction.wait();
    if (tx) {
      let event = await tx.events[0];
      let tokenContractAddress = event?.args[1];
      let transactionMint = await airdropFactoryCon.bulkMintERC721(
        tokenContractAddress,
        contributors
      );
      let tx1 = await transactionMint.wait();

      if (tx1) {
        setLoading(false);
        toast.success("Airdroped nft to all the contributors");

      }
    }
  }else{
   try {
    let erc20Contract = new ethers.Contract(
      airdropForm.formData.token,
      karmatoken.abi,
      signer
    );
    const tamount = contributors.length * parseInt(airdropForm.formData.quentity)
    console.log(tamount)
    let approveTransaction = await erc20Contract.approve(airdropFactoryCon.address,  ethers.utils.parseEther(tamount.toString())) 
    let approve = await approveTransaction.wait();
    if(approve){
      let bulkERC20TokenTransaction = await airdropFactoryCon.bulkTranferERC20(
        airdropForm.formData.token,
        contributors,
        ethers.utils.parseEther(airdropForm.formData.quentity.toString())
      );
      let txerc20 = await bulkERC20TokenTransaction.wait();
      if(txerc20){
        setLoading(false);
          toast.success("Airdroped token to all the contributors");
      }
    }
   } catch (error) {
     toast.error("You don't have sufficient balance!")
   }
  }
  };

  

  const getCommunityContributors = async (id) => {
    
    const q = query(
      collection(db, "userApplications"),
      where("campaignId", "==", id)
    );
    var contributors = [];
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((fire) => {
     contributors.push(fire.data().walletAddress);
    });
  return contributors;
  }

  return (
    <AirdropContext.Provider
      value={{
        setAirdropFormdata,
        airdropForm,
        airdropCategory,
        setAirdropCategory,
        setToken,
        token,
        file,
        setFile,
        createAirdropofCampaign,
        loading
      }}
      {...props}
    >
      {props.children}
    </AirdropContext.Provider>
  );
};
