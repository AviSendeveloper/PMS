import classNames from "classnames";
import type { BoardIssue } from "../project.type";

const BoardIssueCard = ({ issue }: { issue: BoardIssue }) => {
  const renderLabels = (labels: string[]) => {
    return (
      <>
        {labels &&
          labels
            .slice(0, 2)
            .map((l) => <span className="label-chip">{l}</span>)}

        {labels.length > 2 && (
          <span className="label-chip">+{labels.length - 2}</span>
        )}
      </>
    );
  };

  return (
    <div
      className="issue-card"
      id={`ic-${issue.id}`}
      data-id={issue.id}
      draggable="true"
      //   onclick="window.location.href='issue-detail.html'"
    >
      <div className="issue-ident">
        <span
          className={`priority-dot priority-${issue.priority}`}
          title={issue.priority}
        />
        <span>{issue.ident}</span>
      </div>
      <div className="issue-title">{issue.title}</div>
      {issue.labels && (
        <div style={{ marginBottom: 6 }}>{renderLabels(issue.labels)}</div>
      )}
      <div className="card-footer-row">
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span className={classNames("due-date", { overdue: issue.overdue })}>
            <i className="bi bi-calendar3" /> {issue.due}
          </span>
          {issue.subtasks && (
            <span className="subtask-count">
              <i className="bi bi-check2-square" /> {issue.subtasks}
            </span>
          )}
        </div>
        <div className="avatar avatar-sm" title={issue.assignee}>
          {issue.assignee}
        </div>
      </div>
      {issue.typing && (
        <div className="typing-indicator">Maria is typing...</div>
      )}
    </div>
  );
};

export default BoardIssueCard;
