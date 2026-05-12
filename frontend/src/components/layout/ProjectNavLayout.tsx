import { NavLink, Outlet, useParams } from "react-router-dom";

const ProjectNavLayout = () => {
  const { projectId } = useParams();
  console.log("project id", projectId);

  return (
    <main className="main-wrapper" style={{ paddingBottom: 0 }}>
      <div className="breadcrumb-pms">
        <NavLink to="project-list.html">Projects</NavLink>
        <span className="sep">/</span>
        <NavLink to={`projects/${projectId}/board`}>
          Engineering Platform
        </NavLink>
        <span className="sep">/</span>
        <span className="current">Board</span>
      </div>
      <div className="project-tabs mb-0">
        <NavLink to={`${projectId}/board`} className="project-tab">
          Board
        </NavLink>
        <NavLink to={`${projectId}/backlog`} className="project-tab">
          Backlog
        </NavLink>
        <NavLink to={`${projectId}/sprints`} className="project-tab">
          Sprints
        </NavLink>
        <NavLink to={`${projectId}/reports`} className="project-tab manager-up">
          Reports
        </NavLink>
        <NavLink to={`${projectId}/members`} className="project-tab manager-up">
          Members
        </NavLink>
        <NavLink to={`${projectId}/settings`} className="project-tab manager-up">
          Settings
        </NavLink>
      </div>

      {/* outlet */}
      <Outlet />
    </main>
  );
};

export default ProjectNavLayout;
