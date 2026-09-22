import axios from "axios";
import { useState } from "react";
import notebookLightIcon from "../icons/notebook_light.png";
import fileLightIcon from "../icons/File_light.png";
import userDuotoneIcon from "../icons/User_duotone.png";
import bellLightIcon from "../icons/Bell_light.png";
import refreshLightIcon from "../icons/Refresh_light.png";
import outLightIcon from "../icons/Out_light.png";
import signOutSquareLightIcon from "../icons/Sign_out_squre_light.png";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "sonner";

import { useAuth } from "../contexts/authenticaition.jsx";


function CategoryCreatePage(){
    const navigate = useNavigate();
    const location = useLocation();
    const categoryToEdit = location.state?.category;
    const [categoryName, setCategoryName] = useState(categoryToEdit?.name ?? "");
    const [isSaving, setIsSaving] = useState(false);
    
    const {logout} = useAuth();

    async function handleSave() {
        const name = categoryName.trim();

        if (!name) {
            toast.error("Category name is required.");
            return;
        }

        setIsSaving(true);
        try {
            if (categoryToEdit) {
                await axios.patch(`/api/categories/${categoryToEdit.id}`, { name });
            } else {
                await axios.post("/api/categories", { name });
            }
            navigate("/admin/category/mgt", {
                state: { showCreateCategoryToast: !categoryToEdit },
            });
        } catch (error) {
            toast.error(error.response?.data?.message || "Unable to save category.");
        } finally {
            setIsSaving(false);
        }
    }
    
    return(
        <>
        <div className="bg-[#FBFBFA] font-sans">

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
                                        onClick={() => {
                                            logout();
                                        }}
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
                <div className="flex justify-between items-center px-10 py-6 border-b border-gray-200">

                    <h2 className="text-3xl font-semibold text-gray-900">
                        {categoryToEdit ? "Edit category" : "Create category"}
                    </h2>

                    <button
                        type="button"
                        onClick={handleSave}
                        disabled={isSaving}
                        className="bg-[#2E2824] hover:bg-black disabled:cursor-not-allowed disabled:opacity-60 text-white text-sm px-8 py-3 rounded-full transition">
                        {isSaving ? "Saving..." : "Save"}
                    </button>

                </div>

                {/* Form */}
                <div className="px-10 py-8">

                    <div className="max-w-md">

                        <label className="block text-sm text-gray-600 mb-2">
                            Category name
                        </label>

                        <input
                            type="text"
                            value={categoryName}
                            onChange={(event) => setCategoryName(event.target.value)}
                            placeholder="Category name"
                            className="w-full h-11 px-4 rounded-md border border-gray-300 bg-white
                                focus:outline-none focus:ring-2 focus:ring-gray-400
                                placeholder:text-gray-400"/>

                    </div>

                </div>

            </main>

        </div>

        </div>
        </>
    )
};

export default CategoryCreatePage;