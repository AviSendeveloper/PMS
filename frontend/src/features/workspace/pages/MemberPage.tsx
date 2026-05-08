import "../style/MemberPage.css";
import InviteModal from "../components/InviteModal";
import useModal from "../hooks/useModal";
import ActiveMembers from "../components/members/ActiveMembers";
import PendingMembers from "../components/members/PendingMembers";
import SuspendedMembers from "../components/members/SuspendedMembers";
import { useEffect, useState } from "react";
import type {
  AllowedMemberType,
  Members,
  PendingMembers as PendingMemberType,
} from "../workspace.type";
import { activeMembers, pendingMembers, suspendedMembers } from "../dummy.data";
import classNames from "classnames";

const MemberPage = () => {
  const { isModelOpen: isInviteModelOpen, toggleModel: toggleInviteModel } =
    useModal();

  // selectd tab state
  const [selectedTab, setSelectedTab] = useState<AllowedMemberType>("active");
  const [members, setMembers] = useState<Members>([]);

  const switchTab = (tab: AllowedMemberType) => {
    setSelectedTab(tab);
  };

  useEffect(() => {
    let members = [] as Members;
    if (selectedTab === "active") {
      members = activeMembers;
    }
    if (selectedTab === "pending") {
      members = pendingMembers;
    }
    if (selectedTab === "suspended") {
      members = suspendedMembers;
    }
    setMembers(members);
  }, [selectedTab]);

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
            <button className="btn-primary" onClick={toggleInviteModel}>
              <i className="bi bi-person-plus" /> Invite Member
            </button>
          </div>
          <div className="d-flex align-items-center justify-content-between mb-4">
            <div className="tab-bar mb-0" style={{ flex: 1 }}>
              <a
                className={classNames("tab-item", {
                  active: selectedTab === "active",
                })}
                onClick={() => switchTab("active")}
              >
                Active {selectedTab === "active" && `(${members.length})`}
              </a>
              <a
                className={classNames("tab-item", {
                  active: selectedTab === "pending",
                })}
                onClick={() => switchTab("pending")}
              >
                Pending Invites{" "}
                {selectedTab === "pending" && `(${members.length})`}
              </a>
              <a
                className={classNames("tab-item", {
                  active: selectedTab === "suspended",
                })}
                onClick={() => switchTab("suspended")}
              >
                Suspended {selectedTab === "suspended" && `(${members.length})`}
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
          {selectedTab === "active" && (
            <ActiveMembers activeMembers={members} />
          )}
          {/* Pending Tab */}
          {selectedTab === "pending" && (
            <PendingMembers pendingMembers={members as PendingMemberType} />
          )}
          {/* Suspended Tab */}
          {selectedTab === "suspended" && (
            <SuspendedMembers suspendedMembers={members} />
          )}
        </div>
      </main>
    </>
  );
};

export default MemberPage;
