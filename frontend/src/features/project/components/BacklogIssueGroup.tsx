import { useState } from "react";
import type { Backlog } from "../project.type";
import BacklogIssueRow from "./BacklogIssueRow";

const BacklogIssueGroup = ({ backlog, key, selectIssue }: { backlog: Backlog, key: string, selectIssue: (backlogId: string, issueId: number) => void }) => {
  const statusMap={active:'status-inprogress',planned:'status-todo',closed:'status-done'};
  
  const [isExpanded, setIsExpanded] = useState<boolean>(true);

  const toggleExpanded = () => {
    setIsExpanded(pre => !pre)
  }

  const handleSelectIssue = (issueId: number) => {
    selectIssue(backlog.id, issueId);
  };

  return (
    <div className="sprint-group">
      <div
        className="sprint-group-header"
        onClick={toggleExpanded}
      >
        <i
          className="bi bi-chevron-down sprint-toggle"
          id={`tog-${backlog.id}`}
        />
        <span className="sprint-group-name">{backlog.name}</span>
        <span className={`status-badge ${statusMap[backlog.status]}`}>
          {backlog.status}
        </span>
        <span style={{ fontSize: 12, color: "var(--text-muted)" }}>
          {backlog.dates}
        </span>
        <div style={{ marginLeft: "auto", display: "flex", gap: 6 }}>
          {backlog.status === "active" && (
            <button
              className="bulk-btn manager-up"
              // onclick="event.stopPropagation();showToast('Sprint closed','warning')"
            >
              Close Sprint
            </button>
          )}
          {backlog.status === "planned" && (
            <button
              className="bulk-btn manager-up"
              // onclick="event.stopPropagation();showToast('Sprint started!','success')"
            >
              Start Sprint
            </button>
          )}
        </div>
      </div>
      <div id={`sg-${key}`} className="sprint-issue-list" style={{display: isExpanded ? "block" : "none"}}>
        {backlog.issues.map((issue, index) => (
          <BacklogIssueRow issue={issue} key={index} selectIssue={handleSelectIssue}/>
        ))}
      </div>
    </div>
  );
};

export default BacklogIssueGroup;
