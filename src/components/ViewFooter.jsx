import { useEffect, useState } from "react";
import axios from "axios";
import { Copy, Smile } from "lucide-react";
import { useParams } from "react-router-dom";
import { toast } from "sonner";
import facebookBlackIcon from "../icons/Facebook_black.png";
import linkedInBlackIcon from "../icons/LinkedIN_black.png";
import twitterBlackIcon from "../icons/Twitter_black.png";


function ViewFooter() {
    const { postId } = useParams();
    const [likesCount, setLikesCount] = useState(0);
    const [loadedPostId, setLoadedPostId] = useState(null);
    const [isLiking, setIsLiking] = useState(false);
    const API_BASE_URL = import.meta.env.DEV
        ? "/api"
        : import.meta.env.VITE_API_BASE_URL || "";

    useEffect(() => {
        if (!postId) return undefined;

        let isMounted = true;
        axios.get(`${API_BASE_URL}/posts/${postId}/likes`)
            .then((response) => {
                if (isMounted) {
                    setLikesCount(Number(response.data.likes_count) || 0);
                }
            })
            .catch(() => {
                if (isMounted) {
                    toast.error("Could not load likes for this post.");
                }
            })
            .finally(() => {
                if (isMounted) {
                    setLoadedPostId(postId);
                }
            });

        return () => {
            isMounted = false;
        };
    }, [API_BASE_URL, postId]);

    const handleLike = async () => {
        if (!postId || isLiking) return;

        setIsLiking(true);
        try {
            const response = await axios.post(`${API_BASE_URL}/posts/${postId}/likes`);
            setLikesCount(Number(response.data.likes_count) || 0);
        } catch (error) {
            toast.error(error.response?.data?.message || "Could not like this post.");
        } finally {
            setIsLiking(false);
        }
    };

    const handleCopyLink = async () => {
        try {
            // Get the current page URL
            const currentUrl = window.location.href;
            
            // Copy to clipboard
            await navigator.clipboard.writeText(currentUrl);
            
            // Show success toast
            toast.success("Copied!", {
                description: "This article has been copied to your clipboard.",
                style: {
                    background: "#1878F3",
                    borderColor: "#1878F3",
                    color: "#FFFFFF",
                },
            });
        } catch {
            // Show error toast if copy fails
            toast.error("Failed to copy", {
                description: "Could not copy the link. Please try again.",
            });
        }
    };

    // Get the current page URL and article title for sharing
    const currentUrl = window.location.href;
    const articleTitle = document.title || "Check out this article";

    // Generate share URLs
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
    
    const linkedinShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`;
    
    const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(articleTitle)}`;

    return (
        <section className="bg-white px-3 py-0 sm:px-6 sm:py-8">
            <div className="bg-[#C5DDFC] px-3 py-4 sm:rounded-xl sm:px-4 sm:py-3">
                <div className="flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                    <button
                        type="button"
                        onClick={handleLike}
                        disabled={!postId || loadedPostId !== postId || isLiking}
                        className="relative flex h-14 w-full items-center justify-center gap-3 rounded-full border border-gray-700 bg-white px-6 text-lg font-semibold text-gray-900 disabled:cursor-not-allowed disabled:opacity-60 sm:h-10 sm:w-auto sm:min-w-28 sm:gap-2 sm:text-sm"
                    >
                        <Smile className="h-6 w-6 sm:h-4 sm:w-4" strokeWidth={2.2} />
                        {likesCount}
                    </button>

                    <div className="flex items-center gap-2 sm:gap-2">
                        <button
                            type="button"
                            onClick={handleCopyLink}
                            className="flex h-14 min-w-0 items-center justify-center gap-2 rounded-full border border-gray-700 bg-white px-9 text-xl font-semibold text-gray-900 sm:h-10 sm:min-w-28 sm:px-6 sm:text-sm"
                        >
                            <Copy className="h-5 w-5 sm:h-4 sm:w-4" strokeWidth={2.2} />
                            <span className="sm:hidden">Copy link</span>
                            <span className="hidden sm:inline">Copy</span>
                        </button>

                        {/* รูปเอามาจากไหน?? */}
                        {/* Facebook_black.png */}
                        {/* ใน a tag ข้างใน class อาจจะลบออกได้ */}
                        <a
                            href={facebookShareUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Share on Facebook"
                            className="flex h-14 w-14 items-center justify-center rounded-full border-0 bg-[#1877f2] text-4xl font-bold leading-none text-white sm:h-10 sm:w-10 sm:border sm:border-gray-900 sm:bg-white sm:text-lg sm:text-gray-900"
                        >
                            <img src={facebookBlackIcon} alt="Facebook icon" className="h-full w-full object-contain" />
                        </a>

                        <a
                            href={linkedinShareUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Share on LinkedIn"
                            className="flex h-14 w-14 items-center justify-center rounded-full border-0 bg-[#0077b5] text-3xl font-bold leading-none text-white sm:h-10 sm:w-10 sm:border sm:border-gray-900 sm:bg-white sm:text-sm sm:text-gray-900"
                        >
                            <img src={linkedInBlackIcon} alt="LinkedIN icon" className="h-full w-full object-contain" />
                        </a>

                        <a
                            href={twitterShareUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Share on Twitter"
                            className="flex h-14 w-14 items-center justify-center rounded-full border-0 bg-[#55acee] text-3xl font-bold leading-none text-white sm:h-10 sm:w-10 sm:border sm:border-gray-900 sm:bg-white sm:text-lg sm:text-gray-900"
                        >
                            <img src={twitterBlackIcon} alt="Twitter icon" className="h-full w-full object-contain" />
                        </a>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default ViewFooter;
