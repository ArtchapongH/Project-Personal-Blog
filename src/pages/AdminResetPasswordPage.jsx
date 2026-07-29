import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";

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

function AdminResetPasswordPage(){
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
                            className="flex items-center gap-3 px-8 py-4 text-gray-500 hover:bg-gray-100 text-sm w-full text-left"
                        >
                            <img src={bellLightIcon} alt="Notification icon" className="w-4 h-4 object-contain" />
                            Notification
                        </button>
            
                        <button 
                            onClick={() => navigate("/admin/reset")}
                            className="flex items-center gap-3 px-8 py-4 bg-[#C5DDFC] text-gray-900 text-sm font-medium w-full text-left"
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
            <main className="flex-1 bg-white">

                {/* Header */}
                <header className="flex items-center justify-between px-8 py-5 border-b border-gray-200">

                    <h2 className="text-2xl font-semibold text-gray-800">
                        Reset password
                    </h2>

                    <AlertDialog>
                        <AlertDialogTrigger asChild>
                            <button
                                type="button"
                                className="bg-[#2B2622] hover:bg-black text-white text-sm px-7 py-2.5 rounded-full transition"
                            >
                                Reset password
                            </button>
                        </AlertDialogTrigger>
                        <AlertDialogContent className="max-w-md rounded-2xl border-0 px-8 py-8">
                            <AlertDialogCancel className="absolute right-4 top-4 h-8 w-8 rounded-sm border-0 bg-transparent p-0 text-gray-400 opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-0 disabled:pointer-events-none">
                                <X className="h-4 w-4" />
                                <span className="sr-only">Close</span>
                            </AlertDialogCancel>
                            <AlertDialogHeader>
                                <AlertDialogTitle className="text-center text-3xl font-bold text-[#2B2622]">
                                    Reset password
                                </AlertDialogTitle>
                            </AlertDialogHeader>
                            <p className="py-4 text-center text-sm text-gray-500">
                                Do you want to reset your password?
                            </p>
                            <AlertDialogFooter className="mx-0 mb-0 flex-row items-center justify-center gap-3 rounded-none border-t-0 bg-white p-0 sm:justify-center">
                                <AlertDialogCancel className="h-10 rounded-full border border-gray-300 bg-white px-7 text-sm font-medium text-gray-700 hover:bg-gray-50">
                                    Cancel
                                </AlertDialogCancel>
                                <AlertDialogAction className="h-10 rounded-full bg-[#2B2622] px-7 text-sm font-medium text-white hover:bg-black">
                                    Reset
                                </AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>

                </header>

                {/* Form */}
                <section className="px-8 py-8">

                    <div className="max-w-md space-y-5">

                        {/* Current Password */}
                        <div>
                            <label className="block text-sm text-gray-600 mb-2">
                                Current password
                            </label>

                            <input
                                type="password"
                                placeholder="Current password"
                                className="w-full h-11 px-4 rounded-md border border-gray-300 bg-white
                                    placeholder:text-gray-400
                                    focus:outline-none
                                    focus:ring-2
                                    focus:ring-gray-400"/>
                        </div>

                        {/* New Password */}
                        <div>
                            <label className="block text-sm text-gray-600 mb-2">
                                New password
                            </label>

                            <input
                                type="password"
                                placeholder="New password"
                                className="w-full h-11 px-4 rounded-md border border-gray-300 bg-white
                                    placeholder:text-gray-400
                                    focus:outline-none
                                    focus:ring-2
                                    focus:ring-gray-400"/>
                        </div>

                        {/* Confirm Password */}
                        <div>
                            <label className="block text-sm text-gray-600 mb-2">
                                Confirm new password
                            </label>

                            <input
                                type="password"
                                placeholder="Confirm new password"
                                className="w-full h-11 px-4 rounded-md border border-gray-300 bg-white
                                    placeholder:text-gray-400
                                    focus:outline-none
                                    focus:ring-2
                                    focus:ring-gray-400"/>
                        </div>

                    </div>

                </section>

            </main>

        </div>

        </div>
        </>
    )
};

export default AdminResetPasswordPage;