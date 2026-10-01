import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { toast } from "sonner";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { X } from "lucide-react";
import { useAuth } from "@/contexts/authenticaition.jsx";

const API_BASE_URL = import.meta.env.DEV
    ? "/api"
    : import.meta.env.VITE_API_BASE_URL || "";

function formatCommentDate(value) {
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return "";

    return date.toLocaleString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    });
}

function ViewComments() {
    const { postId } = useParams();
    const { isAuthenticated } = useAuth();
    const [commentText, setCommentText] = useState("");
    const [commentsState, setCommentsState] = useState({ postId: null, comments: [] });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isLoginDialogOpen, setIsLoginDialogOpen] = useState(false);
    const comments = commentsState.postId === postId ? commentsState.comments : [];
    const isLoading = Boolean(postId && commentsState.postId !== postId);

    useEffect(() => {
        if (!postId) return undefined;

        let isMounted = true;
        axios.get(`${API_BASE_URL}/posts/${postId}/comments`)
            .then((response) => {
                if (isMounted) {
                    setCommentsState({
                        postId,
                        comments: response.data.comments ?? [],
                    });
                }
            })
            .catch(() => {
                if (isMounted) {
                    setCommentsState({ postId, comments: [] });
                    toast.error("Could not load comments for this post.");
                }
            });

        return () => {
            isMounted = false;
        };
    }, [postId]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const text = commentText.trim();
        if (!text || !postId || isSubmitting) return;

        if (!isAuthenticated) {
            setIsLoginDialogOpen(true);
            return;
        }

        setIsSubmitting(true);
        try {
            await axios.post(`${API_BASE_URL}/posts/${postId}/comments`, {
                comment_text: text,
            });
            const response = await axios.get(`${API_BASE_URL}/posts/${postId}/comments`);
            setCommentsState({ postId, comments: response.data.comments ?? [] });
            setCommentText("");
            toast.success("Comment posted.");
        } catch (error) {
            toast.error(error.response?.data?.message || "Could not post your comment.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="mt-8 mb-8 bg-white">
            <div className="px-5 py-5">
                <form className="mt-8 sm:mt-9" onSubmit={handleSubmit}>
                    <label htmlFor="comment" className="text-xl font-semibold text-[#6f6962] sm:text-lg sm:font-bold sm:text-gray-950">
                        Comment
                    </label>
                    <textarea
                        id="comment"
                        value={commentText}
                        onChange={(event) => setCommentText(event.target.value)}
                        placeholder="What are your thoughts?"
                        maxLength={5000}
                        className="mt-2 h-29 w-full resize-none rounded-lg border border-gray-300 px-4 py-4 text-xl font-semibold text-gray-900 placeholder:text-[#6f6962] focus:border-gray-900 focus:outline-none sm:mt-4 sm:h-20 sm:rounded-xl sm:border-gray-500 sm:py-3 sm:text-sm sm:font-normal sm:placeholder:text-gray-500"
                    />
                    <div className="mt-4 flex justify-start sm:mt-2 sm:justify-end">
                        <button
                            type="submit"
                            disabled={!commentText.trim() || !postId || isSubmitting}
                            className="rounded-full bg-[#25211c] px-11 py-4 text-lg font-semibold text-white transition-colors hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50 sm:bg-black sm:px-8 sm:py-2.5 sm:text-sm"
                        >
                            {isSubmitting ? "Sending..." : "Send"}
                        </button>
                    </div>
                </form>

                <AlertDialog open={isLoginDialogOpen} onOpenChange={setIsLoginDialogOpen}>
                    <AlertDialogContent className="max-w-md">
                        <AlertDialogCancel className="absolute right-4 top-4 h-8 w-8 rounded-sm border-0 bg-transparent p-0 opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-0 disabled:pointer-events-none">
                            <X className="h-4 w-4" />
                            <span className="sr-only">Close</span>
                        </AlertDialogCancel>
                        <AlertDialogHeader>
                            <AlertDialogTitle className="text-center text-2xl font-bold">
                                Create an account to continue
                            </AlertDialogTitle>
                        </AlertDialogHeader>
                        <AlertDialogFooter className="flex-col gap-3 sm:flex-col">
                            <AlertDialogAction asChild className="w-full rounded-full bg-black py-6 text-base font-semibold hover:bg-gray-800">
                                <Link to="/signup">Create account</Link>
                            </AlertDialogAction>
                            <div className="text-center text-sm text-gray-600">
                                Already have an account?{" "}
                                <Link to="/login" className="font-semibold text-black underline hover:text-gray-700">
                                    Log in
                                </Link>
                            </div>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>

                <div className="mt-8">
                    {isLoading ? (
                        <p className="text-sm text-gray-500">Loading comments...</p>
                    ) : comments.length === 0 ? (
                        <p className="text-sm text-gray-500">No comments yet.</p>
                    ) : (
                        comments.map((comment) => {
                            const author = comment.name || comment.username || "User";
                            const initials = author.slice(0, 1).toUpperCase();

                            return (
                                <article key={comment.id} className="flex gap-3 border-b border-gray-200 py-5 last:border-b-0">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-100 text-sm font-semibold text-gray-700" aria-hidden="true">
                                        {initials}
                                    </div>
                                    <div className="min-w-0">
                                        <div className="text-sm font-semibold">{author}</div>
                                        <time className="text-xs text-gray-500" dateTime={comment.created_at}>
                                            {formatCommentDate(comment.created_at)}
                                        </time>
                                        <p className="mt-2 whitespace-pre-wrap wrap-break-word text-sm leading-6 text-gray-700">
                                            {comment.comment_text}
                                        </p>
                                    </div>
                                </article>
                            );
                        })
                    )}
                </div>
            </div>
        </div>
    );
}

export default ViewComments;