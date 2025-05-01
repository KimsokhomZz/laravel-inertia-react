import AdminLayout from "@/Layouts/AdminLayout";
import React from "react";

import Table from "@/Components/Table";
import TableHeaderCell from "@/Components/TableHeaderCell";
import TableRow from "@/Components/TableRow";
import TableDataCell from "@/Components/TableDataCell";
import { Head } from "@inertiajs/react";

const UserIndex = ({ users }) => {
    return (
        <>
            <Head title="Dashboard" />
            <AdminLayout>
                <div className="max-w-7xl mx-auto py-4">
                    <h1>User Index Page</h1>
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
