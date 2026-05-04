import "../style/ProjectLabelPage.css";

const ProjectLabel = () => {
  return (
    <main className="main-wrapper">
      <div className="breadcrumb-pms">
        <a href="project-list.html">Projects</a>
        <span className="sep">/</span>
        <a href="project-board.html">Engineering Platform</a>
        <span className="sep">/</span>
        <span className="current">Settings</span>
      </div>
      <div className="project-tabs mb-4">
        <a href="project-board.html" className="project-tab">
          Board
        </a>
        <a href="project-backlog.html" className="project-tab">
          Backlog
        </a>
        <a href="project-sprints.html" className="project-tab">
          Sprints
        </a>
        <a href="reports.html" className="project-tab manager-up">
          Reports
        </a>
        <a href="project-members.html" className="project-tab manager-up">
          Members
        </a>
        <a
          href="project-settings.html"
          className="project-tab active manager-up"
        >
          Settings
        </a>
      </div>
      <div
        id="rbacBlock"
        style={{ display: "none", textAlign: "center", paddingTop: "10vh" }}
      >
        <i
          className="bi bi-shield-lock"
          style={{ fontSize: 64, color: "var(--danger)" }}
        />
        <h2 className="mt-3">Access Denied</h2>
        <p>Only Project Managers can manage project labels.</p>
        <a
          href="project-board.html"
          className="btn-primary"
          style={{
            display: "inline-block",
            marginTop: 16,
            textDecoration: "none",
          }}
        >
          Back to Board
        </a>
      </div>
      <div id="pageContent">
        <div className="row g-4">
          {/* Settings Side Nav */}
          <div className="col-md-3 col-lg-2">
            <div className="settings-nav">
              <a href="project-settings.html" className="settings-nav-item">
                <i className="bi bi-sliders" />
                General
              </a>
              <a
                href="project-labels.html"
                className="settings-nav-item active"
              >
                <i className="bi bi-tags" />
                Labels
              </a>
            </div>
          </div>
          {/* Main Content */}
          <div className="col-md-9 col-lg-10">
            {/* Header */}
            <div className="d-flex align-items-center justify-content-between mb-3">
              <div>
                <h2 className="mb-1">Labels</h2>
                <p className="mb-0" style={{ fontSize: 13 }}>
                  Categorize and organize issues with color-coded labels.
                </p>
              </div>
              <button
                className="btn-primary"
                //   onclick="openLabelModal(null)"
              >
                <i className="bi bi-plus" /> New Label
              </button>
            </div>
            {/* Label List */}
            <div
              className="card-pms"
              style={{ padding: 0, overflow: "hidden" }}
            >
              <div id="labelList">{/* JS rendered */}</div>
            </div>
            {/* Empty state (shown via JS) */}
            <div
              id="labelEmpty"
              className="empty-state"
              style={{ display: "none" }}
            >
              <i className="bi bi-tags" />
              <h4>No labels yet</h4>
              <p>Create labels to categorize issues in this project.</p>
              <button
                className="btn-primary"
                style={{ marginTop: 16 }}
                // onclick="openLabelModal(null)"
              >
                Create first label
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProjectLabel;
