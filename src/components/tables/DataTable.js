import React from 'react';

const DataTable = ({ columns, data, renderRow }) => {
    return (
        <div className="data-table-wrapper">
            <table className="data-table">
                <thead>
                    <tr>
                        {columns.map((col, i) => (
                            <th key={i}>{col}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, i) => renderRow(item, i))}
                </tbody>
            </table>
        </div>
    );
};

export default DataTable;
