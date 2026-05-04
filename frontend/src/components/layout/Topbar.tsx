const Topbar = () => {
  return (
    <nav className="topbar">
      <a href="dashboard.html" className="topbar-logo">
        P<span>M</span>S
      </a>
      <button className="workspace-switcher" id="wsSwitcher">
        <span id="wsName">Acme Corp</span>
        <i className="bi bi-chevron-down" style={{ fontSize: 11 }} />
      </button>
      <div className="topbar-search">
        <input
          type="text"
          className="search-input"
          placeholder="Search issues, projects..."
          // onclick="window.location.href='search.html'"
          readOnly
        />
      </div>
      <div className="topbar-actions">
        <button
          className="icon-btn"
          id="notifBtn"
          title="Notifications"
          // onclick="toggleNotifDropdown()"
        >
          <i className="bi bi-bell" />
          <span className="notif-badge" id="notifBadge">
            3
          </span>
        </button>
        <button
          className="avatar"
          id="avatarBtn"
          // onclick="toggleAvatarMenu()"
          title="Account"
        >
          AA
        </button>
      </div>
      {/* Notification Dropdown */}
      <div
        className="dropdown-pms"
        id="notifDropdown"
        style={{ right: 48, top: 52, width: 320 }}
      >
        <div
          style={{
            padding: "10px 12px",
            fontSize: 12,
            fontWeight: 600,
            color: "var(--text-secondary)",
            textTransform: "uppercase",
            letterSpacing: ".05em",
            borderBottom: "1px solid var(--bg-border)",
          }}
        >
          Notifications
        </div>
        <div id="notifList" />
        <div
          style={{
            padding: "8px 12px",
            borderTop: "1px solid var(--bg-border)",
            textAlign: "center",
          }}
        >
          <a
            href="notifications.html"
            style={{
              fontSize: 12,
              color: "var(--accent)",
              textDecoration: "none",
            }}
          >
            View All Notifications
          </a>
        </div>
      </div>
      {/* Avatar Dropdown */}
      <div
        className="dropdown-pms"
        id="avatarMenu"
        style={{ right: 8, top: 52 }}
      >
        <a href="profile.html" className="dropdown-item-pms">
          <i className="bi bi-person" />
          Profile
        </a>
        <a href="api-tokens.html" className="dropdown-item-pms">
          <i className="bi bi-key" />
          API Tokens
        </a>
        <div className="dropdown-sep" />
        <a href="auth-login.html" className="dropdown-item-pms danger">
          <i className="bi bi-box-arrow-right" />
          Sign Out
        </a>
      </div>
    </nav>
  );
};

export default Topbar;
