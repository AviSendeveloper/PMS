import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="sidebar" id="sidebar">
      <div className="sidebar-section-label">Main</div>
      <Link to="/workspace/dashboard" className="nav-item active" id="nav-dashboard">
        <i className="bi bi-grid-1x2" />
        Dashboard
      </Link>
      <Link to="/projects" className="nav-item" id="nav-projects">
        <i className="bi bi-folder" />
        Projects
      </Link>
      <Link
        to="/workspace/members"
        className="nav-item admin-only"
        id="nav-members"
      >
        <i className="bi bi-people" />
        Members
      </Link>
      {/* <Link to="/workspace/reports" className="nav-item manager-up" id="nav-reports">
        <i className="bi bi-bar-chart" />
        Reports
      </Link> */}
      {/* <Link to="/workspace/search" className="nav-item" id="nav-search">
        <i className="bi bi-search" />
        Search
      </Link> */}
      <Link to="/notifications" className="nav-item" id="nav-notifs">
        <i className="bi bi-bell" />
        Notifications
      </Link>
      <div className="sidebar-section-label admin-only">Settings</div>
      <Link
        to="/workspace/settings"
        className="nav-item admin-only"
        id="nav-workspace"
      >
        <i className="bi bi-gear" />
        Workspace
      </Link>
      <Link
        to="/workspace/labels"
        className="nav-item admin-only"
        id="nav-labels"
      >
        <i className="bi bi-tags" />
        Labels
      </Link>
      <Link
        to="/workspace/webhooks"
        className="nav-item admin-only"
        id="nav-webhooks"
      >
        <i className="bi bi-link-45deg" />
        Webhooks
      </Link>
      {/* <Link to="/workspace/api-tokens" className="nav-item" id="nav-api-tokens">
        <i className="bi bi-key" />
        API Tokens
      </Link> */}
      {/* <div className="sidebar-section-label admin-only">System</div>
      <Link
        to="/workspace/admin-bull-board"
        className="nav-item admin-only"
        id="nav-bull"
      >
        <i className="bi bi-display" />
        Bull Board
      </Link>
      <Link
        to="/audit-logs"
        className="nav-item admin-only"
        id="nav-audit"
      >
        <i className="bi bi-journal-text" />
        Audit Log
      </Link> */}
      <div className="sidebar-bottom">
        <div className="sidebar-user">
          <div className="avatar avatar-sm" id="sidebarAvatar">
            AA
          </div>
          <div className="sidebar-user-info">
            <div className="sidebar-user-name" id="sidebarName">
              Alex Admin
            </div>
            <div className="sidebar-user-role">
              <span className="role-badge-sm" id="sidebarRole">
                Admin
              </span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
