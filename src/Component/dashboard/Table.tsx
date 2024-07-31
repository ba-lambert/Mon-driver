import React, { useState } from 'react';

interface Column {
    header: string;
    accessor: string;
}

interface Action {
    label: string;
    callback: (rowIndex: number) => void;
    className?: string;
}

interface TableProps {
    columns: Column[];
    tableData: any[];
    actions?: Action[]; // Make actions optional
    actionCellStyle?: React.CSSProperties; // Custom style for action cell
}

const Table: React.FC<TableProps> = ({ columns, tableData, actions = [], actionCellStyle }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchColumn, setSearchColumn] = useState<string>(columns[0]?.accessor || '');
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const filteredData = tableData.filter(row =>
        row[searchColumn].toString().toLowerCase().includes(searchTerm.toLowerCase())
    );

    const paginatedData = filteredData.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

    const totalPages = Math.ceil(filteredData.length / rowsPerPage);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
        setCurrentPage(1); // Reset to first page when searching
    };

    const handleSearchColumnChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSearchColumn(event.target.value);
        setCurrentPage(1); // Reset to first page when changing column
    };

    const handleRowsPerPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setRowsPerPage(parseInt(event.target.value));
        setCurrentPage(1); // Reset to first page when changing rows per page
    };

    const handlePageChange = (newPage: number) => {
        setCurrentPage(newPage);
    };

    return (
        <div className="p-4 text-xs xl:text-sm">
            <div className="mb-4 flex space-x-2">
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="text-sm px-4 py-1 border rounded"
                />
                <select
                    value={searchColumn}
                    onChange={handleSearchColumnChange}
                    className="text-sm px-4 py-1 border rounded"
                >
                    {columns.map(column => (
                        <option key={column.accessor} value={column.accessor}>
                            {column.header}
                        </option>
                    ))}
                </select>
                <select
                    value={rowsPerPage}
                    onChange={handleRowsPerPageChange}
                    className="text-sm px-4 py-1 border rounded"
                >
                    {[2, 5, 10, 15, 20].map(count => (
                        <option key={count} value={count}>
                            {count} rows
                        </option>
                    ))}
                </select>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                    <thead>
                    <tr>
                        {columns.map(column => (
                            <th key={column.header} className="py-2 px-4 text-start font-semibold border-b">
                                {column.header}
                            </th>
                        ))}
                        {actions && actions.length > 0 && (
                            <th className="py-2 px-4 border-b">Actions</th>
                        )}
                    </tr>
                    </thead>
                    <tbody>
                    {paginatedData.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {columns.map(column => (
                                <td key={column.accessor} className="py-2 px-4 border-b">
                                    {row[column.accessor]}
                                </td>
                            ))}
                            {actions && actions.length > 0 && (
                                <td className="py-2 px-4 border-b" style={actionCellStyle}>
                                    {actions.map(action => (
                                        <button
                                            key={action.label}
                                            onClick={() => action.callback(rowIndex)}
                                            className={`px-2 py-1 rounded mx-1 ${action.className}`}
                                        >
                                            {action.label}
                                        </button>
                                    ))}
                                </td>
                            )}
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            <div className="mt-4 flex justify-between">
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-4 py-2 border rounded disabled:opacity-50"
                >
                    Previous
                </button>
                <span>Page {currentPage} of {totalPages}</span>
                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 border rounded disabled:opacity-50"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Table;
