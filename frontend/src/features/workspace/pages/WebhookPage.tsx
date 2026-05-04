import "../style/WebhookPage.css";

const WebhookPage = () => {
  return (
    <main className="main-wrapper">
      {/* RBAC */}
      <div
        id="rbacBlock"
        style={{ display: "none", textAlign: "center", paddingTop: "10vh" }}
      >
        <i
          className="bi bi-shield-lock"
          style={{ fontSize: 64, color: "var(--danger)" }}
        />
        <h2 className="mt-3">Admin Access Required</h2>
        <p>Only workspace administrators can manage webhooks.</p>
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
              <a href="admin-labels.html" className="settings-nav-item">
                <i className="bi bi-tags" />
                Labels
              </a>
              <a
                href="admin-webhooks.html"
                className="settings-nav-item active"
              >
                <i className="bi bi-link-45deg" />
                Webhooks
              </a>
            </div>
          </div>
          {/* Main Content */}
          <div className="col-md-9 col-lg-10">
            {/* Section Header */}
            <div className="d-flex align-items-center justify-content-between mb-3">
              <div>
                <h2 className="mb-1">Webhooks</h2>
                <p className="mb-0" style={{ fontSize: 13 }}>
                  Send real-time HTTP POST payloads to external URLs when events
                  occur in your workspace.
                </p>
              </div>
              <button
                className="btn-primary"
                //   onclick="openWebhookModal(null)"
              >
                <i className="bi bi-plus" /> Add Webhook
              </button>
            </div>
            {/* Docs callout */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: "12px 16px",
                background: "var(--accent-subtle)",
                border: "1px solid rgba(47,129,247,.25)",
                borderRadius: "var(--radius-sm)",
                marginBottom: 20,
                fontSize: 13,
                color: "var(--text-secondary)",
              }}
            >
              <i
                className="bi bi-info-circle"
                style={{ color: "var(--accent)", fontSize: 16, flexShrink: 0 }}
              />
              Webhook payloads are signed with your secret using{" "}
              <strong
                style={{
                  color: "var(--text-primary)",
                  fontFamily: "var(--font-mono)",
                  fontSize: 12,
                }}
              >
                HMAC-SHA256
              </strong>
              .
              <a
                href="#"
                style={{
                  marginLeft: "auto",
                  color: "var(--accent)",
                  textDecoration: "none",
                  fontSize: 12,
                  whiteSpace: "nowrap",
                }}
              >
                View Docs <i className="bi bi-arrow-up-right" />
              </a>
            </div>
            {/* Webhook List */}
            <div
              className="card-pms"
              style={{ padding: 0, overflow: "hidden" }}
            >
              <div id="webhookList" />
            </div>
            <div
              id="webhookEmpty"
              className="empty-state"
              style={{ display: "none" }}
            >
              <i className="bi bi-link-45deg" />
              <h4>No webhooks configured</h4>
              <p>
                Add a webhook to connect PMS events to external services like
                Slack or Discord.
              </p>
              <button
                className="btn-primary"
                style={{ marginTop: 16 }}
                // onclick="openWebhookModal(null)"
              >
                Add first webhook
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default WebhookPage;
