function CategoryCreatePage(){
    return(
        <>
        <div className="bg-[#FBFBFA] font-sans">

        <div className="flex h-screen">

            {/* Sidebar */}
            <aside className="w-64 bg-[#FBFBFA] flex flex-col justify-between border-r border-gray-200">

                <div>

                    {/* Logo */}
                    <div className="px-8 pt-10 pb-8">
                        <h1 className="text-4xl font-light text-gray-800">hh.</h1>
                        <p className="text-[#E3A46B] text-sm mt-1">Admin panel</p>
                    </div>

                    {/* Navigation */}
                    <nav className="space-y-1">

                        <a href="#"
                            className="flex items-center gap-3 px-8 py-4 text-gray-600 hover:bg-gray-100">

                            <ion-icon name="document-text-outline" className="text-lg"></ion-icon>
                            <span className="text-sm">Article management</span>

                        </a>

                        <a href="#"
                            className="flex items-center gap-3 px-8 py-4 bg-[#E7E2DB] text-gray-800">

                            <ion-icon name="folder-outline" className="text-lg"></ion-icon>
                            <span className="text-sm font-medium">Category management</span>

                        </a>

                        <a href="#"
                            className="flex items-center gap-3 px-8 py-4 text-gray-600 hover:bg-gray-100">

                            <ion-icon name="person-outline" className="text-lg"></ion-icon>
                            <span className="text-sm">Profile</span>

                        </a>

                        <a href="#"
                            className="flex items-center gap-3 px-8 py-4 text-gray-600 hover:bg-gray-100">

                            <ion-icon name="notifications-outline" className="text-lg"></ion-icon>
                            <span className="text-sm">Notification</span>

                        </a>

                        <a href="#"
                            className="flex items-center gap-3 px-8 py-4 text-gray-600 hover:bg-gray-100">

                            <ion-icon name="lock-closed-outline" className="text-lg"></ion-icon>
                            <span className="text-sm">Reset password</span>

                        </a>

                    </nav>

                </div>

                {/* Bottom */}
                <div className="border-t border-gray-200">

                    <a href="#"
                        className="flex items-center gap-3 px-8 py-5 text-gray-600 hover:bg-gray-100">

                        <ion-icon name="globe-outline"></ion-icon>
                        <span className="text-sm">hh. website</span>

                    </a>

                    <a href="#"
                        className="flex items-center gap-3 px-8 py-5 text-gray-600 hover:bg-gray-100 border-t border-gray-200">

                        <ion-icon name="log-out-outline"></ion-icon>
                        <span className="text-sm">Log out</span>

                    </a>

                </div>

            </aside>

            {/* Main */}
            <main className="flex-1 bg-white">

                {/* Header */}
                <div className="flex justify-between items-center px-10 py-6 border-b border-gray-200">

                    <h2 className="text-3xl font-semibold text-gray-900">
                        Create category
                    </h2>

                    <button
                        className="bg-[#2E2824] hover:bg-black text-white text-sm px-8 py-3 rounded-full transition">
                        Save
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