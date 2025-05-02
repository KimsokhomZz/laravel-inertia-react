import AdminLayout from "@/Layouts/AdminLayout";
import React from "react";

import Table from "@/Components/Table";
import TableHeaderCell from "@/Components/TableHeaderCell";
import TableRow from "@/Components/TableRow";
import TableDataCell from "@/Components/TableDataCell";
import { Head, Link } from "@inertiajs/react";

const RoleIndex = ({ roles }) => {
    return (
        <>
            <Head title="Roles Index" />
            <AdminLayout>
                <div className="max-w-7xl mx-auto py-4">
                    <div className="flex justify-between">
                        <h1>Role Index Page</h1>
                        <Link
                            href={route("roles.create")}
                            className="text-white font-semibold px-3 py-2 bg-indigo-500 hover:bg-indigo-700 rounded-lg"
                        >
                            New Role
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
                            {roles.map((role) => (
                                <TableRow
                                    key={role.id}
                                    className="border-b text-gray-800"
                                >
                                    <TableDataCell>{role.id}</TableDataCell>
                                    <TableDataCell>{role.name}</TableDataCell>
                                    <TableDataCell className="flex gap-4">
                                        <Link
                                            href={route("roles.edit", role.id)}
                                            className="text-green-400 hover:text-green-600 font-semibold"
                                        >
                                            Edit
                                        </Link>
                                        <Link
                                            href={route(
                                                "roles.destroy",
                                                role.id
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

export default RoleIndex;
