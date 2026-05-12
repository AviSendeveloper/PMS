import "../style/ProjectSettingPage.css";

const ProjectSettingPage = () => {
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
        <p>Only Project Managers can access project settings.</p>
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
      <div id="pageContent" className="row">
        {/* <div className="col-md-3">
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <a
              href="project-settings.html"
              className="btn-ghost"
              style={{
                textAlign: "left",
                background: "var(--bg-elevated)",
                color: "var(--text-primary)",
              }}
            >
              General
            </a>
            <a
              href="project-labels.html"
              className="btn-ghost"
              style={{ textAlign: "left" }}
            >
              Labels
            </a>
          </div>
        </div> */}
        <div className="justify-content-center align-items-center">
          <h2 className="mb-4">General Settings</h2>
          <div className="mb-3">
            <label>Project Name</label>
            <input
              type="text"
              className="fcc"
              defaultValue="Engineering Platform"
            />
          </div>
          <div className="mb-3">
            <label>Identifier</label>
            <input
              type="text"
              className="fcc"
              defaultValue="ENG"
              disabled
              style={{ fontFamily: "var(--font-mono)" }}
            />
            <small style={{ marginTop: 4, display: "block" }}>
              Identifiers cannot be changed after creation.
            </small>
          </div>
          <div className="mb-3">
            <label>Description</label>
            <textarea
              className="fcc"
              rows={3}
              defaultValue={
                "Core backend services, API gateway, and developer tooling for the platform."
              }
            />
          </div>
          <div className="mb-4">
            <label>Visibility</label>
            <div style={{ display: "flex", gap: 16 }}>
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  cursor: "pointer",
                  textTransform: "none",
                }}
              >
                <input
                  type="radio"
                  name="pVis"
                  defaultValue="public"
                  defaultChecked
                />{" "}
                Public (Workspace)
              </label>
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  cursor: "pointer",
                  textTransform: "none",
                }}
              >
                <input type="radio" name="pVis" defaultValue="private" />{" "}
                Private (Members only)
              </label>
            </div>
          </div>
          <div className="mb-4">
            <label>Project Type</label>
            <select className="fcc">
              <option selected>Software</option>
              <option>Marketing</option>
              <option>Design</option>
              <option>Operations</option>
            </select>
          </div>
          <button
            className="btn-primary"
            // onclick="showToast('Settings saved','success')"
          >
            Save Changes
          </button>
          <div className="danger-zone">
            <h3 style={{ color: "var(--danger)", marginBottom: 8 }}>
              Danger Zone
            </h3>
            <div className="danger-item">
              <div>
                <div
                  style={{
                    fontSize: 14,
                    fontWeight: 600,
                    color: "var(--text-primary)",
                  }}
                >
                  Archive Project
                </div>
                <div style={{ fontSize: 12, color: "var(--text-secondary)" }}>
                  Archived projects are read-only and hidden from default views.
                </div>
              </div>
              <button
                className="btn-secondary"
                style={{
                  color: "var(--warning)",
                  borderColor: "var(--warning)",
                }}
                // onclick="showConfirm({title:'Archive Project',message:'Archive this project?',confirmLabel:'Archive',confirmType:'warning',onConfirm:()=>showToast('Archived','success')})"
              >
                Archive Project
              </button>
            </div>
            <div className="danger-item admin-only-flex">
              <div>
                <div
                  style={{
                    fontSize: 14,
                    fontWeight: 600,
                    color: "var(--text-primary)",
                  }}
                >
                  Delete Project
                </div>
                <div style={{ fontSize: 12, color: "var(--text-secondary)" }}>
                  Permanently delete this project and all its issues.
                </div>
              </div>
              <button
                className="btn-danger"
                // onclick="showConfirm({title:'Delete Project',message:'Permanently delete Engineering Platform? This cannot be undone.',confirmLabel:'Delete Project',onConfirm:()=>window.location.href='project-list.html'})"
              >
                Delete Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectSettingPage;
