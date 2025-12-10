import React from 'react'

const DEFAULT_ACTION_HEADER_NAME = 'ACTION';

const Table = ({ headers, tableData, onChange, onEdit, onDelete, config = null }) => {
    const isActionRequired = config?.isAction ? true : false;

    const renderHeaders = () => {
        const headerItem = Object.values(headers);

        isActionRequired && headerItem.push(config?.actionHeaderName ?? DEFAULT_ACTION_HEADER_NAME)

        console.log(isActionRequired, headerItem);


        return headerItem.map((header, index) => {
            return <th key={`${header}-${index}`}>{header}</th>
        });
    }

    const renderData = () => {
        const headerKeys = Object.keys(headers);

        const editButton = isActionRequired && config?.actionList?.edit && <button type="button" class="btn btn-block btn-primary">Edit</button>;
        const deleteButton = isActionRequired && config?.actionList?.delete && <button type="button" class="btn btn-block btn-danger">Delete</button>;
        
        return tableData.map((row, index) => {
            return (
                <tr>
                    {
                        headerKeys.map(key => {
                            return <td key={`${key}-${index}`}>{row[key]}</td>
                        })
                    }
                        <td>{editButton}</td>
                        <td>{deleteButton}</td>
                </tr>
            )
        })
    }

    return (
        <div className="card">
            <div className="card-body p-0">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            {renderHeaders()}
                        </tr>
                    </thead>
                    <tbody>
                        {renderData()}
                    </tbody>
                </table>
            </div>
            <div className="card-footer clearfix">
                <ul className="pagination pagination-sm m-0 float-right">
                    <li className="page-item"><a className="page-link" href="#">&laquo;</a></li>
                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item"><a className="page-link" href="#">&raquo;</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Table