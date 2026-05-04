import "../style/LabelPage.css";

const LabelPage = () => {
  return (
    <main className="main-wrapper">
      <div
        id="rbacBlock"
        style={{ display: "none", textAlign: "center", paddingTop: "10vh" }}
      >
        <i
          className="bi bi-shield-lock"
          style={{ fontSize: 64, color: "var(--danger)" }}
        />
        <h2 className="mt-3">Admin Access Required</h2>
        <p>Only workspace administrators can manage global labels.</p>
        <a
          href="dashboard.html"
          className="btn-primary"
          style={{
            display: "inline-block",
            marginTop: 16,
            textDecoration: "none",
          }}
        >
          Back to Dashboard
        </a>
      </div>
      <div id="pageContent">
        {/* Page Header */}
        <div className="d-flex align-items-center justify-content-between mb-4">
          <div>
            <h1 className="mb-1">Workspace Settings</h1>
            <p className="mb-0" style={{ fontSize: 13 }}>
              Manage your workspace configuration and preferences.
            </p>
          </div>
        </div>
        <div className="row g-4">
          {/* Settings Side Nav */}
          <div className="col-md-3 col-lg-2">
            <div className="settings-nav">
              <a href="admin-settings.html" className="settings-nav-item">
                <i className="bi bi-sliders" />
                General
              </a>
              <a href="admin-labels.html" className="settings-nav-item active">
                <i className="bi bi-tags" />
                Labels
              </a>
              <a href="admin-webhooks.html" className="settings-nav-item">
                <i className="bi bi-link-45deg" />
                Webhooks
              </a>
            </div>
          </div>
          {/* Main Content */}
          <div className="col-md-9 col-lg-10">
            <div className="d-flex align-items-center justify-content-between mb-3">
              <div>
                <h2 className="mb-1">Global Labels</h2>
                <p className="mb-0" style={{ fontSize: 13 }}>
                  These labels are available across all projects in the
                  workspace. System defaults are locked.
                </p>
              </div>
              <button
                className="btn-primary"
                //   onclick="openLabelModal(null)"
              >
                <i className="bi bi-plus" /> New Label
              </button>
            </div>
            {/* System Defaults */}
            <div
              style={{
                fontSize: 11,
                fontWeight: 600,
                color: "var(--text-muted)",
                textTransform: "uppercase",
                letterSpacing: ".07em",
                marginBottom: 6,
              }}
            >
              System Defaults
            </div>
            <div
              className="card-pms"
              style={{ padding: 0, overflow: "hidden", marginBottom: 20 }}
            >
              <div id="systemLabels">{/* JS rendered */}</div>
            </div>
            {/* Custom Labels */}
            <div
              style={{
                fontSize: 11,
                fontWeight: 600,
                color: "var(--text-muted)",
                textTransform: "uppercase",
                letterSpacing: ".07em",
                marginBottom: 6,
              }}
            >
              Custom Labels
            </div>
            <div
              className="card-pms"
              style={{ padding: 0, overflow: "hidden" }}
            >
              <div id="customLabels">{/* JS rendered */}</div>
            </div>
            <div
              id="customEmpty"
              className="empty-state"
              style={{ display: "none", padding: "32px 0" }}
            >
              <i className="bi bi-tags" />
              <h4>No custom labels</h4>
              <p>Create workspace-wide labels that any project can use.</p>
              <button
                className="btn-primary"
                style={{ marginTop: 16 }}
                // onclick="openLabelModal(null)"
              >
                Create label
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LabelPage;
