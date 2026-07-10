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
import { X } from "lucide-react";

function ViewComments() {
    return (
        <div className="bg-white mt-8 mb-8">

            {/* Comments */}
            <div className="px-5 py-5">

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
                        <AlertDialog>
                            <AlertDialogTrigger asChild>
                                <button
                                    type="button"
                                    className="rounded-full bg-[#25211c] px-11 py-4 text-lg font-semibold text-white transition-colors hover:bg-gray-800 sm:bg-black sm:px-8 sm:py-2.5 sm:text-sm"
                                >
                                    Send
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
                    </div>
                </form>

                {/* Comment 1 */}
                <div className="mt-8 mb-8 flex gap-3">

                    <img
                        src="https://i.pravatar.cc/80?img=15"
                        className="w-10 h-10 rounded-full"
                    />

                    <div>

                        <div className="font-semibold text-sm">
                            Jacob Lash
                        </div>

                        <div className="text-xs text-gray-500">
                            September 2024 at 18:30
                        </div>

                        <p className="mt-2 text-sm text-gray-700 leading-6">
                            I loved this article! It really explains why my cat is
                            so independent yet loving. The purring section was super
                            interesting.
                        </p>

                    </div>

                </div>
                <hr></hr>

                {/* Comment 2 */}
                <div className="mt-6 flex gap-3">

                    <img
                        src="https://i.pravatar.cc/80?img=25"
                        className="w-10 h-10 rounded-full"
                    />

                    <div>

                        <div className="font-semibold text-sm">
                            Ahri
                        </div>

                        <div className="text-xs text-gray-500">
                            September 2024 at 18:30
                        </div>

                        <p className="mt-2 text-sm text-gray-700 leading-6">
                            Such a great read! I've always wondered why my cat
                            slow blinks at me—now I know it's her way of showing
                            trust!
                        </p>

                    </div>

                </div>

            </div>

        </div>
    )


};

export default ViewComments;