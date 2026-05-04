import CreateWorkspaceForm from "../components/CreateWorkspaceForm";
import "../style/CreateWorkspacePage.css";

const CreateWorkspacePage = () => {
  return (
    <div>
      <div className="auth-logo">
        P<span>M</span>S
      </div>
      <div className="auth-card">
        <div className="step-pill">Step 1 of 1</div>
        <h2 className="mb-1">Set up your workspace</h2>
        <p className="mb-4">
          This is where your team will manage projects and tasks.
        </p>
        <div className="avatar-upload">
          <div className="avatar-circle" id="avatarCircle" title="Upload logo">
            <i className="bi bi-building" id="avatarIcon" />
          </div>
          <div>
            <div
              style={{
                fontWeight: 500,
                color: "var(--text-primary)",
                marginBottom: 4,
              }}
            >
              Workspace Logo
            </div>
            <button
              type="button"
              className="btn-sm"
              //   onclick="document.getElementById('avatarFileInput').click()"
            >
              Upload logo
            </button>
            <input
              type="file"
              id="avatarFileInput"
              accept="image/*"
              style={{ display: "none" }}
              //   onchange="previewAvatar(this)"
            />
            <div
              style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 4 }}
            >
              PNG, JPG up to 2MB
            </div>
          </div>
        </div>
        <CreateWorkspaceForm />
      </div>
    </div>
  );
};

export default CreateWorkspacePage;
