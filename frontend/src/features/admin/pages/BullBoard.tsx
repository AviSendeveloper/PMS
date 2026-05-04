import "../style/BullBoard.css";

const BullBoard = () => {
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
        <p>Only workspace administrators can access system background jobs.</p>
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
        <div className="d-flex align-items-center justify-content-between mb-4">
          <div>
            <h1 className="mb-1">Bull Board</h1>
            <div style={{ fontSize: 13, color: "var(--text-secondary)" }}>
              Background Job Queue Management
            </div>
          </div>
          <select className="fcc" style={{ width: "auto" }}>
            <option>Queue: webhooks</option>
            <option>Queue: email</option>
          </select>
        </div>
        <div className="row g-3 mb-4">
          <div className="col-6 col-md-3">
            <div className="bull-stat">
              <div className="bull-stat-val">12</div>
              <div className="bull-stat-label">Active</div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="bull-stat">
              <div className="bull-stat-val">0</div>
              <div className="bull-stat-label">Waiting</div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="bull-stat">
              <div className="bull-stat-val" style={{ color: "var(--danger)" }}>
                3
              </div>
              <div className="bull-stat-label">Failed</div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="bull-stat">
              <div
                className="bull-stat-val"
                style={{ color: "var(--success)" }}
              >
                1,492
              </div>
              <div className="bull-stat-label">Completed</div>
            </div>
          </div>
        </div>
        <div className="card-pms" style={{ padding: 0 }}>
          <div
            style={{
              padding: 16,
              borderBottom: "1px solid var(--bg-border)",
              display: "flex",
              gap: 16,
            }}
          >
            <button
              className="btn-secondary"
              style={{ fontSize: 12, padding: "4px 10px" }}
            >
              <i className="bi bi-arrow-repeat" /> Retry Failed
            </button>
            <button
              className="btn-ghost"
              style={{
                color: "var(--danger)",
                fontSize: 12,
                padding: "4px 10px",
              }}
            >
              <i className="bi bi-trash" /> Clean Failed
            </button>
          </div>
          <div className="job-row">
            <div>
              <div
                style={{
                  fontWeight: 600,
                  fontSize: 13,
                  color: "var(--text-primary)",
                  fontFamily: "var(--font-mono)",
                }}
              >
                job:49821
              </div>
              <div style={{ fontSize: 12, color: "var(--text-secondary)" }}>
                webhook_delivery - Discord Integration
              </div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div className="status-badge status-inprogress">Active</div>
              <div
                style={{
                  fontSize: 11,
                  color: "var(--text-muted)",
                  marginTop: 4,
                }}
              >
                started 2s ago
              </div>
            </div>
          </div>
          <div className="job-row">
            <div>
              <div
                style={{
                  fontWeight: 600,
                  fontSize: 13,
                  color: "var(--text-primary)",
                  fontFamily: "var(--font-mono)",
                }}
              >
                job:49820
              </div>
              <div style={{ fontSize: 12, color: "var(--text-secondary)" }}>
                webhook_delivery - Custom Dashboard Sync
              </div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div className="status-badge status-blocked">Failed</div>
              <div
                style={{ fontSize: 11, color: "var(--danger)", marginTop: 4 }}
              >
                timeout (5000ms)
              </div>
            </div>
          </div>
          <div className="job-row">
            <div>
              <div
                style={{
                  fontWeight: 600,
                  fontSize: 13,
                  color: "var(--text-primary)",
                  fontFamily: "var(--font-mono)",
                }}
              >
                job:49819
              </div>
              <div style={{ fontSize: 12, color: "var(--text-secondary)" }}>
                webhook_delivery - Custom Dashboard Sync
              </div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div className="status-badge status-blocked">Failed</div>
              <div
                style={{ fontSize: 11, color: "var(--danger)", marginTop: 4 }}
              >
                timeout (5000ms)
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BullBoard;
