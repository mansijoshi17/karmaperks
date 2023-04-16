import Iconify from "./Iconify";
import CampaignIcon from '@mui/icons-material/Campaign';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;


const sidebarConfig = [ 
  {
    title: "Campaign",
    path: "/dashboard/campaign",
    icon: <CampaignIcon/>,
  },
  {
    title: "Airdrop",
    path: "/dashboard/airdrop",
    icon:  <img width="22" height="22" src="/assets/images/airdrop.png" alt="airdrop"/>,
  }, 
  {
    title: "Leaderboard",
    path: "/dashboard/leaderboard",
    icon:  <LeaderboardIcon/>,
  },  
];

export default sidebarConfig;
