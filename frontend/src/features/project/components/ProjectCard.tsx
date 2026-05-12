import { Link } from "react-router-dom";
import type { Project } from "../project.type";
import classNames from "classnames";

const ROLE: string = "admin";

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="col-md-6 col-xl-4">
      <div className="proj-card" id="proj-${project.id}">
        <div className="proj-card-head">
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span className="proj-ident">{project.ident}</span>
            <span
              className={classNames(
                "vis-badge",
                project.visibility === "public" ? "vis-public" : "vis-private",
              )}
            >
              {project.visibility === "public" ? "Public" : "Private"}
            </span>
            {project.archived && (
              <span className="status-badge status-cancelled">Archived</span>
            )}
          </div>
          <div style={{ position: "relative" }}>
            <button
              className="three-dot"
              //   onclick="toggleProjMenu(event,${project.id})"
            >
              ···
            </button>
            <div
              className="dropdown-pms proj-card-menu"
              id="menu-${project.id}"
            >
              <a href="project-board.html" className="dropdown-item-pms">
                <i className="bi bi-kanban" />
                View Board
              </a>
              <a href="project-backlog.html" className="dropdown-item-pms">
                <i className="bi bi-list-task" />
                Backlog
              </a>
              {ROLE !== "member" && (
                <>
                  <a
                    href="project-settings.html"
                    className="dropdown-item-pms manager-up"
                  >
                    <i className="bi bi-gear" />
                    Settings
                  </a>
                  <div className="dropdown-sep manager-up" />
                  <div
                    className="dropdown-item-pms manager-up"
                    // onclick="archiveProject(${project.id})"
                  >
                    <i className="bi bi-archive" />
                    Archive
                  </div>
                </>
              )}
              {ROLE === "admin" && (
                <div
                  className="dropdown-item-pms danger admin-only"
                  // onclick="deleteProject(${project.id})"
                >
                  <i className="bi bi-trash" />
                  Delete
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="proj-name">{project.name}</div>
        <div className="proj-desc">{project.desc}</div>
        <div style={{ marginBottom: 10 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: 11,
              color: "var(--text-muted)",
              marginBottom: 4,
            }}
          >
            <span>Progress</span>
            <span>{project.progress}%</span>
          </div>
          <div className="progress-pms">
            <div
              className={classNames("progress-fill", {
                success: project.progress === 100,
              })}
              style={{ width: `${project.progress}%` }}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div className="avatar-stack">
            {project.members
              .slice(0, 5)
              .reverse()
              .map((m: string) => (
                <div className="avatar avatar-sm" title="${m}">
                  {m}
                </div>
              ))}
            {project.members.length > 5 && (
              <div
                className="avatar avatar-sm"
                style={{
                  background: "var(--bg-border)",
                  color: "var(--text-muted)",
                }}
              >
                +{project.members.length - 5}
              </div>
            )}
          </div>
          <div className="proj-stats">
            {project.issues} issues · {project.open} open
            {project.overdue > 0 && " . "}
            {project.overdue > 0 && (
              <span style={{ color: "var(--danger)" }}>
                {project.overdue} overdue
              </span>
            )}
          </div>
        </div>
        <div className="proj-footer">
          <span>Updated {project.updated}</span>
          <Link
            to={`/projects/${project.id}/board`}
            className="btn-ghost"
            style={{ padding: "3px 8px", fontSize: 12 }}
          >
            View Board →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
