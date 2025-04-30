import { useForm, Head, Link } from "@inertiajs/react";
import React from "react";

const Show = ({ post }) => {
    const { delete: destroy } = useForm();

    function submit(e) {
        e.preventDefault();
        destroy(`/posts/${post.id}`);
    }
    return (
        <>
            <Head>
                <title>Show</title>
            </Head>
            <h1 className="title">Show Post</h1>

            <div className="w-1/2 mx-auto p-6 bg-gray-200 rounded">
                <div className="text-sm text-slate-600 mb-1">
                    <span>Posted on: </span>
                    <span>
                        {new Date(post.created_at).toLocaleTimeString()}
                    </span>
                </div>
                <p className="text-gray-600 font-medium mb-8">{post.body}</p>

                <div className="flex justify-start items-center gap-2.5">
                    <form onSubmit={submit}>
                        <button className="bg-red-500 text-white text-sm rounded-lg px-4 py-1 cursor-pointer">
                            Delete
                        </button>
                    </form>
                    <Link
                        href={`/posts/${post.id}/edit`}
                        className="bg-amber-500 text-white text-sm rounded-lg px-4 py-1 cursor-pointer"
                    >
                        Update
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Show;
