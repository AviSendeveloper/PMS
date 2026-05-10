import classNames from "classnames";

const CreateProjectModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  return (
    <div
      className={classNames("modal-overlay", {
        open: isOpen,
      })}
    >
      <div className="modal-panel" style={{ width: 520 }}>
        <div className="modal-header">
          <h3>New Project</h3>
          <button className="modal-close" onClick={onClose}>
            ✕
          </button>
        </div>
        <div className="mb-3">
          <label htmlFor="projName">Project Name</label>
          <input
            type="text"
            id="projName"
            className="fcc"
            placeholder="e.g. Mobile App"
            // oninput="autoIdent()"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="projIdent">Identifier</label>
          <input
            type="text"
            id="projIdent"
            className="fcc"
            placeholder="ENG"
            maxLength={5}
            style={{
              fontFamily: "var(--font-mono)",
              textTransform: "uppercase",
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="projDesc">Description</label>
          <textarea
            id="projDesc"
            className="fcc"
            rows={2}
            placeholder="What is this project about?"
            defaultValue={""}
          />
        </div>
        <div className="mb-3">
          <label>Visibility</label>
          <div className="d-flex gap-3 mt-1">
            <label
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                cursor: "pointer",
                textTransform: "none",
                letterSpacing: 0,
              }}
            >
              <input
                type="radio"
                name="projVis"
                defaultValue="public"
                defaultChecked
              />{" "}
              Public
            </label>
            <label
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                cursor: "pointer",
                textTransform: "none",
                letterSpacing: 0,
              }}
            >
              <input type="radio" name="projVis" defaultValue="private" />{" "}
              Private
            </label>
          </div>
        </div>
        <div className="mb-3">
          <label>Type</label>
          <div className="type-grid" id="typeGrid">
            <div
              className="type-opt selected"

              // onClick="selectType(this,'Software')"
            >
              <i className="bi bi-code-slash" />
              <span>Software</span>
            </div>
            <div
              className="type-opt"
              // onClick="selectType(this,'Marketing')"
            >
              <i className="bi bi-megaphone" />
              <span>Marketing</span>
            </div>
            <div
              className="type-opt"
              // onClick="selectType(this,'Design')"
            >
              <i className="bi bi-palette" />
              <span>Design</span>
            </div>
            <div
              className="type-opt"
              // onClick="selectType(this,'Operations')"
            >
              <i className="bi bi-gear" />
              <span>Operations</span>
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <button className="btn-secondary" onClick={onClose}>
            Cancel
          </button>
          <button
            className="btn-primary"
            // onClick="createProject()"
          >
            Create Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateProjectModal;
