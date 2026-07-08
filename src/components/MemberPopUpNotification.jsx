function MemberPopUpNotification(){
    return(
        <>

        <div class="min-h-screen bg-gray-100 flex items-center justify-center">

            {/* Notification Popup */}
            <div class="w-[92vw] max-w-[320px] md:max-w-[380px] bg-[#FCFBF8] rounded-2xl shadow-xl overflow-hidden">

                {/* Notification List */}
                <div class="max-h-96 overflow-y-auto">

                    {/* Notification Item 1*/}
                    <button
                        class="w-full flex items-start gap-3 px-4 py-4 hover:bg-gray-50 transition duration-200 text-left">

                        <img
                            src="https://i.pravatar.cc/80?img=12"
                            alt="avatar"
                            class="w-11 h-11 rounded-full object-cover flex-shrink-0"
                        />

                        <div class="flex-1 min-w-0">

                            <p class="text-[15px] leading-5 text-gray-600">
                                <span class="font-bold text-gray-800">
                                    Thompson P.
                                </span>
                                Published new article.
                            </p>

                            <p class="mt-1 text-xs text-orange-400">
                                2 hours ago
                            </p>

                        </div>

                    </button>

                    {/* Notification Item 2*/}
                    <button
                        class="w-full flex items-start gap-3 px-4 py-4 hover:bg-gray-50 transition duration-200 text-left">

                        <img
                            src="https://i.pravatar.cc/80?img=32"
                            alt="avatar"
                            class="w-11 h-11 rounded-full object-cover flex-shrink-0"
                        />

                        <div class="flex-1 min-w-0">

                            <p class="text-[15px] leading-5 text-gray-600">
                                <span class="font-bold text-gray-800">
                                    Jacob Lash
                                </span>
                                Comment on the article you have commented on.
                            </p>

                            <p class="mt-1 text-xs text-orange-400">
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

export default MemberPopUpNotification;