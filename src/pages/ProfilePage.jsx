import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

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

function ProfilePage(){
    const navigate = useNavigate();

    const handleSave = () => {
        toast.success("Saved profile", {
            description: "Your profile has been successfully updated",
            style: {
                    background: "#1878F3",
                    borderColor: "#1878F3",
                    color: "#FFFFFF",
                },
        });
    };

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
                            className="flex items-center gap-3 px-8 py-4 bg-[#C5DDFC] text-gray-900 text-sm font-medium w-full text-left"
                        >
                            <img src={userDuotoneIcon} alt="Profile icon" className="w-4 h-4 object-contain" />
                            Profile
                        </button>
            
                        <button 
                            onClick={() => navigate("/admin/notification")}
                            className="flex items-center gap-3 px-8 py-4 text-gray-500 hover:bg-gray-100 text-sm w-full text-left"
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

            {/* Main Content */}
            <main className="flex-1 bg-white flex flex-col overflow-hidden">

                {/* Header */}
                <header className="flex items-center justify-between px-8 py-4 border-b border-gray-200 flex-shrink-0">

                    <h2 className="text-2xl font-semibold text-gray-800">
                        Profile
                    </h2>

                    <button
                        type="button"
                        onClick={handleSave}
                        className="bg-[#2B2622] text-white px-8 py-2 rounded-full text-sm hover:bg-black transition">
                        Save
                    </button>

                </header>

                {/* Content - Scrollable if needed */}
                <div className="flex-1 overflow-y-auto px-8 py-6">

                    {/* Avatar */}
                    <div className="flex items-center gap-6 mb-6">

                        <img
                            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80"
                            alt="Profile"
                            className="w-20 h-20 rounded-full object-cover"/>

                        <button
                            className="border border-gray-400 rounded-full px-6 py-2 text-sm hover:bg-gray-100 transition">

                            Upload profile picture

                        </button>

                    </div>

                    <div className="border-t border-gray-200 w-[500px] mb-6"></div>

                    {/* Form */}
                    <div className="space-y-4 max-w-xl">

                        {/* Name */}
                        <div>

                            <label className="block text-sm text-gray-600 mb-1.5">
                                Name
                            </label>

                            <input
                                type="text"
                                defaultValue="Thompson P."
                                className="w-full h-11 px-4 rounded-md border border-gray-300 focus:ring-2 focus:ring-gray-400 focus:outline-none"/>

                        </div>

                        {/* Username */}
                        <div>

                            <label className="block text-sm text-gray-600 mb-1.5">
                                Username
                            </label>

                            <input
                                type="text"
                                defaultValue="thompson"
                                className="w-full h-11 px-4 rounded-md border border-gray-300 focus:ring-2 focus:ring-gray-400 focus:outline-none"/>

                        </div>

                        {/* Email */}
                        <div>

                            <label className="block text-sm text-gray-600 mb-1.5">
                                Email
                            </label>

                            <input
                                type="email"
                                defaultValue="thompson.p@gmail.com"
                                className="w-full h-11 px-4 rounded-md border border-gray-300 focus:ring-2 focus:ring-gray-400 focus:outline-none"/>

                        </div>

                        {/* Bio */}
                        <div>

                            <label className="block text-sm text-gray-600 mb-1.5">
                                Bio (max 120 letters)
                            </label>

                            <textarea
                                rows="4"
                                defaultValue="I am a pet enthusiast and freelance writer who specializes in animal behavior and care. With a deep love for cats, I enjoy sharing insights on feline companionship and wellness.&#10;&#10;When I'm not writing, I spends time volunteering at my local animal shelter, helping cats find loving homes."
                                className="w-full px-4 py-3 rounded-md border border-gray-300 resize-none focus:ring-2 focus:ring-gray-400 focus:outline-none">
                            </textarea>

                        </div>

                    </div>

                </div>

            </main>

        </div>

        </div>
        </>
    )
};

export default ProfilePage;