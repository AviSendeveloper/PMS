const ProjectMember = () => {
  return (
    <main className="main-wrapper">
      <div className="breadcrumb-pms">
        <a href="project-list.html">Projects</a>
        <span className="sep">/</span>
        <a href="project-board.html">Engineering Platform</a>
        <span className="sep">/</span>
        <span className="current">Members</span>
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
        <a
          href="project-members.html"
          className="project-tab active manager-up"
        >
          Members
        </a>
        <a href="project-settings.html" className="project-tab manager-up">
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
        <p>Only Project Managers can manage members.</p>
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
        <div className="d-flex align-items-center justify-content-between mb-3">
          <h2 className="mb-0">Project Members (3)</h2>
          <button
            className="btn-primary manager-up"
            // onclick="openModal('addMemberModal')"
          >
            <i className="bi bi-plus" /> Add Member
          </button>
        </div>
        <div className="card-pms">
          <table className="tbl">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Project Role</th>
                <th>Assigned Issues</th>
                <th>Added</th>
                <th style={{ width: 100 }}>Actions</th>
              </tr>
            </thead>
            <tbody id="memberBody">{/* JS Rendered */}</tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default ProjectMember;
