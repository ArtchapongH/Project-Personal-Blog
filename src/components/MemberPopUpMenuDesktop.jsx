import { useNavigate } from "react-router-dom";


import bellLightIcon from "../icons/Bell_light.png"
import userIcon from "../icons/User_duotone.png"
import resetIcon from "../icons/Refresh_light.png"
import signOutIcon from "../icons/Sign_out_squre_light.png"

function MemberPopUpMenuDesktop() {
    const navigate = useNavigate();
    
    return(
        <>
            {/* Card */}
            <div className="w-full bg-white rounded-2xl overflow-hidden border border-gray-200">

                {/* Menu */}
                <div className="pb-2 ">

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
                            // Add logout logic here
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
        
        </>
    )
};

export default MemberPopUpMenuDesktop;