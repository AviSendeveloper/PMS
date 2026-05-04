import "../style/ProjectPage.css";

const ProjectPage = () => {
  return (
    <main className="main-wrapper">
      <div className="d-flex align-items-center justify-content-between mb-3">
        <h1 className="mb-0">Projects</h1>
        <button
          className="btn-primary manager-up"
          // onclick="openModal('createProjectModal')"
        >
          <i className="bi bi-plus" /> New Project
        </button>
      </div>
      <div className="d-flex align-items-center justify-content-between mb-4">
        <div className="filter-bar">
          <select
            className="filter-select"
            id="filterStatus"
            // onchange="renderProjects()"
          >
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="archived">Archived</option>
          </select>
          <select
            className="filter-select"
            id="sortBy"
            // onchange="renderProjects()"
          >
            <option value="name">Sort: Name</option>
            <option value="created">Sort: Created</option>
            <option value="updated">Sort: Updated</option>
          </select>
          <label
            className="admin-only"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              cursor: "pointer",
              textTransform: "none",
              letterSpacing: 0,
              fontSize: 13,
              color: "var(--text-secondary)",
              marginBottom: 0,
            }}
          >
            <input
              type="checkbox"
              id="showArchived"
              // onchange="renderProjects()"
            />{" "}
            Show Archived
          </label>
        </div>
        <div
          style={{ fontSize: 13, color: "var(--text-muted)" }}
          id="projCount"
        />
      </div>
      <div className="row g-3" id="projectGrid" />
    </main>
  );
};

export default ProjectPage;
