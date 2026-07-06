import { Copy, Smile } from "lucide-react";

function ViewFooter() {
    return (
        <section className="bg-white px-3 py-0 sm:px-6 sm:py-8">
            <div className="bg-[#eeece9] px-3 py-4 sm:rounded-xl sm:px-4 sm:py-3">
                <div className="flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                    <button
                        type="button"
                        className="relative flex h-14 w-full items-center justify-center gap-3 rounded-full border border-gray-700 bg-white px-6 text-lg font-semibold text-gray-900 sm:h-10 sm:w-auto sm:min-w-28 sm:gap-2 sm:text-sm"
                    >
                        <Smile className="h-6 w-6 sm:h-4 sm:w-4" strokeWidth={2.2} />
                        321
                    
                    </button>

                    <div className="flex items-center gap-2 sm:gap-2">
                        <button
                            type="button"
                            className="flex h-14 min-w-0 items-center justify-center gap-2 rounded-full border border-gray-700 bg-white px-9 text-xl font-semibold text-gray-900 sm:h-10 sm:min-w-28 sm:px-6 sm:text-sm"
                        >
                            <Copy className="h-5 w-5 sm:h-4 sm:w-4" strokeWidth={2.2} />
                            <span className="sm:hidden">Copy link</span>
                            <span className="hidden sm:inline">Copy</span>
                        </button>

                        <a
                            href="#"
                            aria-label="Share on Facebook"
                            className="flex h-14 w-14 items-center justify-center rounded-full border-0 bg-[#1877f2] text-4xl font-bold leading-none text-white sm:h-10 sm:w-10 sm:border sm:border-gray-900 sm:bg-white sm:text-lg sm:text-gray-900"
                        >
                            f
                        </a>

                        <a
                            href="#"
                            aria-label="Share on LinkedIn"
                            className="flex h-14 w-14 items-center justify-center rounded-full border-0 bg-[#0077b5] text-3xl font-bold leading-none text-white sm:h-10 sm:w-10 sm:border sm:border-gray-900 sm:bg-white sm:text-sm sm:text-gray-900"
                        >
                            in
                        </a>

                        <a
                            href="#"
                            aria-label="Share on Twitter"
                            className="flex h-14 w-14 items-center justify-center rounded-full border-0 bg-[#55acee] text-3xl font-bold leading-none text-white sm:h-10 sm:w-10 sm:border sm:border-gray-900 sm:bg-white sm:text-lg sm:text-gray-900"
                        >
                            t
                        </a>
                    </div>
                </div>
            </div>

            <form className="mt-8 sm:mt-9">
                <label htmlFor="comment" className="text-xl font-semibold text-[#6f6962] sm:text-lg sm:font-bold sm:text-gray-950">
                    Comment
                </label>

                <textarea
                    id="comment"
                    placeholder="What are your thoughts?"
                    className="mt-2 h-29 w-full resize-none rounded-lg border border-gray-300 px-4 py-4 text-xl font-semibold text-gray-900 placeholder:text-[#6f6962] focus:border-gray-900 focus:outline-none sm:mt-4 sm:h-20 sm:rounded-xl sm:border-gray-500 sm:py-3 sm:text-sm sm:font-normal sm:placeholder:text-gray-500"
                />

                <div className="mt-4 flex justify-start sm:mt-2 sm:justify-end">
                    <button
                        type="submit"
                        className="rounded-full bg-[#25211c] px-11 py-4 text-lg font-semibold text-white transition-colors hover:bg-gray-800 sm:bg-black sm:px-8 sm:py-2.5 sm:text-sm"
                    >
                        Send
                    </button>
                </div>
            </form>
        </section>
    );
}

export default ViewFooter;
