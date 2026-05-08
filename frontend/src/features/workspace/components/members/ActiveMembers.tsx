import { useEffect, useRef, useState } from "react";
import { generateInitials } from "../../../../utils/string-manipulation";
import type { Members } from "../../workspace.type";

interface ActiveMembersProps {
  activeMembers: Members;
}

const ActiveMembers = ({ activeMembers }: ActiveMembersProps) => {
  // tracks which dropdown is open: "rm-{id}" | "am-{id}" | null
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const containerRef = useRef<HTMLTableSectionElement>(null);

  const toggleDropdown = (key: string) => {
    setOpenDropdown((prev) => (prev === key ? null : key));
  };

  // Close dropdown when clicking outside the table body
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const renderMembers = activeMembers.map((member) => {
    const nameInitials = generateInitials(member.name);
    const roleMenuKey = `rm-${member.id}`;
    const actionMenuKey = `am-${member.id}`;

    return (
      <tr key={member.id}>
        <td>
          <div className="d-flex align-items-center gap-2">
            <div className="avatar avatar-sm">{nameInitials}</div>
            {member.name}
          </div>
        </td>

        <td style={{ color: "var(--text-secondary)" }}>{member.email}</td>

        <td>
          <div style={{ position: "relative" }}>
            <button
              className={`badge-btn ${member.role}`}
              onClick={() => toggleDropdown(roleMenuKey)}
            >
              {member.role.charAt(0).toUpperCase() + member.role.slice(1)}{" "}
              <i className="bi bi-chevron-down" style={{ fontSize: "10px" }} />
            </button>

            <div
              className="dropdown-pms role-menu"
              id={roleMenuKey}
              style={{ display: openDropdown === roleMenuKey ? "block" : "none" }}
            >
              <div
                className="dropdown-item-pms"
                onClick={() => setOpenDropdown(null)}
              >
                Admin
              </div>
              <div
                className="dropdown-item-pms"
                onClick={() => setOpenDropdown(null)}
              >
                Manager
              </div>
              <div
                className="dropdown-item-pms"
                onClick={() => setOpenDropdown(null)}
              >
                Member
              </div>
            </div>
          </div>
        </td>

        <td>
          <span className="status-badge status-done">Active</span>
        </td>

        <td style={{ color: "var(--text-muted)" }}>{member.joined}</td>

        <td>
          <div style={{ position: "relative", textAlign: "right" }}>
            <button
              className="three-dot"
              onClick={() => toggleDropdown(actionMenuKey)}
            >
              ···
            </button>

            <div
              className="dropdown-pms role-menu"
              id={actionMenuKey}
              style={{
                textAlign: "left",
                display: openDropdown === actionMenuKey ? "block" : "none",
              }}
            >
              <div
                className="dropdown-item-pms warning"
                onClick={() => setOpenDropdown(null)}
              >
                <i className="bi bi-pause-circle"></i> Suspend
              </div>

              <div
                className="dropdown-item-pms danger"
                onClick={() => setOpenDropdown(null)}
              >
                <i className="bi bi-person-x"></i> Remove
              </div>
            </div>
          </div>
        </td>
      </tr>
    );
  });

  return (
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
        <tbody id="activeBody" ref={containerRef}>
          {renderMembers}
        </tbody>
      </table>
    </div>
  );
};

export default ActiveMembers;

