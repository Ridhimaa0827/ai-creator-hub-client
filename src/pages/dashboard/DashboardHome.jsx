import { useOutletContext } from "react-router-dom";

import WelcomeBanner from "../../components/dashboard/WelcomeBanner";
import StatsCards from "../../components/dashboard/StatsCards";
import ToolsGrid from "../../components/dashboard/ToolsGrid";
import ProfileCard from "../../components/dashboard/ProfileCard";
import RecentActivity from "../../components/dashboard/RecentActivity";

export default function DashboardHome() {
  const { user } = useOutletContext();

  return (
    <>
      <WelcomeBanner user={user} />

      <div className="mt-8">
        <StatsCards user={user} />
      </div>

      <div className="mt-8 grid gap-8 xl:grid-cols-3">

        <div className="xl:col-span-2">
          <ToolsGrid />
        </div>

        <div className="space-y-8">
          <ProfileCard user={user} />
          <RecentActivity />
        </div>

      </div>
    </>
  );
}