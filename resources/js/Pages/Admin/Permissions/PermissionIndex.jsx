import AdminLayout from "@/Layouts/AdminLayout";
import React from "react";

import Table from "@/Components/Table";
import TableHeaderCell from "@/Components/TableHeaderCell";
import TableRow from "@/Components/TableRow";
import TableDataCell from "@/Components/TableDataCell";
import { Head } from "@inertiajs/react";

const PermissionsIndex = ({ permissions }) => {
    return (
        <>
            <Head title="dashboard" />
            <AdminLayout>
                <div className="max-w-7xl mx-auto py-4">
                    <h1>Permissions Index Page</h1>
                    <div className="overflow-x-auto shadow-md sm:rounded-lg mt-6">
                        <Table
                            header={
                                <TableRow>
                                    <TableHeaderCell>ID</TableHeaderCell>
                                    <TableHeaderCell>Name</TableHeaderCell>
                                    <TableHeaderCell>Actions</TableHeaderCell>
                                </TableRow>
                            }
                        >
                            {permissions.map((permission) => (
                                <TableRow
                                    key={permission.id}
                                    className="border-b text-gray-800"
                                >
                                    <TableDataCell>
                                        {permission.id}
                                    </TableDataCell>
                                    <TableDataCell>
                                        {permission.name}
                                    </TableDataCell>
                                    <TableDataCell>Edit/Delete</TableDataCell>
                                </TableRow>
                            ))}
                        </Table>
                    </div>
                </div>
            </AdminLayout>
        </>
    );
};

export default PermissionsIndex;
