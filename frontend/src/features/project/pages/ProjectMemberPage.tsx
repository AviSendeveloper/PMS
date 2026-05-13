import { useState } from "react";
import { projectMembers as projMembers } from "../dummy.data";
import type { ProjectMember } from "../project.type";

const ProjectMember = () => {
  const [projectMembers, setProjectMembers] =
    useState<ProjectMember[]>(projMembers);

  const renderMembers = () => {
    return projectMembers.map((member: ProjectMember) => {
      return (
        <tr>
          <td>
            <div className="d-flex align-items-center gap-2">
              <div className="avatar avatar-sm">{member.initials}</div>
              {member.name}
            </div>
          </td>

          <td style={{ color: "var(--text-secondary)" }}>{member.email}</td>

          <td>
            <select
              className="fcc"
              style={{ width: "110px", padding: "4px 8px", fontSize: "12px" }}
              disabled={member.id === 1}
              defaultValue={member.prole}
            >
              <option value="Manager">Manager</option>
              <option value="Member">Member</option>
            </select>
          </td>

          <td>
            <a
              href="project-backlog.html"
              style={{
                display: "inline-block",
                background: "var(--bg-elevated)",
                padding: "2px 8px",
                borderRadius: "100px",
                fontSize: "12px",
                color: "var(--text-primary)",
                textDecoration: "none",
              }}
            >
              {member.assigned} issues
            </a>
          </td>

          <td style={{ color: "var(--text-muted)" }}>{member.added}</td>

          <td>
            <button
              className="btn-ghost"
              style={{
                padding: "4px 8px",
                fontSize: "12px",
                color: "var(--danger)",
              }}
              disabled={member.id === 1}
              // onClick={() => openModal("removeModal")}
            >
              Remove
            </button>
          </td>
        </tr>
      );
    });
  };

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
        <p>Only Project Managers can manage members.</p>
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
      <div id="pageContent">
        <div className="d-flex align-items-center justify-content-between mb-3">
          <h2 className="mb-0">Project Members (3)</h2>
          <button
            className="btn-primary manager-up"
            // onclick="openModal('addMemberModal')"
          >
            <i className="bi bi-plus" /> Add Member
          </button>
        </div>
        <div className="card-pms">
          <table className="tbl">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Project Role</th>
                <th>Assigned Issues</th>
                <th>Added</th>
                <th style={{ width: 100 }}>Actions</th>
              </tr>
            </thead>
            <tbody id="memberBody">
              {renderMembers()}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ProjectMember;
