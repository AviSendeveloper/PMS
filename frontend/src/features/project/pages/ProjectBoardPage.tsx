import { useState } from "react";
import "../style/ProjectBoardPage.css";
import type { BoardColumn, BoardIssue } from "../project.type";
import { boardColumns as DUMMY_BOARD_COLUMNS, boardIssues as DUMMY_BOARD_ISSUES } from "../dummy.data";
import BoardColum from "../components/BoardColum";

const ProjectBoardPage = () => {
  const [boardColumns, setBoardColumns] = useState<BoardColumn[]>(DUMMY_BOARD_COLUMNS);
  const [issues, setIssues] = useState<BoardIssue[]>(DUMMY_BOARD_ISSUES);

  const renderBoardColumns = () => {
    return boardColumns.map((column) => <BoardColum key={column.id} column={column} issues={issues} />);
  };

  return (
    <>
      <div
        style={{
          padding: "16px 0 12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        <div className="filter-bar" style={{ marginBottom: 0 }}>
          <div
            className="presence-avatar filter-avatar"
            // onclick="this.classList.toggle('selected')"
            title="Sarah Chen"
          >
            SC
          </div>
          <div
            className="presence-avatar filter-avatar"
            // onclick="this.classList.toggle('selected')"
            title="Alex Admin"
          >
            AA
          </div>
          <div
            className="presence-avatar filter-avatar"
            // onclick="this.classList.toggle('selected')"
            title="Maria Lopez"
          >
            ML
          </div>
          <div
            className="presence-avatar filter-avatar"
            // onclick="this.classList.toggle('selected')"
            title="Tom Singh"
          >
            TS
          </div>
          <select className="filter-select">
            <option>All Priority</option>
            <option>Urgent</option>
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
          <select className="filter-select" id="labelFilter">
            <option>All Labels</option>
            <option>bug</option>
            <option>feature</option>
            <option>docs</option>
            <option>perf</option>
          </select>
          <select className="filter-select" id="groupBy">
            <option>Group: Status</option>
            <option>Group: Assignee</option>
            <option>Group: Priority</option>
          </select>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div className="presence-bar">
            <span style={{ color: "var(--text-muted)" }}>Online:</span>
            <div
              className="presence-avatar"
              style={{
                position: "relative",
                width: 26,
                height: 26,
                marginRight: 2,
              }}
              title="Sarah Chen — viewing this board"
            >
              <div
                className="avatar avatar-sm"
                style={{ width: 26, height: 26, fontSize: 9 }}
              >
                SC
              </div>
              <div className="presence-dot" />
            </div>
            <div
              className="presence-avatar"
              style={{
                position: "relative",
                width: 26,
                height: 26,
                marginRight: 2,
              }}
              title="Tom Singh — viewing this board"
            >
              <div
                className="avatar avatar-sm"
                style={{
                  width: 26,
                  height: 26,
                  fontSize: 9,
                  background: "rgba(63,185,80,.15)",
                  color: "var(--success)",
                }}
              >
                TS
              </div>
              <div className="presence-dot" />
            </div>
            <div
              className="presence-avatar"
              style={{ position: "relative", width: 26, height: 26 }}
              title="Maria Lopez — viewing this board"
            >
              <div
                className="avatar avatar-sm"
                style={{
                  width: 26,
                  height: 26,
                  fontSize: 9,
                  background: "rgba(210,153,34,.15)",
                  color: "var(--warning)",
                }}
              >
                ML
              </div>
              <div className="presence-dot" />
            </div>
          </div>
          <button
            className="btn-primary all-roles"
            // onclick="openNewIssueModal()"
          >
            <i className="bi bi-plus" /> New Issue
          </button>
        </div>
      </div>
      <div className="board-wrap">
        <div className="board-cols" id="boardCols">
          {renderBoardColumns()}
        </div>
      </div>
    </>
  );
};

export default ProjectBoardPage;
