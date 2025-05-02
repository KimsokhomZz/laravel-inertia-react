import AdminLayout from "@/Layouts/AdminLayout";
import React from "react";

import Table from "@/Components/Table";
import TableHeaderCell from "@/Components/TableHeaderCell";
import TableRow from "@/Components/TableRow";
import TableDataCell from "@/Components/TableDataCell";
import { Head, Link } from "@inertiajs/react";

const PermissionsIndex = ({ permissions }) => {
    return (
        <>
            <Head title="Permissions Index" />
            <AdminLayout>
                <div className="max-w-7xl mx-auto py-4">
                    <div className="flex justify-between">
                        <h1>Permission Page</h1>
                        <Link
                            href={route("permissions.create")}
                            className="text-white font-semibold px-3 py-2 bg-indigo-500 hover:bg-indigo-700 rounded-lg"
                        >
                            New Permission
                        </Link>
                    </div>
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
                                    <TableDataCell className="flex gap-4">
                                        <Link
                                            href={route(
                                                "permissions.edit",
                                                permission.id
                                            )}
                                            className="text-green-400 hover:text-green-600 font-semibold"
                                        >
                                            Edit
                                        </Link>
                                        <Link
                                            href={route(
                                                "permissions.destroy",
                                                permission.id
                                            )}
                                            method="DELETE"
                                            className="text-red-400 hover:text-red-600 font-semibold"
                                        >
                                            Delete
                                        </Link>
                                    </TableDataCell>
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
