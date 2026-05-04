import "../style/IssueDetailsPage.css";

const IssueDetailsPage = () => {
  return (
    <main className="main-wrapper" style={{ padding: 0, display: "flex" }}>
      <div style={{ flex: 1, padding: 24, maxWidth: 800, margin: "0 auto" }}>
        <div className="breadcrumb-pms">
          <a href="project-list.html">Projects</a>
          <span className="sep">/</span>
          <a href="project-board.html">Engineering Platform</a>
          <span className="sep">/</span>
          <a href="project-board.html">Board</a>
          <span className="sep">/</span>
          <span className="current">ENG-42</span>
        </div>
        <div className="issue-header">
          <span className="issue-ident">ENG-42</span>
          <span className="type-badge">
            <i className="bi bi-bug" /> Bug
          </span>
        </div>
        <div style={{ marginBottom: 20 }}>
          <input
            type="text"
            className="issue-title-input"
            id="issueTitle"
            defaultValue="Fix authentication bug in OAuth flow"
            readOnly
          />
        </div>
        <div className="desc-box">
          <div className="d-flex justify-content-between mb-2">
            <label style={{ margin: 0 }}>Description</label>
            <button
              className="btn-ghost manager-up"
              style={{ padding: 0, fontSize: 12 }}
              // onclick="toggleEditDesc()"
              id="editDescBtn"
            >
              Edit
            </button>
          </div>
          <div id="descPreview" className="desc-preview">
            Users are reporting that they are getting stuck in an infinite
            redirect loop when trying to sign in using Google OAuth. This seems
            to happen primarily on mobile browsers. Steps to reproduce: 1. Go to
            login page on mobile Safari 2. Click "Continue with Google" 3.
            Select account 4. Observe redirect loop Expected: Successful login
            and redirect to dashboard.
          </div>
          <textarea
            id="descInput"
            className="desc-textarea"
            style={{ display: "none" }}
            defaultValue={
              'Users are reporting that they are getting stuck in an infinite redirect loop when trying to sign in using Google OAuth. This seems to happen primarily on mobile browsers.\n\nSteps to reproduce:\n1. Go to login page on mobile Safari\n2. Click "Continue with Google"\n3. Select account\n4. Observe redirect loop\n\nExpected: Successful login and redirect to dashboard.'
            }
          />
          <div
            id="descActions"
            style={{ display: "none", marginTop: 12, textAlign: "right" }}
          >
            <button
              className="btn-secondary"
              // onclick="toggleEditDesc()"
            >
              Cancel
            </button>
            <button
              className="btn-primary"
              // onclick="saveDesc()"
            >
              Save
            </button>
          </div>
        </div>
        <div className="panel-pms">
          <div className="panel-head">
            <span>Subtasks (1/2)</span>
            <div style={{ width: 100 }}>
              <div className="progress-pms">
                <div className="progress-fill" style={{ width: "50%" }} />
              </div>
            </div>
          </div>
          <div className="panel-body" style={{ padding: "0 16px" }}>
            <div className="subtask-row">
              <input
                type="checkbox"
                defaultChecked
                className="fcc"
                style={{ width: "auto", margin: 0 }}
              />
              <span
                className="mono"
                style={{ color: "var(--text-muted)", fontSize: 11 }}
              >
                ENG-48
              </span>
              <span
                style={{
                  flex: 1,
                  fontSize: 13,
                  textDecoration: "line-through",
                  color: "var(--text-muted)",
                }}
              >
                Update OAuth library to latest version
              </span>
              <span className="status-badge status-done">Done</span>
            </div>
            <div className="subtask-row">
              <input
                type="checkbox"
                className="fcc"
                style={{ width: "auto", margin: 0 }}
              />
              <span
                className="mono"
                style={{ color: "var(--text-muted)", fontSize: 11 }}
              >
                ENG-49
              </span>
              <span style={{ flex: 1, fontSize: 13 }}>
                Test flow on iOS Safari
              </span>
              <span className="status-badge status-todo">Todo</span>
            </div>
            <div style={{ padding: "8px 0" }}>
              <input
                type="text"
                className="fcc"
                placeholder="+ Add Subtask..."
                style={{ borderStyle: "dashed", background: "transparent" }}
              />
            </div>
          </div>
        </div>
        <div className="panel-pms">
          <div className="panel-head">
            <span>Attachments (2)</span>
            <button
              className="btn-ghost"
              style={{ padding: 0 }}
              // onclick="showToast('Upload simulated','info')"
            >
              <i className="bi bi-paperclip" /> Attach File
            </button>
          </div>
          <div className="panel-body">
            <div className="att-grid">
              <div className="att-card">
                <button
                  className="att-del"
                  // onclick="this.parentElement.remove()"
                >
                  <i className="bi bi-trash" />
                </button>
                <div className="att-thumb">
                  <i className="bi bi-image" />
                </div>
                <div className="att-info">
                  screenshot.png
                  <br />
                  1.2 MB · SC
                </div>
              </div>
              <div className="att-card">
                <button
                  className="att-del"
                  // onclick="this.parentElement.remove()"
                >
                  <i className="bi bi-trash" />
                </button>
                <div className="att-thumb">
                  <i className="bi bi-file-earmark-text" />
                </div>
                <div className="att-info">
                  logs.txt
                  <br />
                  45 KB · TS
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tab-bar">
          <a
            className="tab-item active"
            // onclick="switchTab('comments',this)"
          >
            Comments
          </a>
          <a
            className="tab-item"
            // onclick="switchTab('activity',this)"
          >
            Activity
          </a>
        </div>
        <div id="tab-comments">
          <div className="comment-list">
            <div className="comment-item">
              <div className="avatar">ML</div>
              <div className="comment-box">
                <div className="comment-head">
                  <span
                    style={{ fontWeight: 600, color: "var(--text-primary)" }}
                  >
                    Maria Lopez
                  </span>
                  <span style={{ color: "var(--text-muted)" }}>1 hour ago</span>
                </div>
                <div style={{ fontSize: 13, color: "var(--text-primary)" }}>
                  I looked into this. It seems to be related to the cross-site
                  cookie settings we deployed last week.
                </div>
                <div style={{ marginTop: 8, textAlign: "right" }}>
                  <button
                    className="btn-ghost"
                    style={{ padding: "0 4px", fontSize: 12 }}
                  >
                    <i className="bi bi-pencil" />
                  </button>
                  <button
                    className="btn-ghost manager-up"
                    style={{
                      padding: "0 4px",
                      fontSize: 12,
                      color: "var(--danger)",
                    }}
                  >
                    <i className="bi bi-trash" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              fontSize: 11,
              color: "var(--text-muted)",
              fontStyle: "italic",
              margin: "12px 0 0 44px",
            }}
            id="typingInd"
          >
            Maria is typing...
          </div>
          <div style={{ display: "flex", gap: 12, marginTop: 16 }}>
            <div className="avatar" id="myAvatar">
              AA
            </div>
            <div style={{ flex: 1 }}>
              <textarea
                className="fcc"
                rows={2}
                placeholder="Add a comment... (Type @ to mention)"
                defaultValue={""}
              />
              <div style={{ textAlign: "right", marginTop: 8 }}>
                <button
                  className="btn-primary"
                  // onclick="showToast('Comment added','success')"
                >
                  Add Comment
                </button>
              </div>
            </div>
          </div>
        </div>
        <div id="tab-activity" style={{ display: "none" }}>
          <div className="timeline-item">
            <div className="timeline-icon">
              <i className="bi bi-arrow-right-circle" />
            </div>
            <div>
              <div style={{ fontSize: 13, color: "var(--text-secondary)" }}>
                <strong style={{ color: "var(--text-primary)" }}>
                  Sarah Chen
                </strong>{" "}
                changed status from Todo to{" "}
                <strong style={{ color: "var(--text-primary)" }}>
                  In Progress
                </strong>
              </div>
              <div style={{ fontSize: 11, color: "var(--text-muted)" }}>
                2 hours ago
              </div>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-icon">
              <i className="bi bi-person-plus" />
            </div>
            <div>
              <div style={{ fontSize: 13, color: "var(--text-secondary)" }}>
                <strong style={{ color: "var(--text-primary)" }}>
                  Alex Admin
                </strong>{" "}
                assigned this to{" "}
                <strong style={{ color: "var(--text-primary)" }}>
                  Sarah Chen
                </strong>
              </div>
              <div style={{ fontSize: 11, color: "var(--text-muted)" }}>
                3 hours ago
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="meta-sidebar" style={{ width: 320, flexShrink: 0 }}>
        <div className="meta-section">
          <label>Status</label>
          <select className="fcc">
            <option>Backlog</option>
            <option>Todo</option>
            <option selected>In Progress</option>
            <option>In Review</option>
            <option>Done</option>
            <option>Blocked</option>
          </select>
        </div>
        <div className="meta-section">
          <label>Priority</label>
          <div style={{ display: "flex", gap: 4 }}>
            <button className="prio-btn active" title="Urgent">
              <span className="priority-dot priority-urgent" />
            </button>
            <button className="prio-btn" title="High">
              <span className="priority-dot priority-high" />
            </button>
            <button className="prio-btn" title="Medium">
              <span className="priority-dot priority-medium" />
            </button>
            <button className="prio-btn" title="Low">
              <span className="priority-dot priority-low" />
            </button>
          </div>
        </div>
        <div className="meta-section">
          <label>Assignee</label>
          <div className="meta-val">
            <div className="avatar avatar-sm">SC</div> Sarah Chen
          </div>
        </div>
        <div className="meta-section">
          <label>Labels</label>
          <div>
            <span
              className="chip"
              style={{
                color: "var(--danger)",
                borderColor: "rgba(248,81,73,0.3)",
                background: "rgba(248,81,73,0.1)",
              }}
            >
              <i className="bi bi-bug" /> bug
            </span>{" "}
            <button
              className="btn-ghost"
              style={{ padding: "2px 6px", fontSize: 11 }}
            >
              <i className="bi bi-plus" />
            </button>
          </div>
        </div>
        <div className="meta-section">
          <label>Due Date</label>
          <input type="date" className="fcc" defaultValue="2026-04-25" />
        </div>
        <div className="meta-section">
          <label>Sprint</label>
          <div className="meta-val">Sprint 5</div>
        </div>
        <div className="meta-section manager-up">
          <label>Story Points</label>
          <input
            type="number"
            className="fcc"
            defaultValue={5}
            style={{ width: 80 }}
          />
        </div>
        <div className="meta-section">
          <label>Depends On</label>
          <div className="meta-val">
            <span className="mono">ENG-29</span>{" "}
            <span className="status-badge status-blocked">Blocked</span>
          </div>
        </div>
        <div className="meta-section">
          <label>Watchers</label>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div className="avatar-stack">
              <div className="avatar avatar-sm">AA</div>
              <div className="avatar avatar-sm">SC</div>
            </div>
            <button
              className="btn-ghost"
              style={{ padding: "4px 8px", fontSize: 12 }}
            >
              <i className="bi bi-eye" /> Unwatch
            </button>
          </div>
        </div>
        <hr className="pms manager-up" />
        <div className="manager-up">
          <button
            className="btn-ghost"
            style={{ width: "100%", textAlign: "left", color: "var(--danger)" }}
            // onclick="showConfirm({title:'Delete Issue',message:'Delete ENG-42?',confirmLabel:'Delete',onConfirm:()=>window.location.href='project-board.html'})"
          >
            <i className="bi bi-trash" /> Delete Issue
          </button>
        </div>
        <div className="admin-only" style={{ marginTop: 8 }}>
          <button
            className="btn-ghost"
            style={{ width: "100%", textAlign: "left" }}
          >
            <i className="bi bi-folder-symlink" /> Move to Project...
          </button>
        </div>
      </div>
    </main>
  );
};

export default IssueDetailsPage;
