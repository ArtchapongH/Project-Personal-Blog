function MemberPopUpNotification(){
    return(
        <>
        {/* Notification List */}
        <div className="max-h-96 overflow-y-auto">

            {/* Notification Item 1*/}
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
                        Published new article.
                    </p>

                    <p className="mt-1 text-xs text-orange-400">
                        2 hours ago
                    </p>

                </div>

            </button>

            {/* Notification Item 2*/}
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
                        Comment on the article you have commented on.
                    </p>

                    <p className="mt-1 text-xs text-orange-400">
                        12 September 2024 at 18:30
                    </p>

                </div>

            </button>

        </div>
        </>
    )
};

export default MemberPopUpNotification;