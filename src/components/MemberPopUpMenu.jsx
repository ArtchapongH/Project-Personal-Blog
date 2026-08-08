import { useNavigate } from "react-router-dom";
import { useState } from "react";

import bellLightIcon from "../icons/Bell_light.png"
import userIcon from "../icons/User_duotone.png"
import resetIcon from "../icons/Refresh_light.png"
import signOutIcon from "../icons/Sign_out_squre_light.png"
import MemberPopUpNotification from "./MemberPopUpNotification";

import {useAuth} from "../contexts/authenticaition.jsx";

function MemberPopUpMenu() {
    const navigate = useNavigate();
    const [showNotification, setShowNotification] = useState(false);
    const {logout} = useAuth();

    return(
        <>
            {/* Card Container */}
            <div className="w-full relative">

                {/* Notification Popup Overlay */}
                {showNotification && (
                    <div className="absolute top-20 right-0 w-full bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 z-50">
                        <MemberPopUpNotification />
                    </div>
                )}

                {/* Card */}
                <div className="w-full bg-white rounded-2xl overflow-hidden">

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
                        onClick={() => setShowNotification(!showNotification)}
                        className="w-11 h-11 rounded-full border border-gray-200 bg-white flex items-center justify-center hover:bg-gray-50 transition"
                    >
                        {/* Bell */}
                        <img
                            src={bellLightIcon}
                            alt="notification"
                            className="w-5 h-5"
                        />
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
                        <img
                            src={userIcon}
                            alt="userProfile"
                            className="w-5 h-5"
                        />

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
                        <img
                            src={resetIcon}
                            alt="resetPassword"
                            className="w-5 h-5"
                        />


                        <span className="text-gray-700 text-[15px]">
                            Reset password
                        </span>
                    </button>

                    {/* Divider */}
                    <div className="mx-5 border-t border-gray-200 my-2"></div>

                    {/* Logout */}
                    <button 
                        onClick={() => {
                            logout();
                        }}
                        className="flex items-center gap-4 px-6 py-3 hover:bg-red-50 transition w-full text-left"
                    >

                        {/* Logout Icon */}
                        <img
                            src={signOutIcon}
                            alt="logout"
                            className="w-5 h-5"
                        />

                        <span className="text-gray-700 text-[15px]">
                            Log out
                        </span>
                    </button>

                </div>
                </div>

            </div>
        </>
    )
};

export default MemberPopUpMenu;