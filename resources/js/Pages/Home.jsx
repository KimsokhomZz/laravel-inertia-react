import Layout from "@/Layouts/Layout";
import { useState } from "react";
import { Link, usePage, Head } from "@inertiajs/react";

const Home = ({ posts }) => {
    // console.log(posts);
    console.log(usePage());
    const { flash } = usePage().props;
    const { component } = usePage();
    const [flashMsg, setFlashMsg] = useState(flash.message);

    setTimeout(() => {
        setFlashMsg(null);
    }, 2000);

    return (
        <>
            <Head>
                <title>{component}</title>
            </Head>
            <h1 className="title">Add Items</h1>
            {flashMsg && (
                <p className="text-error absolute top-24 right-6 text-sm shadow-lg rounded-2xl px-4 py-2">
                    {flashMsg}
                </p>
            )}

            {/* {flash.success && (
                <p className="bg-green-400 absolute top-24 right-6 text-sm shadow-lg rounded-2xl px-4 py-2">
                    {flash.success}
                </p>
            )} */}

            <div>
                {posts.data.map((post) => (
                    <div
                        className="flex items-center justify-between px-5 py-3 bg-gray-100 rounded my-3"
                        key={post.id}
                    >
                        <div className="w-[80%]">
                            <div className="text-sm text-slate-600 mb-1">
                                <span>Posted on: </span>
                                <span>
                                    {new Date(
                                        post.created_at
                                    ).toLocaleTimeString()}
                                </span>
                            </div>
                            <p className="text-gray-600 font-medium">
                                {post.body}
                            </p>
                        </div>
                        <Link
                            href={`/posts/${post.id}`}
                            className="text-link bg-blue-200 px-3 py-1 rounded"
                        >
                            View Details
                        </Link>
                    </div>
                ))}
            </div>

            {/* Pagination */}
            <div className="py-12 px-4">
                {posts.links.map((link) =>
                    link.url ? (
                        <Link
                            key={link.label}
                            href={link.url}
                            dangerouslySetInnerHTML={{ __html: link.label }}
                            className={`p-2 mx-1 ${
                                link.active
                                    ? "rounded bg-gray-200 text-blue-500 font-bold"
                                    : ""
                            }`}
                        />
                    ) : (
                        <span
                            key={link.label}
                            dangerouslySetInnerHTML={{ __html: link.label }}
                            className="text-gray-400 px-2"
                        ></span>
                    )
                )}
            </div>
        </>
    );
};

export default Home;

//? The same (props)
// const Home = (props) => {
//     return <h1>Hello {props.name}</h1>;
// }
