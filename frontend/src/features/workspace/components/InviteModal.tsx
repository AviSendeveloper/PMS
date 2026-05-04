import classNames from "classnames";

interface InviteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const InviteModal = ({ isOpen, onClose }: InviteModalProps) => {
  return (
    <div
      className={classNames("modal-overlay", { open: isOpen })}
      id="inviteModal"
    >
      <div className="modal-panel">
        <div className="modal-header">
          <h3>Invite Member</h3>
          <button className="modal-close" onClick={onClose}>
            ✕
          </button>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="inviteEmail">Email Address</label>
          <input
            type="email"
            id="inviteEmail"
            className="fcc"
            placeholder="colleague@company.com"
          />
        </div>
        <div className="mb-3">
          <label>Role</label>
          <div className="d-flex gap-2 mt-1">
            <label
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                cursor: "pointer",
                textTransform: "none",
                letterSpacing: 0,
              }}
            >
              <input type="radio" name="invRole" defaultValue="admin" /> Admin
            </label>
            <label
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                cursor: "pointer",
                textTransform: "none",
                letterSpacing: 0,
              }}
            >
              <input
                type="radio"
                name="invRole"
                defaultValue="manager"
                defaultChecked
              />{" "}
              Manager
            </label>
            <label
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                cursor: "pointer",
                textTransform: "none",
                letterSpacing: 0,
              }}
            >
              <input type="radio" name="invRole" defaultValue="member" /> Member
            </label>
          </div>
        </div>
        <div className="modal-footer">
          <button className="btn-secondary" onClick={onClose}>
            Cancel
          </button>
          <button className="btn-primary" onClick={onClose}>
            Send Invitation
          </button>
        </div>
      </div>
    </div>
  );
};

export default InviteModal;
