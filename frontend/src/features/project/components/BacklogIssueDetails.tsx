import classNames from "classnames";
import type { BacklogIssue } from "../project.type";

const BacklogIssueDetails = ({ issue }: { issue: BacklogIssue }) => {
  return (
    <div>
      <div style={{ marginBottom: 16 }}>
        <div
          style={{
            fontSize: 11,
            color: "var(--text-muted)",
            fontFamily: "var(--font-mono)",
            marginBottom: 6,
          }}
        >
          {issue.ident}
        </div>
        <div
          style={{
            fontSize: 15,
            fontWeight: 600,
            color: "var(--text-primary)",
          }}
        >
          {issue.title}
        </div>
      </div>
      <div className="meta-row">
        <span style={{ color: "var(--text-secondary)" }}>Status</span>
        <span className="status-badge status-${issue.status}">
          {issue.status}
        </span>
      </div>
      <div className="meta-row">
        <span style={{ color: "var(--text-secondary)" }}>Priority</span>
        <div style={{ display: "flex", gap: 4 }}>
          {['urgent','high','medium','low'].map(p=>
          <button
            className={classNames("priority-btn",{active:p===issue.priority})}
            title={p}
            // onclick="showToast('Priority updated','success')"
          >
            <span className={`priority-dot priority-${p}`} />
          </button>
          )}
        </div>
      </div>
      <div className="meta-row">
        <span style={{ color: "var(--text-secondary)" }}>Assignee</span>{
        issue.assignee?
        <div className="avatar avatar-sm">
          {issue.assignee}
        </div>
        :<span style={{ color: "var(--text-muted)" }}>Unassigned</span>}
      </div>
      <div className="meta-row">
        <span style={{ color: "var(--text-secondary)" }}>Due Date</span>
        <span style={{ color: "var(--text-muted)" }}>
          {issue.due||'Not set'}
        </span>
      </div>
      <div className="meta-row">
        <span style={{ color: "var(--text-secondary)" }}>Points</span>
        <span style={{ color: "var(--text-muted)" }}>
          {issue.points||'—'}
        </span>
      </div>
      <div
        style={{
          marginTop: 16,
          paddingTop: 12,
          borderTop: "1px solid var(--bg-border)",
        }}
      >
        <a
          href="issue-detail.html"
          style={{
            color: "var(--accent)",
            fontSize: 13,
            textDecoration: "none",
          }}
        >
          Open Full Issue →
        </a>
      </div>
    </div>
  );
};

export default BacklogIssueDetails;
