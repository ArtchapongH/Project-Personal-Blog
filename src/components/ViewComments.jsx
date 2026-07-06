function ViewComments() {
    return (
        <>

            {/* Comments */}
            <div className="bg-[#f6f3ee] px-5 py-5">

                <h4 className="font-semibold text-gray-700">
                    Comment
                </h4>

                <textarea
                    className="mt-3 w-full rounded-xl border border-gray-300 p-3 text-sm resize-none bg-white"
                    rows="3"
                    placeholder="What are your thoughts?"></textarea>

                <button
                    className="mt-3 bg-black text-white px-6 py-2 rounded-full text-sm">
                    Send
                </button>

                {/* Comment 1 */}
                <div className="mt-8 flex gap-3">

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

        </>
    )


};

export default ViewComments;