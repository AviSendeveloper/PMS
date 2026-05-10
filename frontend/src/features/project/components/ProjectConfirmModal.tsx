import React from "react";

const ProjectConfirmModal = () => {
  return (
    <div className="modal-overlay" id="confirmModal">
      <div className="modal-panel" style={{ maxWidth: 400 }}>
        <div className="modal-header">
          <h3 id="confirmTitle">Confirm</h3>
          <button
            className="modal-close"
            //   onclick="closeModal('confirmModal')"
          >
            ✕
          </button>
        </div>
        <p id="confirmMessage" />
        <div className="modal-footer">
          <button
            className="btn-secondary"
            // onclick="closeModal('confirmModal')"
          >
            Cancel
          </button>
          <button className="btn-danger" id="confirmBtn">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectConfirmModal;
