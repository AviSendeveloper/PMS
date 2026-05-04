import "../style/SettingPage.css";

const SettingPage = () => {
  return (
    <main className="main-wrapper">
      {/* RBAC Block */}
      <div
        id="rbacBlock"
        style={{ display: "none", textAlign: "center", paddingTop: "10vh" }}
      >
        <i
          className="bi bi-shield-lock"
          style={{ fontSize: 64, color: "var(--danger)" }}
        />
        <h2 className="mt-3">Admin Access Required</h2>
        <p>Only workspace administrators can access workspace settings.</p>
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
          {/* Settings Nav */}
          {/* <div className="col-md-3 col-lg-2">
            <div className="settings-nav">
              <a
                href="admin-settings.html"
                className="settings-nav-item active"
              >
                <i className="bi bi-sliders" />
                General
              </a>
              <a href="admin-labels.html" className="settings-nav-item">
                <i className="bi bi-tags" />
                Labels
              </a>
              <a href="admin-webhooks.html" className="settings-nav-item">
                <i className="bi bi-link-45deg" />
                Webhooks
              </a>
            </div>
          </div> */}
          {/* Content */}
          {/* <div className="col-md-9 col-lg-10" style={{ maxWidth: 640 }}> */}
          <div className="justify-content-center align-items-center">
            {/* Workspace Details */}
            <div className="settings-card settings-section">
              <div className="settings-card-header">
                <h3>Workspace Details</h3>
              </div>
              <div className="settings-card-body">
                <div className="mb-3">
                  <label>Workspace Name</label>
                  <input
                    type="text"
                    className="fcc"
                    id="wsNameInput"
                    defaultValue="Acme Corp"
                  />
                </div>
                <div className="mb-3">
                  <label>Workspace URL</label>
                  <div className="url-input-group">
                    <span className="url-prefix">pms.app/</span>
                    <input
                      type="text"
                      className="fcc url-input"
                      id="wsSlug"
                      defaultValue="acme-corp"
                    />
                  </div>
                  <small style={{ marginTop: 6, display: "block" }}>
                    Members use this URL to access the workspace.
                  </small>
                </div>
                <div className="mb-0">
                  <label>
                    Description{" "}
                    <span
                      style={{
                        color: "var(--text-muted)",
                        textTransform: "none",
                        letterSpacing: 0,
                      }}
                    >
                      (optional)
                    </span>
                  </label>
                  <textarea
                    className="fcc"
                    rows={2}
                    placeholder="What does this workspace do?"
                    defaultValue={
                      "Engineering tools and project coordination for Acme Corp."
                    }
                  />
                </div>
              </div>
              <div className="settings-card-footer">
                <button className="btn-secondary">Discard</button>
                <button
                  className="btn-primary"
                  //   onclick="showToast('Workspace settings saved','success')"
                >
                  Save Changes
                </button>
              </div>
            </div>
            {/* Workspace Plan */}
            <div className="settings-card settings-section">
              <div className="settings-card-header">
                <h3>Plan &amp; Billing</h3>
                <span className="status-badge status-done">Pro Plan</span>
              </div>
              <div className="settings-card-body">
                <div className="row g-3">
                  <div className="col-6">
                    <div
                      style={{
                        background: "var(--bg-elevated)",
                        border: "1px solid var(--bg-border)",
                        borderRadius: "var(--radius-sm)",
                        padding: 14,
                      }}
                    >
                      <div
                        style={{
                          fontSize: 11,
                          color: "var(--text-muted)",
                          textTransform: "uppercase",
                          letterSpacing: ".05em",
                          marginBottom: 6,
                        }}
                      >
                        Members
                      </div>
                      <div
                        style={{
                          fontSize: 22,
                          fontWeight: 600,
                          color: "var(--text-primary)",
                        }}
                      >
                        24{" "}
                        <span
                          style={{
                            fontSize: 13,
                            color: "var(--text-muted)",
                            fontWeight: 400,
                          }}
                        >
                          / unlimited
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div
                      style={{
                        background: "var(--bg-elevated)",
                        border: "1px solid var(--bg-border)",
                        borderRadius: "var(--radius-sm)",
                        padding: 14,
                      }}
                    >
                      <div
                        style={{
                          fontSize: 11,
                          color: "var(--text-muted)",
                          textTransform: "uppercase",
                          letterSpacing: ".05em",
                          marginBottom: 6,
                        }}
                      >
                        Projects
                      </div>
                      <div
                        style={{
                          fontSize: 22,
                          fontWeight: 600,
                          color: "var(--text-primary)",
                        }}
                      >
                        12{" "}
                        <span
                          style={{
                            fontSize: 13,
                            color: "var(--text-muted)",
                            fontWeight: 400,
                          }}
                        >
                          / unlimited
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    marginTop: 14,
                    fontSize: 13,
                    color: "var(--text-secondary)",
                  }}
                >
                  Your Pro plan renews on{" "}
                  <strong style={{ color: "var(--text-primary)" }}>
                    May 15, 2026
                  </strong>
                  .
                </div>
              </div>
              <div className="settings-card-footer">
                <button
                  className="btn-secondary"
                  //   onclick="showToast('Redirecting to billing portal…','info')"
                >
                  <i className="bi bi-credit-card" /> Manage Billing
                </button>
              </div>
            </div>
            {/* Danger Zone */}
            <div className="danger-zone">
              <div className="danger-zone-header">
                <h3>
                  <i
                    className="bi bi-exclamation-triangle"
                    style={{ marginRight: 8 }}
                  />
                  Danger Zone
                </h3>
              </div>
              <div className="danger-row">
                <div className="danger-row-info">
                  <h4>Transfer Ownership</h4>
                  <p>
                    Transfer this workspace to another administrator. You will
                    lose admin access.
                  </p>
                </div>
                <button
                  className="btn-secondary"
                  style={{
                    whiteSpace: "nowrap",
                    flexShrink: 0,
                    color: "var(--warning)",
                    borderColor: "rgba(210,153,34,.4)",
                  }}
                  //   onclick="showToast('Transfer ownership flow would open here','info')"
                >
                  Transfer Workspace
                </button>
              </div>
              <div className="danger-row">
                <div className="danger-row-info">
                  <h4>Delete Workspace</h4>
                  <p>
                    Permanently delete this workspace, all projects, issues, and
                    member data. This action cannot be undone.
                  </p>
                </div>
                <button
                  className="btn-danger"
                  style={{ whiteSpace: "nowrap", flexShrink: 0 }}
                  //   onclick="showConfirm({title:'Delete Workspace',message:'Are you absolutely sure? All projects, issues, sprints, and members will be permanently deleted. This cannot be undone.',confirmLabel:'Yes, Delete Workspace',onConfirm:()=>window.location.href='onboarding-create-workspace.html'})"
                >
                  Delete Workspace
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SettingPage;
