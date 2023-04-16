import { useRoutes } from "react-router-dom";
import LendingLayout from "./components/layouts/LandingLayout";
import LandingPage from "./pages/Landing";
import Profile from "./pages/Profile";
import Leaderboard from "./pages/Leaderboard";
import DashboardLayout from "./components/layouts/DahsboardLayout";
import Dashboard from "./components/dashboard";
import ExploreCampaign from "./pages/ExploreCampaign";
import Airdrop from "./pages/Airdrop";
import LeaderDashboard from "./pages/LeaderDashboard";
import CreateAirdrop from "./components/airdrop/CreateAirdrop";
import EditProfile from "./pages/EditProfile";
import Quest from "./pages/Quest";
import BugHunting from "./pages/CategoryListing/BugHunting";
import TestPilot from "./pages/CategoryListing/TestPilot";
import OpenSource from "./pages/CategoryListing/OpenSource";
import Volunteer from "./pages/CategoryListing/Volunteer";
import Campaign from "./pages/Campaign"
import CreatCampaign from './components/campaign/CreateCampaign';
import DashboardCampaign from "./pages/DashboardCampaign";
import DetailPage from "./pages/CategoryDetails/DetailPage";
import CustomerResearch from "./pages/CategoryListing/CustomerResearch";

export default function Router() {
    return useRoutes([
        {
            path: "/",
            element: <LendingLayout />,
            children: [
                { path: "/", element: <LandingPage /> },
                { path: "profile", element: <Profile /> },
                // { path: "campaigns", element: <ExploreCampaign/> },
                { path: "leaderboard", element: <LeaderDashboard /> },
                { path: "campaign", element: <Campaign /> },
                { path: "editprofile", element: <EditProfile /> },
                { path: "campaigns", element: <Quest /> },
                { path: "bughunting", element: <BugHunting /> },
                { path: "testpilot", element: <TestPilot /> },
                { path: "codecontribution", element: <OpenSource /> },
                { path: "customerresearch", element: <CustomerResearch /> },
                { path: "volunteer", element: <Volunteer /> },
                { path: "details/:campaignId", element: <DetailPage /> },
            ],
        },
        {
            path: "/dashboard",
            element: <DashboardLayout />,
            children: [  
                { path: "campaign", element: <DashboardCampaign /> },
                { path: "airdrop", element: <Airdrop /> },
                { path: "airdrop/create", element: <CreateAirdrop /> },
                { path: "campaign/create", element: <CreatCampaign /> },
                { path: "leaderboard", element: <LeaderDashboard /> },
            ],
        },

    ]);
}
