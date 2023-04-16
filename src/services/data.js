import { NFTStorage } from "nft.storage";

const NFT_STORAGE_TOKEN = process.env.REACT_APP_NFT_STORAGE_TOKEN;
export const client = new NFTStorage({ token: NFT_STORAGE_TOKEN });

export const data = [
  {
    title: "BlockhainDev",
    description:
      "Campaign Title Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    image: "/assets/images/1.jpg",
    category: "Test",
    chain: "Filecoin",
    bug: 1,
    openSource: 0,
    volunteer: 0,
  },
  {
    title: "John",
    description:
      "Campaign Title Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    image: "/assets/images/1.png",
    category: "Test 2",
    chain: "Filecoin",
    bug: 2,
    openSource: 0,
    volunteer: 2,
  },
  {
    title: "Jaydip",
    description:
      "Campaign Title Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    image: "/assets/images/2.jpeg",
    category: "Test 3",
    chain: "Filecoin",
    bug: 10,
    openSource: 10,
    volunteer: 13,
  },
  {
    title: "Disha",
    description:
      "Campaign Title Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    image: "/assets/images/slider.png",
    category: "Test 4",
    chain: "Filecoin",
    bug: 20,
    openSource: 30,
    volunteer: 2,
  },
  {
    title: "Dhruv",
    description:
      "Campaign Title Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    image: "/assets/images/slider1.png",
    category: "Test 5",
    chain: "Filecoin",
    bug: 5,
    openSource: 3,
    volunteer: 2,
  },
  {
    title: "Mansi",
    description:
      "Campaign Title Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    image: "/assets/images/1.jpg",
    category: "Test",
    chain: "Filecoin",
    bug: 20,
    openSource: 10,
    volunteer: 2,
  },
  {
    title: "Karan",
    description:
      "Campaign Title Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    image: "/assets/images/slider2.jpeg",
    category: "Test",
    chain: "Filecoin",bug: 20,
    openSource: 10,
    volunteer: 2,
  },
  {
    title: "Devchain",
    description:
      "Campaign Title Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    image: "/assets/images/1.jpg",
    category: "Test",
    chain: "Filecoin",
    bug: 20,
    openSource: 10,
    volunteer: 2,
  },
  {
    title: "Webdir",
    description:
      "Campaign Title Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    image: "/assets/images/1.png",
    category: "Test",
    chain: "Filecoin",
    bug: 20,
    openSource: 10,
    volunteer: 2,
  },
];

export const airdropData = [
  // {
  //   image: "/assets/images/1.png",
  //   title: "Community",
  //   description:
  //     "Use typography to present your design and content as clearly and efficiently as possible.",
  // },
  {
    image: "/assets/images/1.png",
    title: "Campaign",
    description:
      "Airdrop nfts or tokens to all the campaign contributor",
  },
  {
    image: "/assets/images/1.png",
    title: "Karma",
    description:
      "Airdrop nfts or tokens to heighest karma holders",
  },
];
