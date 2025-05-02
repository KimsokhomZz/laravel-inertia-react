import React from "react";

const TableDataCell = ({ children, className }) => {
    return <td className={`px-6 py-4 ${className}`} >{children}</td>;
};

export default TableDataCell;
