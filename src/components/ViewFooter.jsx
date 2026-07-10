import { Copy, Smile, X } from "lucide-react";
import { toast } from "sonner";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";


function ViewFooter() {
    const handleCopyLink = async () => {
        try {
            // Get the current page URL
            const currentUrl = window.location.href;
            
            // Copy to clipboard
            await navigator.clipboard.writeText(currentUrl);
            
            // Show success toast
            toast.success("Copied!", {
                description: "This article has been copied to your clipboard.",
            });
        } catch (err) {
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
            <div className="bg-[#eeece9] px-3 py-4 sm:rounded-xl sm:px-4 sm:py-3">
                <div className="flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                    <AlertDialog>
                        <AlertDialogTrigger asChild>
                            <button
                                type="button"
                                className="relative flex h-14 w-full items-center justify-center gap-3 rounded-full border border-gray-700 bg-white px-6 text-lg font-semibold text-gray-900 sm:h-10 sm:w-auto sm:min-w-28 sm:gap-2 sm:text-sm"
                            >
                                <Smile className="h-6 w-6 sm:h-4 sm:w-4" strokeWidth={2.2} />
                                321
                            </button>
                        </AlertDialogTrigger>
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
                                <AlertDialogAction className="w-full rounded-full bg-black py-6 text-base font-semibold hover:bg-gray-800">
                                    Create account
                                </AlertDialogAction>
                                <div className="text-center text-sm text-gray-600">
                                    Already have an account?{' '}
                                    <a href="#" className="font-semibold text-black underline hover:text-gray-700">
                                        Log in
                                    </a>
                                </div>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>

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

                        <a
                            href={facebookShareUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Share on Facebook"
                            className="flex h-14 w-14 items-center justify-center rounded-full border-0 bg-[#1877f2] text-4xl font-bold leading-none text-white sm:h-10 sm:w-10 sm:border sm:border-gray-900 sm:bg-white sm:text-lg sm:text-gray-900"
                        >
                            f
                        </a>

                        <a
                            href={linkedinShareUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Share on LinkedIn"
                            className="flex h-14 w-14 items-center justify-center rounded-full border-0 bg-[#0077b5] text-3xl font-bold leading-none text-white sm:h-10 sm:w-10 sm:border sm:border-gray-900 sm:bg-white sm:text-sm sm:text-gray-900"
                        >
                            in
                        </a>

                        <a
                            href={twitterShareUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Share on Twitter"
                            className="flex h-14 w-14 items-center justify-center rounded-full border-0 bg-[#55acee] text-3xl font-bold leading-none text-white sm:h-10 sm:w-10 sm:border sm:border-gray-900 sm:bg-white sm:text-lg sm:text-gray-900"
                        >
                            t
                        </a>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default ViewFooter;
