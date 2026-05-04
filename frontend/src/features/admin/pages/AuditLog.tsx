const AuditLog = () => {
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
        <p>Only workspace administrators can view the security audit log.</p>
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
            <h1 className="mb-1">Audit Log</h1>
            <div style={{ fontSize: 13, color: "var(--text-secondary)" }}>
              Security and administrative activity history.
            </div>
          </div>
          <button
            className="btn-secondary"
            // onclick="showToast('Export started','info')"
          >
            <i className="bi bi-download" /> Export CSV
          </button>
        </div>
        <div className="d-flex align-items-center gap-2 mb-3">
          <input type="date" className="fcc" style={{ width: "auto" }} />
          <span style={{ color: "var(--text-muted)" }}>to</span>
          <input type="date" className="fcc" style={{ width: "auto" }} />
          <select className="fcc" style={{ width: "auto" }}>
            <option>All Actions</option>
            <option>user.login</option>
            <option>member.invited</option>
            <option>role.changed</option>
          </select>
        </div>
        <div className="card-pms">
          <table className="tbl">
            <thead>
              <tr>
                <th>Timestamp</th>
                <th>Actor</th>
                <th>Action</th>
                <th>Target</th>
                <th>IP Address</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td
                  style={{
                    color: "var(--text-muted)",
                    fontFamily: "var(--font-mono)",
                    fontSize: 12,
                  }}
                >
                  2026-04-23 14:32:01
                </td>
                <td>
                  <div className="d-flex align-items-center gap-2">
                    <div className="avatar avatar-sm">AA</div> Alex Admin
                  </div>
                </td>
                <td>
                  <span
                    className="status-badge"
                    style={{
                      background: "var(--bg-elevated)",
                      color: "var(--text-primary)",
                      border: "1px solid var(--bg-border)",
                    }}
                  >
                    role.changed
                  </span>
                </td>
                <td>Morgan Manager (user_id: 2) -&gt; Manager</td>
                <td
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 12,
                    color: "var(--text-secondary)",
                  }}
                >
                  192.168.1.42
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    color: "var(--text-muted)",
                    fontFamily: "var(--font-mono)",
                    fontSize: 12,
                  }}
                >
                  2026-04-23 14:30:15
                </td>
                <td>
                  <div className="d-flex align-items-center gap-2">
                    <div className="avatar avatar-sm">AA</div> Alex Admin
                  </div>
                </td>
                <td>
                  <span
                    className="status-badge"
                    style={{
                      background: "var(--bg-elevated)",
                      color: "var(--text-primary)",
                      border: "1px solid var(--bg-border)",
                    }}
                  >
                    member.invited
                  </span>
                </td>
                <td>morgan@example.com</td>
                <td
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 12,
                    color: "var(--text-secondary)",
                  }}
                >
                  192.168.1.42
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    color: "var(--text-muted)",
                    fontFamily: "var(--font-mono)",
                    fontSize: 12,
                  }}
                >
                  2026-04-23 09:15:22
                </td>
                <td>
                  <div className="d-flex align-items-center gap-2">
                    <div className="avatar avatar-sm">SC</div> Sarah Chen
                  </div>
                </td>
                <td>
                  <span
                    className="status-badge"
                    style={{
                      background: "var(--bg-elevated)",
                      color: "var(--text-primary)",
                      border: "1px solid var(--bg-border)",
                    }}
                  >
                    user.login
                  </span>
                </td>
                <td>-</td>
                <td
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 12,
                    color: "var(--text-secondary)",
                  }}
                >
                  203.0.113.15
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default AuditLog;
