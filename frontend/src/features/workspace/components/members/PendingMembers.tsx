import type { PendingMembers as PendingMembersType } from "../../workspace.type";

interface PendingMembersProps {
  pendingMembers: PendingMembersType;
}

const PendingMembers = ({ pendingMembers }: PendingMembersProps) => {
  const renderMembers = pendingMembers.map((member) => {
    return (
      <tr key={member.id}>
        <td>{member.email}</td>
        <td>
          <span className="badge-btn manager" style={{ cursor: "default" }}>
            {member.role}
          </span>
        </td>
        <td>{member.invitedBy}</td>
        <td style={{ color: "var(--text-muted)" }}>{member.sent}</td>
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
    );
  });

  return (
    <div id="tab-pending" className="card-pms">
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
        <tbody>{renderMembers}</tbody>
      </table>
    </div>
  );
};

export default PendingMembers;
