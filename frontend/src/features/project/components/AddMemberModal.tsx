import classNames from "classnames";

interface InviteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddMemberModal = ({ isOpen, onClose }: InviteModalProps) => {
  return (
    <div className={classNames("modal-overlay", { open: isOpen })} id="addMemberModal">
      <div className="modal-panel">
        <div className="modal-header">
          <h3>Add Member to Project</h3>
          <button
            className="modal-close"
            onClick={() => onClose()}
          >
            ✕
          </button>
        </div>
        <div className="mb-3">
          <label>Search Workspace Members</label>
          <input type="text" className="fcc" placeholder="Type a name..." />
          <div
            style={{
              border: "1px solid var(--bg-border)",
              borderRadius: "var(--radius-sm)",
              marginTop: 8,
              maxHeight: 120,
              overflowY: "auto",
              background: "var(--bg-elevated)",
            }}
          >
            <div
              style={{
                padding: "8px 12px",
                display: "flex",
                alignItems: "center",
                gap: 10,
                cursor: "pointer",
                borderBottom: "1px solid var(--bg-border)",
              }}
            >
              <div className="avatar avatar-sm">DK</div>
              <div style={{ flex: 1, fontSize: 13 }}>Dan Kelly</div>
              <span className="role-badge-sm">Member</span>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <label>Role for this project</label>
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
                name="pRole"
                defaultValue="member"
                defaultChecked
              />{" "}
              Member
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
              <input type="radio" name="pRole" defaultValue="manager" /> Manager
            </label>
          </div>
        </div>
        <div className="modal-footer">
          <button
            className="btn-secondary"
            onClick={() => onClose()}
          >
            Cancel
          </button>
          <button
            className="btn-primary"
            onClick={() => onClose()}
          >
            Add to Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddMemberModal;
