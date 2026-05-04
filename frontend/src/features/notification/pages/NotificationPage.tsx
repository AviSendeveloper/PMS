import "../style/NotificationPage.css";

const NotificationPage = () => {
  return (
    <main className="main-wrapper">
      {/* Page Header */}
      <div className="d-flex align-items-center justify-content-between mb-1">
        <div>
          <h1 className="mb-1">Notifications</h1>
          <p className="mb-0" style={{ fontSize: 13 }} id="unreadSummary">
            You have 3 unread notifications.
          </p>
        </div>
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <button
            className="btn-ghost"
            style={{ fontSize: 13 }}
            // onclick="openModal('prefModal')"
          >
            <i className="bi bi-sliders2" /> Preferences
          </button>
          <button
            className="btn-secondary"
            style={{ fontSize: 13 }}
            // onclick="markAllRead()"
          >
            <i className="bi bi-check2-all" /> Mark all read
          </button>
        </div>
      </div>
      {/* Tab row */}
      <div className="tab-bar" id="notifTabs">
        <a
          className="tab-item active"
          // onclick="setTab('inbox', this)"
        >
          Inbox
        </a>
        <a
          className="tab-item"
          // onclick="setTab('unread', this)"
        >
          Unread{" "}
          <span
            id="unreadTabBadge"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: 18,
              height: 18,
              borderRadius: "50%",
              background: "var(--danger)",
              color: "#fff",
              fontSize: 10,
              fontWeight: 600,
              marginLeft: 4,
            }}
          >
            3
          </span>
        </a>
        <a
          className="tab-item"
          // onclick="setTab('mentions', this)"
        >
          Mentions
        </a>
        <a
          className="tab-item"
          // onclick="setTab('assigned', this)"
        >
          Assigned
        </a>
      </div>
      {/* Filter chips */}
      <div
        style={{ display: "flex", gap: 8, marginBottom: 16, flexWrap: "wrap" }}
      >
        <button
          className="btn-ghost active"
          id="fAll"
          // onclick="setFilter('all',this)"
          style={{
            padding: "4px 12px",
            fontSize: 12,
            border: "1px solid var(--accent)",
            color: "var(--accent)",
            background: "var(--accent-subtle)",
            borderRadius: 100,
          }}
        >
          All Types
        </button>
        <button
          className="btn-ghost"
          id="fMention"
          // onclick="setFilter('mention',this)"
          style={{
            padding: "4px 12px",
            fontSize: 12,
            border: "1px solid var(--bg-border)",
            borderRadius: 100,
          }}
        >
          <i className="bi bi-at" style={{ marginRight: 4 }} />
          Mention
        </button>
        <button
          className="btn-ghost"
          id="fAssign"
          // onclick="setFilter('assign',this)"
          style={{
            padding: "4px 12px",
            fontSize: 12,
            border: "1px solid var(--bg-border)",
            borderRadius: 100,
          }}
        >
          <i className="bi bi-person-plus" style={{ marginRight: 4 }} />
          Assignment
        </button>
        <button
          className="btn-ghost"
          id="fStatus"
          // onclick="setFilter('status',this)"
          style={{
            padding: "4px 12px",
            fontSize: 12,
            border: "1px solid var(--bg-border)",
            borderRadius: 100,
          }}
        >
          <i className="bi bi-arrow-left-right" style={{ marginRight: 4 }} />
          Status
        </button>
        <button
          className="btn-ghost"
          id="fSystem"
          // onclick="setFilter('system',this)"
          style={{
            padding: "4px 12px",
            fontSize: 12,
            border: "1px solid var(--bg-border)",
            borderRadius: 100,
          }}
        >
          <i className="bi bi-gear" style={{ marginRight: 4 }} />
          System
        </button>
      </div>
      {/* Notification List */}
      <div className="card-pms" style={{ padding: 0, overflow: "hidden" }}>
        <div id="notifContainer" />
      </div>
    </main>
  );
};

export default NotificationPage;
