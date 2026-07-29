import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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


function CategoryManagementPage(){
    const navigate = useNavigate();
    const location = useLocation();
    const categoryNames = ["Cat", "General", "Inspiration"];

    useEffect(() => {
        if (location.state?.showCreateCategoryToast) {
            toast.success("Create category", {
                description: "Category has been successfully created.",
                style: {
                    background: "#1878F3",
                    color: "#FFFFFF",
                    border: "none",
                },
            });

            navigate(location.pathname, { replace: true, state: {} });
        }
    }, [location.pathname, location.state, navigate]);
    
    function toggleSidebar(){

        const sidebar=document.getElementById("sidebar");
        const overlay=document.getElementById("overlay");

        sidebar.classNameList.toggle("-translate-x-full");
        overlay.classNameList.toggle("hidden");

    }


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
                            className="flex items-center gap-3 px-8 py-4 bg-[#C5DDFC] text-gray-900 text-sm font-medium w-full text-left"
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

            {/* Main */}
            <main className="flex-1 overflow-auto bg-white">

                {/* Header */}
                <header
                    className="flex justify-between items-center px-6 md:px-10 py-6 border-b bg-white">

                    <div className="flex items-center gap-4">

                        {/* Mobile Button */}
                        <button
                            className="md:hidden"
                            onclick="toggleSidebar()">

                            <svg className="w-7 h-7"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24">

                                <path stroke-width="2"
                                    stroke-linecap="round"
                                    d="M4 6h16M4 12h16M4 18h16"/>
                            </svg>

                        </button>

                        <h2 className="text-2xl font-semibold text-gray-800">
                            Category management
                        </h2>

                    </div>

                    <button
                        onClick={() => navigate("/admin/category/create")}
                        className="bg-[#2B241D] text-white rounded-full px-7 py-3 flex items-center gap-2 hover:bg-black transition">

                        <span className="text-lg">+</span>

                        Create category

                    </button>

                </header>

                {/* Content */}
                <section className="p-6 md:p-10">

                    {/* Search */}
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full md:w-72 border rounded-md px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-gray-300"/>

                    {/* Table */}
                    <div className="mt-6 bg-white border rounded-lg overflow-hidden">

                        {/* Heading */}
                        <div className="grid grid-cols-[1fr_90px] px-5 py-3 border-b bg-[#FCFBFA] text-gray-500 text-sm">
                            <div>Category</div>
                            <div></div>
                        </div>

                        {categoryNames.map((categoryName, index) => (
                            <div
                                key={categoryName}
                                className={`grid grid-cols-[1fr_90px] items-center px-5 py-4 ${
                                    index < categoryNames.length - 1 ? "border-b" : ""
                                } hover:bg-gray-50`}
                            >
                                <div>{categoryName}</div>

                                <div className="flex justify-end gap-4">

                                    <button onClick={() => navigate("/admin/category/create")}>
                                         <img src={editLightIcon} alt="Category icon" className="w-4 h-4 object-contain" />
                                    </button>

                                    <button>
                                         <img src={trashLightIcon} alt="Category icon" className="w-4 h-4 object-contain" />
                                    </button>

                                </div>
                            </div>
                        ))}

                    </div>

                </section>

            </main>

        </div>

        {/* Overlay */}
        <div
            id="overlay"
            className="hidden fixed inset-0 bg-black/40 md:hidden"
            onclick="toggleSidebar()">

        </div>


        </div>
        </>
    )
};

export default CategoryManagementPage;