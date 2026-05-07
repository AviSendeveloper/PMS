import InviteModal from "../components/InviteModal";
import "../style/Dashboard.css";
import { useState } from "react";
import type {
  Activities,
  Invities,
  KPIs,
  QueueStatuses,
  Sprints,
} from "../workspace.type";

// TODO: Replace with actual API calls
import { kips, activities, sprint, invities, queues } from "../dummy.data";
import DashboardKpi from "../components/dashboard/DashboardKpi";
import DashboardRecentActivity from "../components/dashboard/DashboardRecentActivity";
import DashboardPendingInvitation from "../components/dashboard/DashboardPendingInvitation";
import DashboardSprint from "../components/dashboard/DashboardSprint";
import DashboardQueue from "../components/dashboard/DashboardQueue";

const Dashboard = () => {
  // modal state
  const [isInviteModelOpen, setIsInviteModelOpen] = useState(false);
  const toggleInviteModel = () => setIsInviteModelOpen(!isInviteModelOpen);

  // api data state
  const [kpis, setKpis] = useState<KPIs>(kips);
  const [recentActivities, setRecentActivities] =
    useState<Activities>(activities);
  const [pendingInvitations, setPendingInvitations] =
    useState<Invities>(invities);
  const [activeSprints, setActiveSprints] = useState<Sprints>(sprint);
  const [jobQueueStatus, setJobQueueStatus] = useState<QueueStatuses>(queues);

  return (
    <>
      <InviteModal isOpen={isInviteModelOpen} onClose={toggleInviteModel} />
      <main className="main-wrapper">
        {/* Page Header */}
        <div className="d-flex align-items-center justify-content-between mb-4">
          <div>
            <h1 className="mb-1" id="dashTitle">
              Dashboard
            </h1>
            <p className="mb-0" style={{ fontSize: 13 }} id="dashSubtitle">
              Welcome back, Alex. Here's what's happening.
            </p>
          </div>
          <button
            className="btn-primary manager-up"
            onClick={toggleInviteModel}
          >
            <i className="bi bi-plus" /> Invite Member
          </button>
        </div>
        {/* KPI Row */}
        <DashboardKpi data={kpis} />

        {/* Main 2-col */}
        <div className="row g-3">
          {/* Activity Feed */}
          <DashboardRecentActivity data={recentActivities} />
          {/* Right col */}
          <div className="col-lg-4">
            {/* Pending Invitations (admin-only) */}
            <DashboardPendingInvitation data={pendingInvitations} />

            {/* Active Sprints */}
            <DashboardSprint data={activeSprints} />

            {/* Job Queue Status (admin-only) */}
            <DashboardQueue data={jobQueueStatus} />
          </div>
        </div>
      </main>
    </>
  );
};

export default Dashboard;
