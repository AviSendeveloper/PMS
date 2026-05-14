import { useState } from "react";
import "../style/ProjectBacklogPage.css";
import { sprintBacklogs } from "../dummy.data";
import type { Backlog, BacklogIssue } from "../project.type";
import BacklogIssueGroup from "../components/BacklogIssueGroup";
import BacklogIssueDetails from "../components/BacklogIssueDetails";

const ProjectBacklogPage = () => {
  const [backlogs, setBacklogs] = useState<Backlog[]>(sprintBacklogs);
  const [selectedIssue, setSelecredIssue] = useState<BacklogIssue>(null);

  const selectIssue = (backlogId: string, issueId: number) => {
    const backlog = backlogs.find((backlog) => backlog.id === backlogId);
    if (backlog) {
      const issue = backlog.issues.find((issue) => issue.id === issueId);
      setSelecredIssue(issue);
    }
  };

  const renderBacklogs = () => {
    return backlogs.map((backlog) => (
      <BacklogIssueGroup
        key={backlog.id}
        backlog={backlog}
        selectIssue={selectIssue}
      />
    ));
  };

  return (
    <>
      <div id="bulkBar" className="bulk-bar">
        <span
          id="bulkCount"
          style={{ fontSize: 13, fontWeight: 600, color: "var(--accent)" }}
        >
          0 selected
        </span>
        <button
          className="bulk-btn" // onclick="bulkAction('sprint')"
        >
          Move to Sprint ▾
        </button>
        <button
          className="bulk-btn" // onclick="bulkAction('priority')"
        >
          Change Priority ▾
        </button>
        <button
          className="bulk-btn" // onclick="bulkAction('assignee')"
        >
          Change Assignee ▾
        </button>
        <button
          className="bulk-btn manager-up"
          style={{ color: "var(--danger)" }}
          // onclick="bulkDelete()"
        >
          Delete
        </button>
      </div>
      <div className="row g-3">
        <div className="col-lg-8">
          <div id="backlogContent">{renderBacklogs()}</div>
        </div>
        <div className="col-lg-4">
          <div className="preview-panel" id="previewPanel">
            <div className="preview-empty" id="previewEmpty" style={{ display: !selectedIssue ? "block" : "none" }}>
              <i
                className="bi bi-layout-sidebar-inset"
                style={{ fontSize: 32, color: "var(--text-muted)" }}
              />
              <p
                style={{ margin: "12px 0 4px", color: "var(--text-secondary)" }}
              >
                Select an issue to preview
              </p>
              <small>Click an issue row to see details here</small>
            </div>
            <div
              id="previewContent"
              style={{ display: selectedIssue ? "block" : "none" }}
            >
              {selectedIssue && <BacklogIssueDetails issue={selectedIssue} />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectBacklogPage;
