function MemberPopUpMenuNoti() {
    return(
        <>
            {/* Card */}
            <div className="w-full bg-[#FCFBF8] rounded-2xl overflow-hidden">

                {/* Header */}
                <div className="flex items-center justify-between px-5 py-5">

                    {/* User */}
                    <div className="flex items-center gap-3">
                        <img
                            src="https://i.pravatar.cc/100"
                            alt="avatar"
                            className="w-12 h-12 rounded-full object-cover"
                        />

                        <div>
                            <p className="text-gray-800 font-medium text-base">
                                Moodeng ja
                            </p>
                        </div>
                    </div>

                    {/* Notification */}
                    <button
                        className="w-11 h-11 rounded-full border border-gray-200 bg-white flex items-center justify-center hover:bg-gray-50 transition"
                    >
                        {/* Bell */}
                        <svg xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 text-gray-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.8"
                                d="M15 17h5l-1.4-1.4A2 2 0 0118 14.2V11a6 6 0 10-12 0v3.2a2 2 0 01-.6 1.4L4 17h5m6 0a3 3 0 11-6 0m6 0H9"/>
                        </svg>
                    </button>

                </div>

                {/* Notification List Container */}
                <div className="px-4 pb-4">
                    <div className="border border-gray-200 rounded-lg shadow-sm bg-white overflow-hidden">

                        {/* Notification Item 1 */}
                        <button
                            className="w-full flex items-start gap-3 px-4 py-4 hover:bg-gray-50 transition duration-200 text-left">

                            <img
                                src="https://i.pravatar.cc/80?img=12"
                                alt="avatar"
                                className="w-11 h-11 rounded-full object-cover flex-shrink-0"
                            />

                            <div className="flex-1 min-w-0">

                                <p className="text-[15px] leading-5 text-gray-600">
                                    <span className="font-bold text-gray-800">
                                        Thompson P.
                                    </span>
                                    {" "}Published new article.
                                </p>

                                <p className="mt-1 text-xs text-orange-400">
                                    2 hours ago
                                </p>

                            </div>

                        </button>

                        {/* Notification Item 2 */}
                        <button
                            className="w-full flex items-start gap-3 px-4 py-4 hover:bg-gray-50 transition duration-200 text-left">

                            <img
                                src="https://i.pravatar.cc/80?img=32"
                                alt="avatar"
                                className="w-11 h-11 rounded-full object-cover flex-shrink-0"
                            />

                            <div className="flex-1 min-w-0">

                                <p className="text-[15px] leading-5 text-gray-600">
                                    <span className="font-bold text-gray-800">
                                        Jacob Lash
                                    </span>
                                    {" "}Comment on the article you have commented on.
                                </p>

                                <p className="mt-1 text-xs text-orange-400">
                                    12 September 2024 at 18:30
                                </p>

                            </div>

                        </button>

                    </div>
                </div>

            </div>
        
        </>
    )
};

export default MemberPopUpMenuNoti;