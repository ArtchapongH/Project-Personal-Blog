import { Link, useNavigate } from "react-router-dom";

import notebookLightIcon from "../icons/notebook_light.png";
import fileLightIcon from "../icons/File_light.png";
import userDuotoneIcon from "../icons/User_duotone.png";
import bellLightIcon from "../icons/Bell_light.png";
import refreshLightIcon from "../icons/Refresh_light.png";
import outLightIcon from "../icons/Out_light.png";
import signOutSquareLightIcon from "../icons/Sign_out_squre_light.png";
import editLightIcon from "../icons/Edit_light.png";
import trashLightIcon from "../icons/Trash_light.png";
import addRoundLightIcon from "../icons/Add_round_light.png";
import searchLightIcon from "../icons/Search_light.png";

function NotificationPage(){
    const navigate = useNavigate();
    return(
        <>

        <div className="bg-white">

        <div className="flex h-screen">

            {/* Sidebar */}
            <aside className="w-64 bg-[#FBFBFA] border-r border-[#e7e3dd] flex flex-col">
            
                    {/* Logo */}
                    <div className="px-8 py-10">
                        <h1 className="text-5xl font-semibold tracking-tight">
                            hh<span className="text-[#529AF6]">.</span>
                        </h1>
            
                        <p className="text-[#529AF6] text-lg mt-1">
                            Admin panel
                        </p>
                    </div>
            
                    {/* Navigation */}
                    <nav className="flex-1">
            
                        <button 
                            onClick={() => navigate("/admin/article/mgt")}
                            className="flex items-center gap-3 px-8 py-4 text-gray-500 hover:bg-gray-100 text-sm w-full text-left"
                        >
                            <img src={notebookLightIcon} alt="Article icon" className="w-4 h-4 object-contain" />
                            Article management
                        </button>
            
                        <button 
                            onClick={() => navigate("/admin/category/mgt")}
                            className="flex items-center gap-3 px-8 py-4 text-gray-500 hover:bg-gray-100 text-sm w-full text-left"
                        >
                            <img src={fileLightIcon} alt="Category icon" className="w-4 h-4 object-contain" />
                            Category management
                        </button>
            
                        <button 
                            onClick={() => navigate("/admin/profile")}
                            className="flex items-center gap-3 px-8 py-4 text-gray-500 hover:bg-gray-100 text-sm w-full text-left"
                        >
                            <img src={userDuotoneIcon} alt="Profile icon" className="w-4 h-4 object-contain" />
                            Profile
                        </button>
            
                        <button 
                            onClick={() => navigate("/admin/notification")}
                            className="flex items-center gap-3 px-8 py-4 bg-[#C5DDFC] text-gray-900 text-sm font-medium w-full text-left"
                        >
                            <img src={bellLightIcon} alt="Notification icon" className="w-4 h-4 object-contain" />
                            Notification
                        </button>
            
                        <button 
                            onClick={() => navigate("/admin/reset")}
                            className="flex items-center gap-3 px-8 py-4 text-gray-500 hover:bg-gray-100 text-sm w-full text-left"
                        >
                            <img src={refreshLightIcon} alt="Reset icon" className="w-4 h-4 object-contain" />
                            Reset password
                        </button>
            
                    </nav>
            
                    {/* Bottom */}
                    <div className="border-t">
            
                        <button 
                            onClick={() => navigate("/")}
                            className="flex items-center gap-3 px-8 py-4 text-sm text-gray-500 w-full text-left hover:bg-gray-100"
                        >
                            <img src={outLightIcon} alt="Out icon" className="w-4 h-4 object-contain" />
                            hh.website
                        </button>
            
                        <button 
                            onClick={() => navigate("/")}
                            className="flex items-center gap-3 px-8 py-4 text-sm text-gray-500 w-full text-left hover:bg-gray-100"
                        >
                            <img src={signOutSquareLightIcon} alt="SignOut icon" className="w-4 h-4 object-contain" />
                            Log out
                        </button>
            
                    </div>
            
                </aside>

            {/* Main */}
            <main className="flex-1 bg-white">

                {/* Header */}
                <header className="px-8 py-5 border-b border-gray-200">
                    <h2 className="text-2xl font-semibold text-gray-800">
                        Notification
                    </h2>
                </header>

                {/* Notifications */}
                <div className="px-8">

                    {/* Notification Item */}
                    <div className="flex justify-between items-start py-6 border-b border-gray-200">

                        <div className="flex gap-4">

                            <img
                                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&q=80"
                                className="w-10 h-10 rounded-full object-cover"
                                alt="Avatar"/>

                            <div>

                                <p className="text-sm text-gray-700 leading-relaxed">

                                    <span className="font-semibold">
                                        Jacob Lash
                                    </span>

                                    Commented on your article:
                                    <span className="text-gray-600">
                                        The Fascinating World of Cats: Why We Love Our Furry Friends
                                    </span>

                                </p>

                                <p className="text-sm text-gray-600 mt-1 italic">
                                    "I loved this article! It really explains why my cat is so independent yet loving. The purring section was super interesting."
                                </p>

                                <p className="text-xs text-[#8BBBF9] mt-2">
                                    4 hours ago
                                </p>

                            </div>

                        </div>

                        <button className="text-sm font-semibold text-gray-700 hover:text-black">
                            View
                        </button>

                    </div>

                    {/* Notification Item */}
                    <div className="flex justify-between items-start py-6 border-b border-gray-200">

                        <div className="flex gap-4">

                            <img
                                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&q=80"
                                className="w-10 h-10 rounded-full object-cover"
                                alt="Avatar"/>

                            <div>

                                <p className="text-sm text-gray-700">

                                    <span className="font-semibold">
                                        Jacob Lash
                                    </span>

                                    liked your article:
                                    <span className="text-gray-600">
                                        The Fascinating World of Cats: Why We Love Our Furry Friends
                                    </span>

                                </p>

                                <p className="text-xs text-[#8BBBF9] mt-2">
                                    4 hours ago
                                </p>

                            </div>

                        </div>

                        <button className="text-sm font-semibold text-gray-700 hover:text-black">
                            View
                        </button>

                    </div>

                </div>

            </main>

        </div>

        </div>
        </>
    )
};

export default NotificationPage;