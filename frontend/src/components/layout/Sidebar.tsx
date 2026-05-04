const Sidebar = () => {
  return (
    <aside className="sidebar" id="sidebar">
      <div className="sidebar-section-label">Main</div>
      <a href="dashboard.html" className="nav-item active" id="nav-dashboard">
        <i className="bi bi-grid-1x2" />
        Dashboard
      </a>
      <a href="project-list.html" className="nav-item" id="nav-projects">
        <i className="bi bi-folder" />
        Projects
      </a>
      <a
        href="members-workspace.html"
        className="nav-item admin-only"
        id="nav-members"
      >
        <i className="bi bi-people" />
        Members
      </a>
      <a href="reports.html" className="nav-item manager-up" id="nav-reports">
        <i className="bi bi-bar-chart" />
        Reports
      </a>
      <a href="search.html" className="nav-item" id="nav-search">
        <i className="bi bi-search" />
        Search
      </a>
      <a href="notifications.html" className="nav-item" id="nav-notifs">
        <i className="bi bi-bell" />
        Notifications
      </a>
      <div className="sidebar-section-label admin-only">Settings</div>
      <a
        href="admin-settings.html"
        className="nav-item admin-only"
        id="nav-workspace"
      >
        <i className="bi bi-gear" />
        Workspace
      </a>
      <a
        href="admin-labels.html"
        className="nav-item admin-only"
        id="nav-labels"
      >
        <i className="bi bi-tags" />
        Labels
      </a>
      <a
        href="admin-webhooks.html"
        className="nav-item admin-only"
        id="nav-webhooks"
      >
        <i className="bi bi-link-45deg" />
        Webhooks
      </a>
      <a href="api-tokens.html" className="nav-item" id="nav-api-tokens">
        <i className="bi bi-key" />
        API Tokens
      </a>
      <div className="sidebar-section-label admin-only">System</div>
      <a
        href="admin-bull-board.html"
        className="nav-item admin-only"
        id="nav-bull"
      >
        <i className="bi bi-display" />
        Bull Board
      </a>
      <a
        href="admin-audit-log.html"
        className="nav-item admin-only"
        id="nav-audit"
      >
        <i className="bi bi-journal-text" />
        Audit Log
      </a>
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
