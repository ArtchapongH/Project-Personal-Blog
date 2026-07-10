import { useNavigate } from "react-router-dom";

function MemberPopUpMenu() {
    const navigate = useNavigate();
    
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

                {/* Menu */}
                <div className="pb-2">

                    {/* Profile */}
                    <button 
                        onClick={() => navigate("/membership")}
                        className="flex items-center gap-4 px-6 py-3 hover:bg-gray-100 transition w-full text-left"
                    >

                        {/* User Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 text-gray-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.8"
                                d="M16 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2m10-10a4 4 0 11-8 0 4 4 0 018 0z"/>
                        </svg>

                        <span className="text-gray-700 text-[15px]">
                            Profile
                        </span>
                    </button>

                    {/* Reset Password */}
                    <button 
                        onClick={() => navigate("/reset")}
                        className="flex items-center gap-4 px-6 py-3 hover:bg-gray-100 transition w-full text-left"
                    >

                        {/* Key Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 text-gray-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.8"
                                d="M15 7a4 4 0 10-7.9 1H3v3h2v2h2v2h3l2.2-2.2A4 4 0 0015 7z"/>
                        </svg>

                        <span className="text-gray-700 text-[15px]">
                            Reset password
                        </span>
                    </button>

                    {/* Divider */}
                    <div className="mx-5 border-t border-gray-200 my-2"></div>

                    {/* Logout */}
                    <button 
                        onClick={() => {
                            // Add logout logic here
                        }}
                        className="flex items-center gap-4 px-6 py-3 hover:bg-red-50 transition w-full text-left"
                    >

                        {/* Logout Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 text-gray-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.8"
                                d="M17 16l4-4m0 0l-4-4m4 4H9m4 8H5a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2"/>
                        </svg>

                        <span className="text-gray-700 text-[15px]">
                            Log out
                        </span>
                    </button>

                </div>

            </div>
        
        </>
    )
};

export default MemberPopUpMenu;