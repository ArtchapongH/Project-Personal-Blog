import { useEffect, useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import { blogPosts } from "../data/BlogPost";

function ViewContent() {
    const category = "Highlight";
    const { postId } = useParams();

    const [post, setPost] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        let isMounted = true;

        async function getPosts() {
            try {
                setIsLoading(true);
                setErrorMessage("");

                const response = await axios.get(
                    postId
                        ? `https://blog-post-project-api.vercel.app/posts/${postId}`
                        : "https://blog-post-project-api.vercel.app/posts",
                    postId
                        ? undefined
                        : {
                            params: {
                                category,
                                limit: 1,
                            },
                        },
                );

                const selectedPost =
                    response.data.post ??
                    response.data.posts?.[0] ??
                    response.data ??
                    blogPosts.find((item) => String(item.id) === String(postId)) ??
                    blogPosts[0];

                if (isMounted) {
                    setPost(selectedPost);
                }
            } catch {
                if (isMounted) {
                    setPost(blogPosts[0]);
                    setErrorMessage("Showing a saved post because the latest post could not be loaded.");
                }
            } finally {
                if (isMounted) {
                    setIsLoading(false);
                }
            }
        }

        getPosts();

        return () => {
            isMounted = false;
        };
    }, [category, postId]);

    const authorCard = (
        <aside className="rounded-2xl bg-white p-4 shadow-sm lg:sticky lg:top-8">
            <div className="mb-6 flex items-start gap-3">
                <img
                    src="https://i.pravatar.cc/80?img=12"
                    className="h-12 w-12 rounded-full object-cover"
                    alt="Thompson P."
                />

                <div>
                    <span className="text-xs text-gray-400">Author</span>

                    <h3 className="font-semibold text-gray-900">
                        Thompson P.
                    </h3>
                </div>
            </div>

            <hr />

            <p className="mt-4 text-sm leading-6 text-gray-600">
                I am a pet enthusiast and freelance writer who specializes
                in animal behavior and care. With a deep love for cats, I
                enjoy sharing insights on feline companionship and wellness.
            </p>

            <p className="mt-4 text-sm leading-6 text-gray-600">
                When I'm not writing, I spend time volunteering at my local
                animal shelter, helping cats find loving homes.
            </p>
        </aside>
    );

    return (
        <section className="bg-white shadow-xl">
            {!isLoading && post && (
                <div className="mx-auto max-w-7xl lg:px-10 lg:pt-8">
                    <img
                        src={post.image}
                        className="aspect-[16/9] w-full object-cover lg:rounded-xl"
                        alt={post.title}
                    />
                </div>
            )}

            <div className="mx-auto max-w-7xl px-5 py-5 lg:grid lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-16 lg:px-10 lg:py-12">
                {isLoading && (
                    <p className="text-sm text-gray-500 lg:col-span-2">Loading post...</p>
                )}

                {!isLoading && errorMessage && (
                    <p className="mb-4 text-sm text-gray-500 lg:col-span-2">{errorMessage}</p>
                )}

                {!isLoading && post && (
                    <>
                        <article>
                            <div className="flex items-center gap-3">
                                <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                                    {post.category}
                                </span>

                                <span className="text-xs text-gray-500">
                                    {post.date}
                                </span>
                            </div>

                            <div className="markdown">
                                <ReactMarkdown>{post.content}</ReactMarkdown>
                            </div>
                        </article>

                        <div className="mt-8 lg:mt-0">
                            {authorCard}
                        </div>
                    </>
                )}
            </div>
        </section>
    );
}

export default ViewContent;
