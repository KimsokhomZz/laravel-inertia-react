import React from "react";

const TableHeaderCell = ({ children }) => {
    return (
        <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {children}
        </th>
    );
};

export default TableHeaderCell;
