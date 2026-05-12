import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="sidebar" id="sidebar">
      <div className="sidebar-section-label">Main</div>
      <NavLink to="/workspace/dashboard" className="nav-item" id="nav-dashboard">
        <i className="bi bi-grid-1x2" />
        Dashboard
      </NavLink>
      <NavLink to="/projects" className="nav-item" id="nav-projects">
        <i className="bi bi-folder" />
        Projects
      </NavLink>
      <NavLink
        to="/workspace/members"
        className="nav-item admin-only"
        id="nav-members"
      >
        <i className="bi bi-people" />
        Members
      </NavLink>
      {/* <NavLink to="/workspace/reports" className="nav-item manager-up" id="nav-reports">
        <i className="bi bi-bar-chart" />
        Reports
      </NavLink> */}
      {/* <NavLink to="/workspace/search" className="nav-item" id="nav-search">
        <i className="bi bi-search" />
        Search
      </NavLink> */}
      <NavLink to="/notifications" className="nav-item" id="nav-notifs">
        <i className="bi bi-bell" />
        Notifications
      </NavLink>
      <div className="sidebar-section-label admin-only">Settings</div>
      <NavLink
        to="/workspace/settings"
        className="nav-item admin-only"
        id="nav-workspace"
      >
        <i className="bi bi-gear" />
        Workspace
      </NavLink>
      <NavLink
        to="/workspace/labels"
        className="nav-item admin-only"
        id="nav-labels"
      >
        <i className="bi bi-tags" />
        Labels
      </NavLink>
      <NavLink
        to="/workspace/webhooks"
        className="nav-item admin-only"
        id="nav-webhooks"
      >
        <i className="bi bi-link-45deg" />
        Webhooks
      </NavLink>
      {/* <NavLink to="/workspace/api-tokens" className="nav-item" id="nav-api-tokens">
        <i className="bi bi-key" />
        API Tokens
      </NavLink> */}
      {/* <div className="sidebar-section-label admin-only">System</div>
      <NavLink
        to="/workspace/admin-bull-board"
        className="nav-item admin-only"
        id="nav-bull"
      >
        <i className="bi bi-display" />
        Bull Board
      </NavLink>
      <NavLink
        to="/audit-logs"
        className="nav-item admin-only"
        id="nav-audit"
      >
        <i className="bi bi-journal-text" />
        Audit Log
      </NavLink> */}
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
