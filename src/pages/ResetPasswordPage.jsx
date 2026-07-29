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
import { Link } from "react-router-dom"
import userDuotoneIcon from "../icons/User_duotone.png"
import refreshLightIcon from "../icons/Refresh_light.png"

function ResetPasswordPage(){

    return (
        <>
        <div className="bg-white min-h-screen flex flex-col font-sans text-stone-800 antialiased">

            {/* Mobile View - Only shown on mobile */}
            <div className="md:hidden">
                {/* Mobile Header */}
                <div className="bg-white border-b border-stone-200">
                    <div className="max-w-md mx-auto px-4 flex items-center h-12 gap-6 text-sm text-stone-500 font-medium">
                        {/* Profile */}
                        <Link to="/membership">
                        <button className="flex items-center gap-2 px-6 py-4 text-sm font-medium border-b-2 border-black">
                                <img src={userDuotoneIcon} alt="Profile icon"  className="w-4 h-4 object-contain" />
                            Profile
                        </button>
                        </Link>

                        {/* Reset */}
                        <Link to="/reset">
                        <button className="flex items-center gap-2 px-6 py-4 text-sm text-gray-400 hover:text-black transition">
                            <img src={refreshLightIcon} alt="Reset icon"  className="w-4 h-4 object-contain" />
                            Reset password
                        </button>
                        </Link>
                    </div>
                    
                    <div className="px-6 py-5 flex items-center justify-between border-b border-stone-200/60">
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 rounded-full overflow-hidden border border-stone-200 bg-stone-100 flex-shrink-0">
                                <img 
                                    src="https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=150&auto=format&fit=crop&q=60" 
                                    alt="Moo Deng Profile" 
                                    className="w-full h-full object-cover" 
                                />
                            </div>
                            <span className="font-semibold text-stone-700 tracking-wide truncate max-w-[120px]">Mooden...</span>
                        </div>
                        
                        <div className="h-6 w-px bg-stone-300 mx-2"></div>
                        
                        <h1 className="text-xl font-bold text-[#231f20] flex-1 text-left pl-2">Reset password</h1>
                    </div>
                </div>

                {/* Mobile Form */}
                <form className="p-6 space-y-5 bg-white" onSubmit={(e) => e.preventDefault()}>
                    <div className="space-y-1.5">
                        <label htmlFor="current-password-mobile" className="block text-sm font-medium text-stone-500">
                            Current password
                        </label>
                        <input 
                            type="password" 
                            id="current-password-mobile" 
                            placeholder="Current password" 
                            className="w-full px-4 py-3 rounded-lg border border-stone-300 bg-white text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-500 focus:border-stone-500 transition-shadow shadow-sm"
                        />
                    </div>

                    <div className="space-y-1.5">
                        <label htmlFor="new-password-mobile" className="block text-sm font-medium text-stone-500">
                            New password
                        </label>
                        <input 
                            type="password" 
                            id="new-password-mobile" 
                            placeholder="New password" 
                            className="w-full px-4 py-3 rounded-lg border border-stone-300 bg-white text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-500 focus:border-stone-500 transition-shadow shadow-sm"
                        />
                    </div>

                    <div className="space-y-1.5">
                        <label htmlFor="confirm-password-mobile" className="block text-sm font-medium text-stone-500">
                            Confirm new password
                        </label>
                        <input 
                            type="password" 
                            id="confirm-password-mobile" 
                            placeholder="Confirm new password" 
                            className="w-full px-4 py-3 rounded-lg border border-stone-300 bg-white text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-500 focus:border-stone-500 transition-shadow shadow-sm"
                        />
                    </div>

                    <div className="pt-2">
                        <AlertDialog>
                            <AlertDialogTrigger asChild>
                                <button 
                                    type="button" 
                                    className="px-6 py-3 bg-[#231f1d] hover:bg-stone-800 text-stone-100 font-medium rounded-full shadow-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-stone-900"
                                >
                                    Reset password
                                </button>
                            </AlertDialogTrigger>
                            <AlertDialogContent className="max-w-md">
                                <AlertDialogCancel className="absolute right-4 top-4 h-8 w-8 rounded-sm border-0 bg-transparent p-0 opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-0 disabled:pointer-events-none">
                                    <X className="h-4 w-4" />
                                    <span className="sr-only">Close</span>
                                </AlertDialogCancel>
                                <AlertDialogHeader>
                                    <AlertDialogTitle className="text-center text-xl font-bold">
                                        Reset password
                                    </AlertDialogTitle>
                                </AlertDialogHeader>
                                <div className="text-center text-sm text-gray-600 py-4">
                                    Do you want to reset your password?
                                </div>
                                <AlertDialogFooter className="flex-row gap-3 sm:flex-row justify-center">
                                    <AlertDialogCancel className="rounded-full border border-gray-300 px-6 py-2 text-sm font-medium hover:bg-gray-50">
                                        Cancel
                                    </AlertDialogCancel>
                                    <AlertDialogAction className="rounded-full bg-black px-6 py-2 text-sm font-semibold hover:bg-gray-800">
                                        Reset
                                    </AlertDialogAction>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>
                    </div>
                </form>
            </div>

            {/* Desktop View - Only shown on desktop */}
            <div className="hidden md:block md:max-w-4xl md:mx-auto md:mt-8 md:w-full">
                {/* Top Header with Profile and Title */}
                <div className="bg-white rounded-t-xl px-6 py-4 flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden border border-stone-200 bg-stone-100 flex-shrink-0">
                        <img 
                            src="https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=150&auto=format&fit=crop&q=60" 
                            alt="Moo Deng Profile" 
                            className="w-full h-full object-cover" 
                        />
                    </div>
                    <span className="font-semibold text-stone-700 text-lg">Moodeng ja</span>
                    <span className="text-stone-400 mx-2">|</span>
                    <h1 className="text-lg font-semibold text-stone-900">Reset password</h1>
                </div>

                {/* Main Content Area - Sidebar + Form */}
                <div className="flex rounded-b-xl overflow-hidden">
                    {/* Left Sidebar Navigation */}
                    <aside className="w-64 bg-white p-6">
                        <nav className="space-y-1">
                            <a 
                                href="/membership" 
                                className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-stone-600 rounded-lg hover:bg-stone-100 transition-colors"
                            >
                                <img src={userDuotoneIcon} alt="Profile icon"  className="w-4 h-4 object-contain" />
                                Profile
                            </a>
                            <a 
                                href="/reset" 
                                className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-stone-900 bg-stone-100 rounded-lg"
                            >
                                <img src={refreshLightIcon} alt="Reset icon"  className="w-4 h-4 object-contain" />
                                Reset password
                            </a>
                        </nav>
                    </aside>

                    {/* Right Form Area */}
                    <div className="flex-1 rounded-xl bg-stone-50 p-8">
                        <form className="space-y-5 max-w-lg" onSubmit={(e) => e.preventDefault()}>
                            <div className="space-y-1.5">
                                <label htmlFor="current-password" className="block text-sm font-medium text-stone-500">
                                    Current password
                                </label>
                                <input 
                                    type="password" 
                                    id="current-password" 
                                    placeholder="Current password" 
                                    className="w-full px-4 py-3 rounded-lg border border-stone-300 bg-white text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-500 focus:border-stone-500 transition-shadow shadow-sm"
                                />
                            </div>

                            <div className="space-y-1.5">
                                <label htmlFor="new-password" className="block text-sm font-medium text-stone-500">
                                    New password
                                </label>
                                <input 
                                    type="password" 
                                    id="new-password" 
                                    placeholder="New password" 
                                    className="w-full px-4 py-3 rounded-lg border border-stone-300 bg-white text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-500 focus:border-stone-500 transition-shadow shadow-sm"
                                />
                            </div>

                            <div className="space-y-1.5">
                                <label htmlFor="confirm-password" className="block text-sm font-medium text-stone-500">
                                    Confirm new password
                                </label>
                                <input 
                                    type="password" 
                                    id="confirm-password" 
                                    placeholder="Confirm new password" 
                                    className="w-full px-4 py-3 rounded-lg border border-stone-300 bg-white text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-500 focus:border-stone-500 transition-shadow shadow-sm"
                                />
                            </div>

                            <div className="pt-2">
                                <AlertDialog>
                                    <AlertDialogTrigger asChild>
                                        <button 
                                            type="button" 
                                            className="px-6 py-3 bg-[#231f1d] hover:bg-stone-800 text-stone-100 font-medium rounded-full shadow-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-stone-900"
                                        >
                                            Reset password
                                        </button>
                                    </AlertDialogTrigger>
                                    <AlertDialogContent className="max-w-md">
                                        <AlertDialogCancel className="absolute right-4 top-4 h-8 w-8 rounded-sm border-0 bg-transparent p-0 opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-0 disabled:pointer-events-none">
                                            <X className="h-4 w-4" />
                                            <span className="sr-only">Close</span>
                                        </AlertDialogCancel>
                                        <AlertDialogHeader>
                                            <AlertDialogTitle className="text-center text-xl font-bold">
                                                Reset password
                                            </AlertDialogTitle>
                                        </AlertDialogHeader>
                                        <div className="text-center text-sm text-gray-600 py-4">
                                            Do you want to reset your password?
                                        </div>
                                        <AlertDialogFooter className="flex-row gap-3 sm:flex-row justify-center">
                                            <AlertDialogCancel className="rounded-full border border-gray-300 px-6 py-2 text-sm font-medium hover:bg-gray-50">
                                                Cancel
                                            </AlertDialogCancel>
                                            <AlertDialogAction className="rounded-full bg-black px-6 py-2 text-sm font-semibold hover:bg-gray-800">
                                                Reset
                                            </AlertDialogAction>
                                        </AlertDialogFooter>
                                    </AlertDialogContent>
                                </AlertDialog>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
        </>
    )
};

export default ResetPasswordPage;