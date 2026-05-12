const ProjectMember = () => {
  return (
    <>
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
    </>
  );
};

export default ProjectMember;
