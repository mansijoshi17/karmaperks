import moment from "moment";
import React, { createContext, useState, useEffect } from "react";
import { NFTStorage, File } from "nft.storage";
import { client } from "../services/data";
import {
    addDoc,
    collection,
    updateDoc,
    doc,
    query,
    where,
    getDocs,
} from "firebase/firestore";
import { db } from "../services/firebase";
import { toast } from "react-toastify";
import { ethers } from "ethers";
import { abi, contracts } from "../config";
import { switchNetwork } from "../services/SwitchNetwork";

import axios from "axios";

export const CampaignContext = createContext(undefined);

export const CampaignContextProvider = (props) => {
  const [userId, setUserId] = useState();
  const [image, setImage] = useState("");
  const [badge, setBadge] = useState("");
  const [imageLoader, setImageLoader] = useState(false);
  const [signer, setSigner] = useState();
  const [provider, setProvider] = useState();
  let add = localStorage.getItem("address");
  const [loader,setLoader]= useState(false)

  const [campaignForm, setCampaignForm] = useState({
    formData: {
      category: "",
      title: "",
      description: "",
      chain: "polygon",
      startDate: new Date(),
      endDate: new Date(),
    },
  });

  const [allCampaigns, setAllCampaign] = React.useState([]);

  useEffect(() => {
    const initialize = async () => {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      setProvider(provider);
      setSigner(signer);

      if (add) {
        initialize();
      }
    };
  }, [add]);

  useEffect(() => {
    fetchCampaign();
  }, []);

  

  const setCampaignFormdata = (prop) => (event) => {
    setCampaignForm({
      ...campaignForm,
      formData: { ...campaignForm.formData, [prop]: event.target.value },
    });
  };

 
    

    useEffect(() => {
        const initialize = async () => {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            // setProvider(provider);
            // setSigner(signer);

            if (add) {
                initialize();
            }
        };
    }, [add]);

    useEffect(() => {
        fetchCampaign();
    }, []);

    const fetchCampaign = async () => {
        const q = query(collection(db, "Campaign"));
        const querySnapshot = await getDocs(q);
        let arr = [];

        querySnapshot.forEach(async (fire) => {
            const data = fire?.data();
            const id = fire.id;



            const meta = await axios.get(data?.metadata);
            const Imgurl = meta.data.image.replace(
                "ipfs://",
                "https://nftstorage.link/ipfs/"
            );
            const Badgeurl = meta.data.badge.replace(
                "ipfs://",
                "https://nftstorage.link/ipfs/"
            );
          

            let obj = {
                createdBy: fire.data().createdBy,
                description: fire.data().description,
                image: Imgurl,
                badge: Badgeurl,
                title: fire.data().title,
                chain: meta.data.chain,
                category: meta.data.category,
                startDate: meta.data.startDate,
                endDate: meta.data.exoireDate,
                id: id,
                communityId: fire.data().communityId,
            };
            arr.push(obj);
            setAllCampaign(arr);
        });
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
                setUserId(fire.id);
            });
        };
        init();
    }, []);

    const creatcampaign = async () => {
        
        setImageLoader(true);
        const imageData = await fetch(image).then((r) => r.blob());
        const imageFile = new File([imageData], `image.png`, {
            type: "image/png",
        });
        const badgeData = await fetch(badge).then((r) => r.blob());
        const badgeFile = new File([badgeData], `badge.png`, {
            type: "image/png",
        });
        const metadata = await client.store({
            name: campaignForm.formData.title,
            description: campaignForm.formData.description,
            image: imageFile,
            badge: badgeFile,
            category: campaignForm.formData.category,
            chain: campaignForm.formData.chain,
            expireDate: moment(campaignForm.formData.endDate).format("ll"),
            startDate: moment(campaignForm.formData.startDate).format("ll"),
            communityId: userId,
        });

        await addDoc(collection(db, "Campaign"), {
            title: campaignForm.formData.title,
            description: campaignForm.formData.description,
            createdAt: new Date(),
            metadata: `https://nftstorage.link/ipfs/${metadata.ipnft}/metadata.json`,
            createdBy: window.localStorage.getItem("address"),
            communityId: userId,
        });
        setImageLoader(false);
        toast.success("Campaign sucessfully created!!");
    };

    const sendKarmaperk = async (data) => { 
        setLoader(true)
        const provider = new  ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner(); 
        const array = [];
        const q = query(
            collection(db, "userApplications"),
            where("communityId", "==", data.communityId)
        );
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            array.push(doc.data().walletAddress);
        }) 

        const { chainId } = await provider.getNetwork(); 
        if (data.chain == "polygon" && chainId !== 80001) { 
            await switchNetwork(ethers.utils.hexValue(80001));
        } else if (data.chain == "celo" && chainId !== 44787) { 
            await switchNetwork(ethers.utils.hexValue(44787));
        } else if (data.chain == "filecoin" && chainId !== 3141) { 
            await switchNetwork(ethers.utils.hexValue(3141));
        } else if (data.chain == "ethereum" && chainId !== 5) {
            await switchNetwork(ethers.utils.hexValue(5));
        }
 
 
        let sendKarmaContract = new ethers.Contract(
            contracts[data.chain].karmaperkscontract,
            abi.contractAbi.karmaperksABI,
            signer
        );
  
        const sendPerk = await sendKarmaContract.bulkMintERC721(
            data.data.metadata,
            array
        ); 
        const txn = await sendPerk.wait(); 
        if(txn){
            setLoader(false)
            toast.success("Sucessfully send karma perk!")
        }
        setLoader(false)
    }

    return (
        <CampaignContext.Provider
            value={{
                setCampaignFormdata,
                setImage,
                setBadge,
                image,
                badge,
                campaignForm,
                creatcampaign,
                imageLoader,
                allCampaigns,
                sendKarmaperk,
                loader,
            }}
            {...props}
        >
            {props.children}
        </CampaignContext.Provider>
    );
};
