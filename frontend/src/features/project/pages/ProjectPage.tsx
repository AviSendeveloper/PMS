import { useState } from "react";
import "../style/ProjectPage.css";
import type { Project } from "../project.type";
import { projectList } from "../dummy.data";
import ProjectCard from "../components/ProjectCard";
import CreateProjectModal from "../components/CreateProjectModal";
import useModal from "../../../hooks/useModal";

const ProjectPage = () => {
  const { isModelOpen: isCreateModalOpen, toggleModel: toggleCreateProjectModal } = useModal();
  const [projects, setProjects] = useState<Project[]>(projectList);

  const renderProjects = () => {
    return projects.map((p) => <ProjectCard key={p.id} project={p} />);
  };

  const handleCreateProjectModal = () => {
    toggleCreateProjectModal();
  };

  return (
    <>
      <CreateProjectModal
        isOpen={isCreateModalOpen}
        onClose={handleCreateProjectModal}
      />
      <main className="main-wrapper">
        <div className="d-flex align-items-center justify-content-between mb-3">
          <h1 className="mb-0">Projects</h1>
          <button
            className="btn-primary manager-up"
            onClick={handleCreateProjectModal}
          >
            <i className="bi bi-plus" /> New Project
          </button>
        </div>
        <div className="d-flex align-items-center justify-content-between mb-4">
          <div className="filter-bar">
            <select
              className="filter-select"
              id="filterStatus"
              // onchange="renderProjects()"
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="archived">Archived</option>
            </select>
            <select
              className="filter-select"
              id="sortBy"
              // onchange="renderProjects()"
            >
              <option value="name">Sort: Name</option>
              <option value="created">Sort: Created</option>
              <option value="updated">Sort: Updated</option>
            </select>
            <label
              className="admin-only"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                cursor: "pointer",
                textTransform: "none",
                letterSpacing: 0,
                fontSize: 13,
                color: "var(--text-secondary)",
                marginBottom: 0,
              }}
            >
              <input
                type="checkbox"
                id="showArchived"
                // onchange="renderProjects()"
              />{" "}
              Show Archived
            </label>
          </div>
          <div
            style={{ fontSize: 13, color: "var(--text-muted)" }}
            id="projCount"
          />
        </div>
        <div className="row g-3" id="projectGrid">
          {renderProjects()}
        </div>
      </main>
    </>
  );
};

export default ProjectPage;
