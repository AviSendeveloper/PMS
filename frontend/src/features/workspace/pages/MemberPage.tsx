import "../style/MemberPage.css";
import InviteModal from "../components/InviteModal";
import useModal from "../hooks/useModal";

const MemberPage = () => {
  const { isModelOpen: isInviteModelOpen, toggleModel: toggleInviteModel } = useModal();
  return (
    <>
      <InviteModal isOpen={isInviteModelOpen} onClose={toggleInviteModel} />
      <main className="main-wrapper">
        {/* RBAC Block View */}
        <div
          id="rbacBlock"
          style={{ display: "none", textAlign: "center", paddingTop: "10vh" }}
        >
          <i
            className="bi bi-shield-lock"
            style={{ fontSize: 64, color: "var(--danger)" }}
          />
          <h2 className="mt-3">Admin Access Required</h2>
          <p>Only workspace administrators can manage members.</p>
          <a
            href="dashboard.html"
            className="btn-primary"
            style={{
              display: "inline-block",
              marginTop: 16,
              textDecoration: "none",
            }}
          >
            Go to Dashboard
          </a>
        </div>
        <div id="pageContent">
          <div className="d-flex align-items-center justify-content-between mb-3">
            <h1 className="mb-0">Workspace Members</h1>
            <button
              className="btn-primary"
            // onclick="openModal('inviteModal')"
            >
              <i className="bi bi-person-plus" /> Invite Member
            </button>
          </div>
          <div className="d-flex align-items-center justify-content-between mb-4">
            <div className="tab-bar mb-0" style={{ flex: 1 }}>
              <a
                className="tab-item active"
              // onclick="switchTab('active',this)"
              >
                Active (3)
              </a>
              <a
                className="tab-item"
              // onclick="switchTab('pending',this)"
              >
                Pending Invites (1)
              </a>
              <a
                className="tab-item"
              // onclick="switchTab('suspended',this)"
              >
                Suspended (1)
              </a>
            </div>
            <div style={{ width: 240 }}>
              <input
                type="text"
                className="fcc"
                placeholder="Search members..."
              />
            </div>
          </div>
          {/* Active Tab */}
          <div id="tab-active" className="card-pms">
            <table className="tbl">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Status</th>
                  <th>Joined</th>
                  <th style={{ width: 40 }} />
                </tr>
              </thead>
              <tbody id="activeBody">{/* Rendered by JS */}</tbody>
            </table>
          </div>
          {/* Pending Tab */}
          <div id="tab-pending" className="card-pms" style={{ display: "none" }}>
            <table className="tbl">
              <thead>
                <tr>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Invited By</th>
                  <th>Sent</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>jane@example.com</td>
                  <td>
                    <span
                      className="badge-btn manager"
                      style={{ cursor: "default" }}
                    >
                      Manager
                    </span>
                  </td>
                  <td>Alex Admin</td>
                  <td style={{ color: "var(--text-muted)" }}>2 days ago</td>
                  <td>
                    <div style={{ display: "flex", gap: 8 }}>
                      <button
                        className="btn-ghost"
                        style={{ padding: "4px 8px", fontSize: 12 }}
                      // onclick="showToast('Invitation resent','success')"
                      >
                        Resend
                      </button>
                      <button
                        className="btn-ghost"
                        style={{
                          padding: "4px 8px",
                          fontSize: 12,
                          color: "var(--danger)",
                        }}
                      // onclick="showToast('Invitation cancelled','warning')"
                      >
                        Cancel
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* Suspended Tab */}
          <div
            id="tab-suspended"
            className="card-pms"
            style={{ display: "none" }}
          >
            <table className="tbl">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Suspended By</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="d-flex align-items-center gap-2">
                      <div className="avatar avatar-sm">DK</div> Dan Kelly
                    </div>
                  </td>
                  <td style={{ color: "var(--text-secondary)" }}>
                    dan@example.com
                  </td>
                  <td>Alex Admin</td>
                  <td style={{ color: "var(--text-muted)" }}>Mar 15, 2026</td>
                  <td>
                    <button
                      className="btn-secondary"
                      style={{ fontSize: 12, padding: "4px 10px" }}
                    // onclick="showToast('Member reactivated','success')"
                    >
                      Reactivate
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </>
  );
};

export default MemberPage;
