import React from "react";

const Table = ({header, children}) => {
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    {/* <slot name="header"></slot> */}
                    {header}
                </thead>
                <tbody>
                    {/* <slot></slot> */}
                    {children}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
