import "../style/SprintPage.css";

const SprintPage = () => {
  return (
    <main className="main-wrapper">
      <div className="breadcrumb-pms">
        <a href="project-list.html">Projects</a>
        <span className="sep">/</span>
        <a href="project-board.html">Engineering Platform</a>
        <span className="sep">/</span>
        <span className="current">Sprints</span>
      </div>
      <div className="project-tabs mb-3">
        <a href="project-board.html" className="project-tab">
          Board
        </a>
        <a href="project-backlog.html" className="project-tab">
          Backlog
        </a>
        <a href="project-sprints.html" className="project-tab active">
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
      <div className="d-flex align-items-center justify-content-between mb-4">
        <h1 className="mb-0">Sprints</h1>
        <button
          className="btn-primary manager-up"
          //   onclick="openModal('createSprintModal')"
        >
          <i className="bi bi-plus" /> Create Sprint
        </button>
      </div>
      {/* Active Sprint */}
      <div id="activeSprints" />
      {/* Planned Sprints */}
      <div id="plannedSprints" />
      {/* Closed Sprints Toggle */}
      <div
        className="closed-toggle"
        //   onclick="toggleClosed()"
      >
        <i className="bi bi-chevron-right" id="closedChevron" />
        Show 3 closed sprints
      </div>
      <div className="closed-section" id="closedSection" />
    </main>
  );
};

export default SprintPage;
