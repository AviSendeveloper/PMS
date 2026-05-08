import { generateInitials } from "../../../../utils/string-manipulation";
import type { Members } from "../../workspace.type";

interface SuspendedMembersProps {
  suspendedMembers: Members;
}

const SuspendedMembers = ({ suspendedMembers }: SuspendedMembersProps) => {
  const renderMembers = suspendedMembers.map((member) => {
    const nameInitials = generateInitials(member.name);
    return (
      <tr key={member.id}>
        <td>
          <div className="d-flex align-items-center gap-2">
            <div className="avatar avatar-sm">{nameInitials}</div> {member.name}
          </div>
        </td>
        <td style={{ color: "var(--text-secondary)" }}>{member.email}</td>
        <td>Alex Admin</td>
        <td style={{ color: "var(--text-muted)" }}>{member.joined}</td>
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
    );
  });

  return (
    <div id="tab-suspended" className="card-pms">
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
          {/* <tr>
            <td>
              <div className="d-flex align-items-center gap-2">
                <div className="avatar avatar-sm">DK</div> Dan Kelly
              </div>
            </td>
            <td style={{ color: "var(--text-secondary)" }}>dan@example.com</td>
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
          </tr> */}
          {renderMembers}
        </tbody>
      </table>
    </div>
  );
};

export default SuspendedMembers;
