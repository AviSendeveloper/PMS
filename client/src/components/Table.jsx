import React from 'react'

const Table = () => {
    return (
        <div className="card">
            <div className="card-body p-0">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Task</th>
                            <th>Progress</th>
                            <th>Label</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1.</td>
                            <td>Update software</td>
                            <td>
                                <div className="progress progress-xs">
                                    <div className="progress-bar progress-bar-danger" style={{ width: "55%" }}></div>
                                </div>
                            </td>
                            <td><span className="badge bg-danger">55%</span></td>
                        </tr>
                        <tr>
                            <td>2.</td>
                            <td>Clean database</td>
                            <td>
                                <div className="progress progress-xs">
                                    <div className="progress-bar bg-warning" style={{ width: "70%" }}></div>
                                </div>
                            </td>
                            <td><span className="badge bg-warning">70%</span></td>
                        </tr>
                        <tr>
                            <td>3.</td>
                            <td>Cron job running</td>
                            <td>
                                <div className="progress progress-xs progress-striped active">
                                    <div className="progress-bar bg-primary" style={{ width: "30%" }}></div>
                                </div>
                            </td>
                            <td><span className="badge bg-primary">30%</span></td>
                        </tr>
                        <tr>
                            <td>4.</td>
                            <td>Fix and squish bugs</td>
                            <td>
                                <div className="progress progress-xs progress-striped active">
                                    <div className="progress-bar bg-success" style={{ width: "90%" }}></div>
                                </div>
                            </td>
                            <td><span className="badge bg-success">90%</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="card-footer clearfix">
                <ul class="pagination pagination-sm m-0 float-right">
                    <li class="page-item"><a class="page-link" href="#">&laquo;</a></li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item"><a class="page-link" href="#">&raquo;</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Table