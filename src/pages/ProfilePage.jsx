function ProfilePage(){
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

                    {/* Menu */}
                    <nav>

                        <a href="#"
                        className="flex items-center gap-3 px-8 py-4 text-gray-600 hover:bg-gray-100">

                            <ion-icon name="document-text-outline"></ion-icon>
                            <span className="text-sm">Article management</span>

                        </a>

                        <a href="#"
                        className="flex items-center gap-3 px-8 py-4 text-gray-600 hover:bg-gray-100">

                            <ion-icon name="folder-outline"></ion-icon>
                            <span className="text-sm">Category management</span>

                        </a>

                        <a href="#"
                        className="flex items-center gap-3 px-8 py-4 bg-[#E8E4DE] text-gray-800">

                            <ion-icon name="person-outline"></ion-icon>
                            <span className="text-sm font-medium">
                                Profile
                            </span>

                        </a>

                        <a href="#"
                        className="flex items-center gap-3 px-8 py-4 text-gray-600 hover:bg-gray-100">

                            <ion-icon name="notifications-outline"></ion-icon>
                            <span className="text-sm">Notification</span>

                        </a>

                        <a href="#"
                        className="flex items-center gap-3 px-8 py-4 text-gray-600 hover:bg-gray-100">

                            <ion-icon name="lock-closed-outline"></ion-icon>
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
                    className="flex items-center gap-3 px-8 py-5 border-t border-gray-200 text-gray-600 hover:bg-gray-100">

                        <ion-icon name="log-out-outline"></ion-icon>
                        <span className="text-sm">Log out</span>

                    </a>

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