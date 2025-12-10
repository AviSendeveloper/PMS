import React, { useState } from 'react'
import Table from '../components/Table'

const staticHeaders = {
    id: 'ID',
    name: 'NAME',
    email: 'EMAIL',
    progress: 'PROGRESS'
};

const staicEmployeeData = [
    {
        id: 1,
        name: 'Demo',
        email: 'demo@email.com',
        progress: <div className="progress progress-xs">
                                    <div className="progress-bar progress-bar-danger" style={{ width: "55%" }}></div>
                                </div>
    },
    {
        id: 2,
        name: 'Demo',
        email: 'demo@email.com',
        progress: <div className="progress progress-xs">
                                    <div className="progress-bar progress-bar-warning" style={{ width: "70%" }}></div>
                                </div>
    },
    {
        id: 3,
        name: 'Demo',
        email: 'demo@email.com',
        progress: <div className="progress progress-xs">
                                    <div className="progress-bar progress-bar-primary" style={{ width: "90%" }}></div>
                                </div>
    },
    {
        id: 4,
        name: 'Demo',
        email: 'demo@email.com',
        progress: <div className="progress progress-xs">
                                    <div className="progress-bar progress-bar-success" style={{ width: "60%" }}></div>
                                </div>
    },
    {
        id: 5,
        name: 'Demo',
        email: 'demo@email.com',
        progress: <div className="progress progress-xs">
                                    <div className="progress-bar progress-bar-danger" style={{ width: "55%" }}></div>
                                </div>
    },
];

const tableConfig = {
    isAction: true,
    actionList: {
        edit: true,
        delete: true
    },
    actionHeaderName: 'ACTION'
}

const Employee = () => {
    const [headers, setHeaders] = useState(staticHeaders);
    const [employees, setEmployees] = useState(staicEmployeeData);

    const handleChange = () => { }

    const handleEdit = () => { }

    const handleDelete = () => { }

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
                                <li className="breadcrumb-item"><a href="#">Home</a></li>
                                <li className="breadcrumb-item active">Employee List</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>

            <section className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div class="col-md-12">
                            <Table headers={headers} tableData={employees} onChange={handleChange} onEdit={handleEdit} onDelete={handleDelete} config={tableConfig}/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Employee