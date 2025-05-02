import AdminLayout from "@/Layouts/AdminLayout";
import React from "react";
import { Head, Link, useForm } from "@inertiajs/react";
// import Checkbox from "@/Components/Checkbox";
// import GuestLayout from '@/Layouts/GuestLayout';
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";

const RoleCreate = () => {
    const form = useForm({
        name: "",
    });

    return (
        <>
            <Head title="Create new role" />
            <AdminLayout>
                <div className="max-w-7xl mx-auto py-4">
                    <div className="flex justify-between">
                        <h1>Create new role</h1>
                        <Link
                            href={route("roles.index")}
                            className="text-white font-semibold px-3 py-2 bg-indigo-500 hover:bg-indigo-700 rounded-lg"
                        >
                            Back
                        </Link>
                    </div>
                    <div className="overflow-x-auto shadow-md sm:rounded-lg mt-6 max-w-md mx-auto p-5 bg-gray-100">
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                form.post(route("roles.store"));
                            }}
                        >
                            <div>
                                <InputLabel htmlFor="name" value="Name" />

                                <TextInput
                                    id="name"
                                    type="text"
                                    name="name"
                                    value={form.data.name}
                                    className="mt-1 block w-full"
                                    autoComplete="username"
                                    isFocused={true}
                                    onChange={(e) =>
                                        form.setData("name", e.target.value)
                                    }
                                />

                                <InputError
                                    message={form.errors.name}
                                    className="mt-2"
                                />
                            </div>

                            <div className="mt-4 flex items-center">
                                {/* {canResetPassword && (
                                    <Link
                                        href={route("password.request")}
                                        className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                    >
                                        Forgot your password?
                                    </Link>
                                )} */}

                                <PrimaryButton
                                    // className="ms-4"
                                    disabled={form.processing}
                                >
                                    Create
                                </PrimaryButton>
                            </div>
                        </form>
                    </div>
                </div>
            </AdminLayout>
        </>
    );
};

export default RoleCreate;
