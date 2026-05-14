import type { BacklogIssue } from "../project.type";

const BacklogIssueRow = ({
  issue,
  key,
  selectIssue,
}: {
  issue: BacklogIssue;
  key: number;
  selectIssue: (issueId: number) => void;
}) => {
  const typeIcons = {
    bug: "bi-bug",
    feature: "bi-star",
    task: "bi-check2-square",
    docs: "bi-file-text",
  };

  return (
    <div
      className="issue-row"
      id={`ir-${key}`}
      data-id={`${key}`}
      onClick={() => selectIssue(issue.id)}
      //   ondblclick="window.location.href='issue-detail.html'"
    >
      <input
        type="checkbox"
        className="issue-cb"
        //   onclick="event.stopPropagation();toggleCheck(${key})" ${checked.has(key)?'checked':''}
      />
      <span
        className={`priority-dot priority-${issue.priority}`}
        title={`${issue.priority}`}
      />
      <span className="issue-row-ident">{issue.ident}</span>
      <span className="issue-row-title">{issue.title}</span>
      <i
        className={`bi ${typeIcons[issue.type] || "bi-circle"}`}
        style={{ color: "var(--text-muted)", fontSize: 13, flexShrink: 0 }}
      />
      <div className="issue-row-status">
        <span
          className="status-badge status-${issue.status}"
          style={{ fontSize: 11, padding: "1px 7px" }}
        >
          {issue.status}
        </span>
      </div>
      <div className="issue-row-assignee">
        {issue.assignee ? (
          <div className="avatar avatar-sm">{issue.assignee}</div>
        ) : (
          <div
            style={{
              width: 24,
              height: 24,
              border: "1px dashed var(--bg-border)",
              borderRadius: "50%",
            }}
          />
        )}
      </div>
      <div className="issue-row-points">{issue.points || "-"}</div>
      <div className="issue-row-due">{issue.due || "—"}</div>
    </div>
  );
};

export default BacklogIssueRow;
