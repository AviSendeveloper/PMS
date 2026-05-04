import InviteModal from "../components/InviteModal";
import "../style/Dashboard.css";
import { useState } from "react";

const Dashboard = () => {
  const [isInviteModelOpen, setIsInviteModelOpen] = useState(false);
  const toggleInviteModel = () => setIsInviteModelOpen(!isInviteModelOpen);

  return (
    <>
      <InviteModal
        isOpen={isInviteModelOpen}
        onClose={toggleInviteModel}
      />
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
        <div className="row g-3 mb-4" id="kpiRow" />
        {/* Main 2-col */}
        <div className="row g-3">
          {/* Activity Feed */}
          <div className="col-lg-8">
            <div className="card-pms">
              <div className="card-section-head">
                <span>Recent Activity</span>
                <a href="#">View all</a>
              </div>
              <div id="activityFeed" />
            </div>
          </div>
          {/* Right col */}
          <div className="col-lg-4">
            {/* Pending Invitations (admin-only) */}
            <div className="card-pms mb-3 admin-only" id="pendingCard">
              <div className="card-section-head">
                <span>Pending Invitations</span>
                <a href="members-workspace.html">Manage</a>
              </div>
              <div id="pendingList" />
              <button
                className="btn-ghost"
                style={{ padding: "6px 0", fontSize: 13, marginTop: 8 }}
                //   onclick="openInviteModal()"
              >
                <i className="bi bi-plus" /> Invite Member
              </button>
            </div>
            {/* Active Sprints */}
            <div className="card-pms mb-3">
              <div className="card-section-head">
                <span>Active Sprints</span>
                <a href="project-sprints.html">View all</a>
              </div>
              <div id="sprintList" />
            </div>
            {/* Job Queue Status (admin-only) */}
            <div className="card-pms admin-only" id="queueCard">
              <div className="card-section-head">
                <span>Job Queue Status</span>
                <a href="admin-bull-board.html">View All</a>
              </div>
              <div id="queueStatus" />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Dashboard;
