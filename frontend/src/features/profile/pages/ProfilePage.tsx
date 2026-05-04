import "../style/ProfilePage.css";

const ProfilePage = () => {
  return (
    <main className="main-wrapper" style={{ maxWidth: 800 }}>
      <div className="profile-hero">
        <div className="avatar avatar-lg" id="profAvatar">
          AA
        </div>
        <div>
          <h1 className="mb-1" id="profName">
            Alex Admin
          </h1>
          <div
            style={{ color: "var(--text-secondary)", fontSize: 14 }}
            id="profEmail"
          >
            alex@example.com
          </div>
          <div style={{ marginTop: 8 }}>
            <span className="role-badge-sm" id="profRoleBadge">
              Admin
            </span>
          </div>
        </div>
      </div>
      <div className="row g-4">
        <div className="col-md-3">
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <a
              href="profile.html"
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
              href="api-tokens.html"
              className="btn-ghost"
              style={{ textAlign: "left" }}
            >
              API Tokens
            </a>
          </div>
        </div>
        <div className="col-md-9">
          <div className="card-pms mb-4">
            <h3 style={{ marginBottom: 16 }}>Personal Information</h3>
            <div className="mb-3">
              <label>Full Name</label>
              <input
                type="text"
                className="fcc"
                id="iName"
                defaultValue="Alex Admin"
              />
            </div>
            <div className="mb-3">
              <label>Email Address</label>
              <input
                type="email"
                className="fcc"
                id="iEmail"
                defaultValue="alex@example.com"
                disabled
              />
              <small style={{ display: "block", marginTop: 4 }}>
                Email address is managed by the workspace administrator.
              </small>
            </div>
            <div className="mb-3">
              <label>Bio</label>
              <textarea
                className="fcc"
                rows={3}
                defaultValue={
                  "                Lead engineer focusing on platform architecture.\n              "
                }
              />
            </div>
            <button
              className="btn-primary"
              //   onclick="showToast('Profile updated successfully','success')"
            >
              Save Profile
            </button>
          </div>
          <div className="card-pms mb-4">
            <h3 style={{ marginBottom: 16 }}>Preferences</h3>
            <div className="mb-3">
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  cursor: "pointer",
                  textTransform: "none",
                  letterSpacing: 0,
                }}
              >
                <input type="checkbox" defaultChecked /> Email notifications for
                mentions
              </label>
            </div>
            <div className="mb-3">
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  cursor: "pointer",
                  textTransform: "none",
                  letterSpacing: 0,
                }}
              >
                <input type="checkbox" defaultChecked /> Email notifications for
                assigned issues
              </label>
            </div>
            <button
              className="btn-primary"
              //   onclick="showToast('Preferences saved','success')"
            >
              Save Preferences
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProfilePage;
