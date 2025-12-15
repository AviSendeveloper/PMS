import React, { useState } from "react";
import Table from "../components/Table";
import ModalForm from "../components/modals/ModalForm";

const formOperationType = {
  create: "CREATE",
  edit: "EDIT",
};

const staticHeaders = {
  id: "ID",
  name: "NAME",
  email: "EMAIL",
  progress: "PROGRESS",
};

const staicEmployeeData = [
  {
    id: 1,
    name: "Demo",
    email: "demo@email.com",
    progress: (
      <div className="progress progress-xs">
        <div
          className="progress-bar progress-bar-danger"
          style={{ width: "55%" }}
        ></div>
      </div>
    ),
  },
  {
    id: 2,
    name: "Demo",
    email: "demo@email.com",
    progress: (
      <div className="progress progress-xs">
        <div
          className="progress-bar progress-bar-warning"
          style={{ width: "70%" }}
        ></div>
      </div>
    ),
  },
  {
    id: 3,
    name: "Demo",
    email: "demo@email.com",
    progress: (
      <div className="progress progress-xs">
        <div
          className="progress-bar progress-bar-primary"
          style={{ width: "90%" }}
        ></div>
      </div>
    ),
  },
  {
    id: 4,
    name: "Demo",
    email: "demo@email.com",
    progress: (
      <div className="progress progress-xs">
        <div
          className="progress-bar progress-bar-success"
          style={{ width: "60%" }}
        ></div>
      </div>
    ),
  },
  {
    id: 5,
    name: "Demo",
    email: "demo@email.com",
    progress: (
      <div className="progress progress-xs">
        <div
          className="progress-bar progress-bar-danger"
          style={{ width: "55%" }}
        ></div>
      </div>
    ),
  },
];

const tableConfig = {
  isAction: true,
  actionList: {
    edit: true,
    delete: true,
  },
  actionHeaderName: "ACTION",
};

const Employee = () => {
  const [employees, setEmployees] = useState(staicEmployeeData);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  // togle modal
  const [isModalShow, setIsModalShow] = useState(false);
  // modal operation type like create, edit
  const [operationType, setOperationType] = useState("");

  const handleChange = () => {};

  const handleEdit = (employeeDetails) => {
    setOperationType(formOperationType.edit);
    setSelectedEmployee(employeeDetails);
    setIsModalShow(true);
  };

  const handleDelete = () => {};

  const handleSubmit = (fieldValues) => {
    if (fieldValues.operationType == formOperationType.create) {
      // create operation
    } else if (fieldValues.operationType = formOperationType.edit) {
      // edit operaation
    }
    setSelectedEmployee(null);
    handleModalClose();
  };

  const handleModalOpen = () => {
    setOperationType(formOperationType.create);
    setSelectedEmployee(null);
    setIsModalShow(true);
  }

  const handleModalClose = () => {
    setOperationType("");
    setIsModalShow(false);
  };

  return (
    <div className="content-wrapper">
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Employee List</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item active">Employee List</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="content">
        <div className="container-fluid">
          {/* modal */}
          <ModalForm
            modalState={isModalShow}
            handleModalCLose={handleModalClose}
            initialFieldValues = {selectedEmployee}
            handleSubmit={handleSubmit}
            operationType={operationType}
          />

          <div className="row">
            {/* add button */}
            <div class="card-header">
              <button
                type="button"
                class="btn btn-block btn-sm btn-primary"
                onClick={() => {
                  handleModalOpen()
                }}
              >
                Add Employee
              </button>
            </div>

            {/* list data */}
            <div class="col-md-12">
              <Table
                headers={staticHeaders}
                tableData={employees}
                onChange={handleChange}
                onEdit={handleEdit}
                onDelete={handleDelete}
                config={tableConfig}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Employee;
