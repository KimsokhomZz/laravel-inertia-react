import AdminLayout from "@/Layouts/AdminLayout";
import React from "react";

import Table from "@/Components/Table";
import TableHeaderCell from "@/Components/TableHeaderCell";
import TableRow from "@/Components/TableRow";
import TableDataCell from "@/Components/TableDataCell";
import { Head, Link } from "@inertiajs/react";

const UserIndex = ({ users }) => {
    return (
        <>
            <Head title="Users index" />
            <AdminLayout>
                <div className="max-w-7xl mx-auto py-4">
                    <div className="flex justify-between">
                        <h1>User Index Page</h1>
                        <Link
                            href={route("users.create")}
                            className="text-white font-semibold px-3 py-2 bg-indigo-500 hover:bg-indigo-700 rounded-lg"
                        >
                            New User
                        </Link>
                    </div>
                    <div className="overflow-x-auto shadow-md sm:rounded-lg mt-6">
                        <Table
                            header={
                                <TableRow>
                                    <TableHeaderCell>ID</TableHeaderCell>
                                    <TableHeaderCell>Name</TableHeaderCell>
                                    <TableHeaderCell>Email</TableHeaderCell>
                                    <TableHeaderCell>Actions</TableHeaderCell>
                                </TableRow>
                            }
                        >
                            {users.map((user) => (
                                <TableRow
                                    key={user.id}
                                    className="border-b text-gray-800"
                                >
                                    <TableDataCell>{user.id}</TableDataCell>
                                    <TableDataCell>{user.name}</TableDataCell>
                                    <TableDataCell>{user.email}</TableDataCell>
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

export default UserIndex;
