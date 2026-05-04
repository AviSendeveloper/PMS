import "../style/ProjectBacklogPage.css";

const ProjectBacklogPage = () => {
  return (
    <main className="main-wrapper">
      <div className="breadcrumb-pms">
        <a href="project-list.html">Projects</a>
        <span className="sep">/</span>
        <a href="project-board.html">Engineering Platform</a>
        <span className="sep">/</span>
        <span className="current">Backlog</span>
      </div>
      <div className="project-tabs mb-3">
        <a href="project-board.html" className="project-tab">
          Board
        </a>
        <a href="project-backlog.html" className="project-tab active">
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
        <a href="project-settings.html" className="project-tab manager-up">
          Settings
        </a>
      </div>
      <div id="bulkBar" className="bulk-bar">
        <span
          id="bulkCount"
          style={{ fontSize: 13, fontWeight: 600, color: "var(--accent)" }}
        >
          0 selected
        </span>
        <button
          className="bulk-btn" // onclick="bulkAction('sprint')"
        >
          Move to Sprint ▾
        </button>
        <button
          className="bulk-btn" // onclick="bulkAction('priority')"
        >
          Change Priority ▾
        </button>
        <button
          className="bulk-btn" // onclick="bulkAction('assignee')"
        >
          Change Assignee ▾
        </button>
        <button
          className="bulk-btn manager-up"
          style={{ color: "var(--danger)" }}
          // onclick="bulkDelete()"
        >
          Delete
        </button>
      </div>
      <div className="row g-3">
        <div className="col-lg-8">
          <div id="backlogContent" />
        </div>
        <div className="col-lg-4">
          <div className="preview-panel" id="previewPanel">
            <div className="preview-empty" id="previewEmpty">
              <i
                className="bi bi-layout-sidebar-inset"
                style={{ fontSize: 32, color: "var(--text-muted)" }}
              />
              <p
                style={{ margin: "12px 0 4px", color: "var(--text-secondary)" }}
              >
                Select an issue to preview
              </p>
              <small>Click an issue row to see details here</small>
            </div>
            <div id="previewContent" style={{ display: "none" }} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProjectBacklogPage;
