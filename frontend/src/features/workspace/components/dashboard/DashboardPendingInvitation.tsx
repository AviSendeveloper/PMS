import type { Invities, Invitie } from "../../workspace.type";

interface DashboardPendingInvitationProps {
    data: Invities;
    onInviteClick: () => void;
}

const DashboardPendingInvitation = ({ data, onInviteClick }: DashboardPendingInvitationProps) => {
    const renderPendingInvitations = () => {
        return data.map((inv: Invitie) => {
            return (
                <div className="invite-row">
                    <div className="invite-email">{inv.email}</div>
                    <span className="status-badge status-inprogress">{inv.role}</span>
                    <button className="btn-ghost" style={{ padding: '3px 8px', fontSize: 12 }}
                    // onClick="showToast('Invitation cancelled','warning')"
                    >Cancel</button>
                </div>

            )
        })
    }
    return (
        <div className="card-pms mb-3 admin-only" id="pendingCard">
            <div className="card-section-head">
                <span>Pending Invitations</span>
                <a href="members-workspace.html">Manage</a>
            </div>
            <div id="pendingList" >
                {renderPendingInvitations()}
            </div>
            <button className="btn-ghost" style={{ padding: '6px 0', fontSize: 13, marginTop: 8 }}
                onClick={onInviteClick}
            >
                <i className="bi bi-plus" /> Invite Member
            </button>
        </div>

    )
}

export default DashboardPendingInvitation