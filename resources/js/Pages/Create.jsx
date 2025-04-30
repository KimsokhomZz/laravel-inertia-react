import React, { use } from "react";
import { useForm, Head} from "@inertiajs/react";

const Create = () => {
    console.log(useForm());
    const { data, setData, post, processing, errors } = useForm({
        body: "",
    });

    function submit(e) {
        e.preventDefault();
        post("/posts");
    }

    return (
        <>
            <Head>
                <title>Create</title>
            </Head>
            <h1 className="title">Create Page</h1>
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
                        Create Post
                    </button>
                </form>
            </div>
        </>
    );
};

export default Create;
