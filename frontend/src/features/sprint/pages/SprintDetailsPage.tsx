import "../style/SprintDetailsPage.css";

const SprintDetails = () => {
  return (
    <main className="main-wrapper">
      <div className="breadcrumb-pms">
        <a href="project-list.html">Projects</a>
        <span className="sep">/</span>
        <a href="project-board.html">Engineering Platform</a>
        <span className="sep">/</span>
        <a href="project-sprints.html">Sprints</a>
        <span className="sep">/</span>
        <span className="current">Sprint 5</span>
      </div>
      <div className="d-flex align-items-center justify-content-between mb-3">
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 4,
            }}
          >
            <h1 className="mb-0">Sprint 5</h1>
            <span className="status-badge status-inprogress">Active</span>
          </div>
          <div style={{ fontSize: 13, color: "var(--text-muted)" }}>
            <i className="bi bi-calendar3" /> Apr 20 – May 3, 2026
          </div>
          <div
            style={{
              fontSize: 13,
              color: "var(--text-secondary)",
              fontStyle: "italic",
              marginTop: 4,
            }}
          >
            "Finalize auth module and start onboarding flow."
          </div>
        </div>
        <button
          className="btn-danger manager-up"
          //
          // onclick="showToast('Sprint closed','warning')"
        >
          Close Sprint
        </button>
      </div>
      {/* KPI Row */}
      <div className="row g-3 mb-4">
        <div className="col-6 col-xl-3">
          <div className="kpi-card">
            <div className="kpi-label">Total Issues</div>
            <div className="kpi-value">14</div>
          </div>
        </div>
        <div className="col-6 col-xl-3">
          <div className="kpi-card">
            <div className="kpi-label">Completed</div>
            <div className="kpi-value" style={{ color: "var(--success)" }}>
              8
            </div>
          </div>
        </div>
        <div className="col-6 col-xl-3">
          <div className="kpi-card">
            <div className="kpi-label">Remaining</div>
            <div className="kpi-value">6</div>
          </div>
        </div>
        <div className="col-6 col-xl-3">
          <div className="kpi-card">
            <div className="kpi-label">Story Points Done</div>
            <div className="kpi-value">24</div>
          </div>
        </div>
      </div>
      {/* Charts Row */}
      <div className="row g-3 mb-4">
        <div className="col-lg-7">
          <div className="card-pms">
            <div
              style={{
                fontSize: 14,
                fontWeight: 600,
                color: "var(--text-primary)",
                marginBottom: 12,
              }}
            >
              Burndown Chart
            </div>
            <div className="chart-area">
              <svg
                className="burndown-svg"
                viewBox="0 0 500 200"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Grid lines */}
                <line
                  x1={40}
                  y1={10}
                  x2={40}
                  y2={170}
                  stroke="#30363d"
                  strokeWidth={1}
                />
                <line
                  x1={40}
                  y1={170}
                  x2={490}
                  y2={170}
                  stroke="#30363d"
                  strokeWidth={1}
                />
                {/* Y axis labels */}
                <text
                  x={35}
                  y={15}
                  fill="#484f58"
                  fontSize={10}
                  textAnchor="end"
                >
                  20
                </text>
                <text
                  x={35}
                  y={55}
                  fill="#484f58"
                  fontSize={10}
                  textAnchor="end"
                >
                  15
                </text>
                <text
                  x={35}
                  y={95}
                  fill="#484f58"
                  fontSize={10}
                  textAnchor="end"
                >
                  10
                </text>
                <text
                  x={35}
                  y={135}
                  fill="#484f58"
                  fontSize={10}
                  textAnchor="end"
                >
                  5
                </text>
                <text
                  x={35}
                  y={173}
                  fill="#484f58"
                  fontSize={10}
                  textAnchor="end"
                >
                  0
                </text>
                {/* Grid horizontal */}
                <line
                  x1={40}
                  y1={50}
                  x2={490}
                  y2={50}
                  stroke="#30363d"
                  strokeWidth="0.5"
                  strokeDasharray="4,4"
                />
                <line
                  x1={40}
                  y1={90}
                  x2={490}
                  y2={90}
                  stroke="#30363d"
                  strokeWidth="0.5"
                  strokeDasharray="4,4"
                />
                <line
                  x1={40}
                  y1={130}
                  x2={490}
                  y2={130}
                  stroke="#30363d"
                  strokeWidth="0.5"
                  strokeDasharray="4,4"
                />
                {/* Ideal line */}
                <polyline
                  points="40,10 490,170"
                  fill="none"
                  stroke="#484f58"
                  strokeWidth="1.5"
                  strokeDasharray="6,4"
                />
                {/* Actual line */}
                <polyline
                  points="40,10 72,20 104,35 136,50 168,60 200,80 232,90 264,100 296,105 328,115 360,120"
                  fill="none"
                  stroke="#2f81f7"
                  strokeWidth="2.5"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />
                {/* X axis labels */}
                <text
                  x={40}
                  y={185}
                  fill="#484f58"
                  fontSize={9}
                  textAnchor="middle"
                >
                  1
                </text>
                <text
                  x={72}
                  y={185}
                  fill="#484f58"
                  fontSize={9}
                  textAnchor="middle"
                >
                  3
                </text>
                <text
                  x={104}
                  y={185}
                  fill="#484f58"
                  fontSize={9}
                  textAnchor="middle"
                >
                  5
                </text>
                <text
                  x={136}
                  y={185}
                  fill="#484f58"
                  fontSize={9}
                  textAnchor="middle"
                >
                  7
                </text>
                <text
                  x={168}
                  y={185}
                  fill="#484f58"
                  fontSize={9}
                  textAnchor="middle"
                >
                  8
                </text>
                <text
                  x={200}
                  y={185}
                  fill="#484f58"
                  fontSize={9}
                  textAnchor="middle"
                >
                  9
                </text>
                <text
                  x={232}
                  y={185}
                  fill="#484f58"
                  fontSize={9}
                  textAnchor="middle"
                >
                  10
                </text>
                <text
                  x={264}
                  y={185}
                  fill="#484f58"
                  fontSize={9}
                  textAnchor="middle"
                >
                  11
                </text>
                <text
                  x={296}
                  y={185}
                  fill="#484f58"
                  fontSize={9}
                  textAnchor="middle"
                >
                  12
                </text>
                <text
                  x={328}
                  y={185}
                  fill="#484f58"
                  fontSize={9}
                  textAnchor="middle"
                >
                  13
                </text>
                <text
                  x={360}
                  y={185}
                  fill="#484f58"
                  fontSize={9}
                  textAnchor="middle"
                >
                  14
                </text>
              </svg>
            </div>
            <div
              style={{ display: "flex", gap: 16, marginTop: 10, fontSize: 12 }}
            >
              <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <svg width={20} height={2}>
                  <line
                    x1={0}
                    y1={1}
                    x2={20}
                    y2={1}
                    stroke="#484f58"
                    strokeWidth="1.5"
                    strokeDasharray="4,3"
                  />
                </svg>{" "}
                Ideal
              </span>
              <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <svg width={20} height={2}>
                  <line
                    x1={0}
                    y1={1}
                    x2={20}
                    y2={1}
                    stroke="#2f81f7"
                    strokeWidth={2}
                  />
                </svg>{" "}
                Actual
              </span>
            </div>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="card-pms">
            <div
              style={{
                fontSize: 14,
                fontWeight: 600,
                color: "var(--text-primary)",
                marginBottom: 12,
              }}
            >
              Status Distribution
            </div>
            <div className="stacked-bar">
              <div
                className="stacked-seg"
                style={{ width: "57%", background: "var(--status-done)" }}
              />
              <div
                className="stacked-seg"
                style={{ width: "14%", background: "var(--status-inreview)" }}
              />
              <div
                className="stacked-seg"
                style={{ width: "14%", background: "var(--status-inprogress)" }}
              />
              <div
                className="stacked-seg"
                style={{ width: "7%", background: "var(--status-todo)" }}
              />
              <div
                className="stacked-seg"
                style={{ width: "7%", background: "var(--status-blocked)" }}
              />
            </div>
            <div
              style={{
                marginTop: 16,
                display: "flex",
                flexDirection: "column",
                gap: 6,
              }}
            >
              ${"{"}[{"{"}s:'done',c:'var(--status-done)',l:'Done',n:8,pct:57
              {"}"},{"{"}s:'inreview',c:'var(--status-inreview)',l:'In
              Review',n:2,pct:14{"}"},{"{"}
              s:'inprogress',c:'var(--status-inprogress)',l:'In
              Progress',n:2,pct:14{"}"},{"{"}
              s:'todo',c:'var(--status-todo)',l:'Todo',n:1,pct:7{"}"},{"{"}
              s:'blocked',c:'var(--status-blocked)',l:'Blocked',n:1,pct:7{"}"}
              ].map(d=&gt;`
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  fontSize: 12,
                }}
              >
                <div
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: 2,
                    background: "${d.c}",
                    flexShrink: 0,
                  }}
                />
                <div style={{ flex: 1, color: "var(--text-secondary)" }}>
                  ${"{"}d.l{"}"}
                </div>
                <div
                  style={{
                    color: "var(--text-muted)",
                    width: 16,
                    textAlign: "right",
                  }}
                >
                  ${"{"}d.n{"}"}
                </div>
                <div
                  style={{
                    color: "var(--text-muted)",
                    width: 36,
                    textAlign: "right",
                  }}
                >
                  ${"{"}d.pct{"}"}%
                </div>
              </div>
              `).join(''){"}"}
            </div>
          </div>
        </div>
      </div>
      {/* Issue Table */}
      <div className="card-pms">
        <div
          style={{
            fontSize: 14,
            fontWeight: 600,
            color: "var(--text-primary)",
            marginBottom: 16,
          }}
        >
          Issues
        </div>
        <table className="tbl" id="issueTable">
          <thead>
            <tr>
              <th
                className="sortable-th"
                // onclick="sortTable('priority')"
              >
                Priority
                <i className="bi bi-chevron-expand" />
              </th>
              <th
                className="sortable-th"
                // onclick="sortTable('ident')"
              >
                Identifier
                <i className="bi bi-chevron-expand" />
              </th>
              <th
                className="sortable-th"
                // onclick="sortTable('title')"
              >
                Title
                <i className="bi bi-chevron-expand" />
              </th>
              <th>Type</th>
              <th
                className="sortable-th"
                // onclick="sortTable('status')"
              >
                Status
                <i className="bi bi-chevron-expand" />
              </th>
              <th>Assignee</th>
              <th
                className="sortable-th"
                // onclick="sortTable('points')"
              >
                Pts
                <i className="bi bi-chevron-expand" />
              </th>
              <th
                className="sortable-th"
                // onclick="sortTable('due')"
              >
                Due
                <i className="bi bi-chevron-expand" />
              </th>
            </tr>
          </thead>
          <tbody id="issueTableBody" />
        </table>
      </div>
    </main>
  );
};

export default SprintDetails;
