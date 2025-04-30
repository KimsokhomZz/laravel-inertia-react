import React from "react";
import { useForm, Head } from "@inertiajs/react";

const Edit = ({ post }) => {
    console.log(useForm());
    const { data, setData, put, processing, errors } = useForm({
        body: post.body,	
    });

    function submit(e) {
        e.preventDefault();
        put(`/posts/${post.id}`);
    }

    return (
        <>
            <Head>
                <title>Edit</title>
            </Head>
            <h1 className="title">Update your post</h1>
            <div className="w-1/2 mx-auto">
                <form onSubmit={submit}>
                    <textarea
                        rows="10"
                        value={data.body}
                        onChange={(e) => setData("body", e.target.value)}
                        style={{ outline: "none" }}
                        className={errors.body && "ring-red-500"}
                    ></textarea>

                    {errors.body && <p className="error">{errors.body}</p>}

                    <button className="primary-btn mt-4" disabled={processing}>
                        Update Post
                    </button>
                </form>
            </div>
        </>
    );
};

export default Edit;
