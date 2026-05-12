import type { BoardColumn, BoardIssue } from "../project.type";
import BoardIssueCard from "./BoardIssueCard";

const BoardColum = ({
  column,
  issues,
}: {
  column: BoardColumn;
  issues: BoardIssue[];
}) => {
  const colIssues = issues.filter((i) => i.status === column.id);
  const isEmpty = colIssues.length === 0;
  return (
    <div
      className="board-col"
      id={`col-${column.id}`}
      //   ondragover="dragOver(event,this)"
      //   ondrop="drop(event,'${column.id}')"
    >
      <div className="col-header">
        <span className="${column.status} status-badge">{column.label}</span>
        <span className="col-count">{colIssues.length}</span>
        <button
          className="col-add"
          //   onclick="openNewIssueModal('${column.id}')"
          title="Add issue"
        >
          <i className="bi bi-plus" />
        </button>
      </div>
      <div className="col-body">
        {isEmpty && (
          <div className="empty-state" style={{ padding: "24px 0" }}>
            <i className="bi bi-inbox" />
            <p style={{ margin: "8px 0 4px" }}>No issues</p>
            <small>+ Add the first issue</small>
          </div>
        )}
        {colIssues.map((issu) => (
          <BoardIssueCard issue={issu} key={issu.id} />
        ))}
      </div>
      <div className="col-footer">
        <button
          className="add-issue-ghost"
          //   onclick="openNewIssueModal('${column.id}')"
        >
          <i className="bi bi-plus" /> Add Issue
        </button>
      </div>
    </div>
  );
};

export default BoardColum;
