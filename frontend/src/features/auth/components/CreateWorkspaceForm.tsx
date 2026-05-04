const CreateWorkspaceForm = () => {
  return (
    <div>
      <form id="wsForm" noValidate>
        <div className="fg">
          <label htmlFor="wsName">Workspace Name</label>
          <input
            type="text"
            id="wsName"
            className="fcc"
            placeholder="e.g. Acme Corp"
            //   oninput="updateSlug()"
          />
        </div>
        <div className="fg">
          <label htmlFor="wsSlug">Workspace URL</label>
          <div className="slug-row">
            <input
              type="text"
              id="wsSlug"
              className="fcc"
              placeholder="acme-corp"
              readOnly
            />
            <button
              type="button"
              className="btn-sm"
              id="editSlugBtn"
              // onclick="toggleSlugEdit()"
            >
              Edit
            </button>
          </div>
          <div className="slug-preview" id="slugPreview">
            app.pms.io/acme-corp
          </div>
        </div>
        <button type="submit" className="btn-p" id="createBtn">
          Create Workspace
        </button>
      </form>
    </div>
  );
};

export default CreateWorkspaceForm;
