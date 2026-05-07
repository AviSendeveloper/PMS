import InviteModal from "../components/InviteModal";
import "../style/Dashboard.css";
import { useEffect, useState } from "react";
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
import { fetchKPIs, fetchRecentActivities, fetchPendingInvitations, fetchActiveSprints, fetchJobQueueStatus } from "../workspace.api";

const Dashboard = () => {
  const currentWorkspaceId = 123;

  // modal state
  const [isInviteModelOpen, setIsInviteModelOpen] = useState(false);
  const toggleInviteModel = () => setIsInviteModelOpen(!isInviteModelOpen);

  // api data state
  const [kpis, setKpis] = useState<KPIs>([]);
  const [recentActivities, setRecentActivities] =
    useState<Activities>([]);
  const [pendingInvitations, setPendingInvitations] =
    useState<Invities>([]);
  const [activeSprints, setActiveSprints] = useState<Sprints>([]);
  const [jobQueueStatus, setJobQueueStatus] = useState<QueueStatuses>([]);

  const fetchDashboardData = async () => {
    try {
      const [kpis, recentActivities, pendingInvitations, activeSprints, jobQueueStatus] = await Promise.all([
        fetchKPIs(currentWorkspaceId),
        fetchRecentActivities(currentWorkspaceId),
        fetchPendingInvitations(currentWorkspaceId),
        fetchActiveSprints(currentWorkspaceId),
        fetchJobQueueStatus(currentWorkspaceId),
      ])

      setKpis(kpis);
      setRecentActivities(recentActivities);
      setPendingInvitations(pendingInvitations);
      setActiveSprints(activeSprints);
      setJobQueueStatus(jobQueueStatus);
    } catch (error) {
      console.log(error);
    }
  }

  const handleInviteModalClose = async () => {
    await fetchDashboardData();
    toggleInviteModel();
  }

  useEffect(() => {
    fetchDashboardData()
  }, []);

  return (
    <>
      <InviteModal isOpen={isInviteModelOpen} onClose={handleInviteModalClose} />
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
            <DashboardPendingInvitation data={pendingInvitations} onInviteClick={toggleInviteModel} />

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
