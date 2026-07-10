function AdminResetPasswordPage(){
    return(
        <>

        <div className="bg-white">

        <div className="flex h-screen">

            {/* Sidebar */}
            <aside className="w-64 bg-[#FBFBFA] border-r border-gray-200 flex flex-col justify-between">

                <div>

                    {/* Logo */}
                    <div className="px-8 pt-8 pb-10">
                        <h1 className="text-4xl font-light text-gray-700">hh.</h1>
                        <p className="text-[#E8A86D] text-sm mt-1">
                            Admin panel
                        </p>
                    </div>

                    {/* Navigation */}
                    <nav>

                        <a href="#" className="flex items-center gap-3 px-8 py-4 text-gray-600 hover:bg-gray-100">
                            <ion-icon name="document-text-outline"></ion-icon>
                            <span className="text-sm">Article management</span>
                        </a>

                        <a href="#" className="flex items-center gap-3 px-8 py-4 text-gray-600 hover:bg-gray-100">
                            <ion-icon name="folder-outline"></ion-icon>
                            <span className="text-sm">Category management</span>
                        </a>

                        <a href="#" className="flex items-center gap-3 px-8 py-4 text-gray-600 hover:bg-gray-100">
                            <ion-icon name="person-outline"></ion-icon>
                            <span className="text-sm">Profile</span>
                        </a>

                        <a href="#" className="flex items-center gap-3 px-8 py-4 text-gray-600 hover:bg-gray-100">
                            <ion-icon name="notifications-outline"></ion-icon>
                            <span className="text-sm">Notification</span>
                        </a>

                        {/* Active */}
                        <a href="#" className="flex items-center gap-3 px-8 py-4 bg-[#E8E4DE] text-gray-800">
                            <ion-icon name="lock-closed-outline"></ion-icon>
                            <span className="text-sm font-medium">Reset password</span>
                        </a>

                    </nav>

                </div>

                {/* Bottom */}
                <div className="border-t border-gray-200">

                    <a href="#" className="flex items-center gap-3 px-8 py-5 text-gray-600 hover:bg-gray-100">
                        <ion-icon name="globe-outline"></ion-icon>
                        <span className="text-sm">hh. website</span>
                    </a>

                    <a href="#" className="flex items-center gap-3 px-8 py-5 border-t border-gray-200 text-gray-600 hover:bg-gray-100">
                        <ion-icon name="log-out-outline"></ion-icon>
                        <span className="text-sm">Log out</span>
                    </a>

                </div>

            </aside>

            {/* Main Content */}
            <main className="flex-1 bg-white">

                {/* Header */}
                <header className="flex items-center justify-between px-8 py-5 border-b border-gray-200">

                    <h2 className="text-2xl font-semibold text-gray-800">
                        Reset password
                    </h2>

                    <button
                        className="bg-[#2B2622] hover:bg-black text-white text-sm px-7 py-2.5 rounded-full transition">
                        Reset password
                    </button>

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