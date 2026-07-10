function CategoryManagementPage(){

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
            <aside id="sidebar"
                className="fixed md:relative z-50 w-64 h-full bg-[#FBFBFA] border-r border-gray-200 transform -translate-x-full md:translate-x-0 transition-transform duration-300">

                {/* Logo */}
                <div className="px-8 py-10">
                    <h1 className="text-4xl font-light text-gray-700">hh.</h1>
                    <p className="text-orange-300 text-sm mt-1">Admin panel</p>
                </div>

                {/* Navigation */}
                <nav className="text-sm">

                    <a href="#" className="flex items-center gap-3 px-8 py-4 text-gray-600 hover:bg-gray-100">

                        {/* article icon */}
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"
                                d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/>
                        </svg>

                        Article management
                    </a>

                    <a href="#"
                        className="flex items-center gap-3 px-8 py-4 bg-[#E9E6E1] text-gray-700">

                        {/* folder */}
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"
                                d="M3 7h5l2 2h11v8a2 2 0 0 1-2 2H3z"/>
                        </svg>

                        Category management
                    </a>

                    <a href="#" className="flex items-center gap-3 px-8 py-4 text-gray-600 hover:bg-gray-100">

                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <circle cx="12" cy="8" r="4" stroke-width="1.8"/>
                            <path d="M4 20c1.5-4 14.5-4 16 0" stroke-width="1.8"/>
                        </svg>

                        Profile
                    </a>

                    <a href="#" className="flex items-center gap-3 px-8 py-4 text-gray-600 hover:bg-gray-100">

                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-width="1.8" stroke-linecap="round"
                                d="M15 17h5l-1.4-1.4A2 2 0 0 1 18 14.2V11a6 6 0 1 0-12 0v3.2a2 2 0 0 1-.6 1.4L4 17h5"/>
                            <path stroke-width="1.8" d="M10 20h4"/>
                        </svg>

                        Notification
                    </a>

                    <a href="#" className="flex items-center gap-3 px-8 py-4 text-gray-600 hover:bg-gray-100">

                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"
                                d="M12 8v4l2 2M12 3a9 9 0 100 18 9 9 0 000-18z"/>
                        </svg>

                        Reset password
                    </a>

                </nav>

                {/* Bottom */}
                <div className="absolute bottom-0 w-full">

                    <a href="#" className="flex items-center gap-3 px-8 py-5 text-gray-600 hover:bg-gray-100 border-t">

                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-width="1.8" d="M7 17L17 7"/>
                            <path stroke-width="1.8" d="M8 7h9v9"/>
                        </svg>

                        hh. website
                    </a>

                    <a href="#" className="flex items-center gap-3 px-8 py-5 text-gray-600 hover:bg-gray-100">

                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-width="1.8"
                                d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4"/>
                            <path stroke-width="1.8" d="M10 17l5-5-5-5"/>
                            <path stroke-width="1.8" d="M15 12H3"/>
                        </svg>

                        Log out
                    </a>

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

                        {/* Row */}
                        <div className="grid grid-cols-[1fr_90px] items-center px-5 py-4 border-b hover:bg-gray-50">
                            <div>Cat</div>

                            <div className="flex justify-end gap-4">

                                {/* Edit */}
                                <button>

                                    <svg className="w-4 h-4 text-gray-500"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24">

                                        <path stroke-width="1.8"
                                            d="M16.862 4.487a2.1 2.1 0 113 3L7 20l-4 1 1-4z"/>
                                    </svg>

                                </button>

                                {/* Delete */}
                                <button>

                                    <svg className="w-4 h-4 text-gray-400"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24">

                                        <path stroke-width="1.8"
                                            d="M4 7h16M9 7V4h6v3M7 7l1 13h8l1-13"/>
                                    </svg>

                                </button>

                            </div>
                        </div>

                        {/* Row */}
                        <div className="grid grid-cols-[1fr_90px] items-center px-5 py-4 border-b bg-[#F4F2EE]">
                            <div>General</div>

                            <div className="flex justify-end gap-4">

                                <button>
                                    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-width="1.8" d="M16.862 4.487a2.1 2.1 0 113 3L7 20l-4 1 1-4z"/>
                                    </svg>
                                </button>

                                <button>
                                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-width="1.8" d="M4 7h16M9 7V4h6v3M7 7l1 13h8l1-13"/>
                                    </svg>
                                </button>

                            </div>
                        </div>

                        {/* Row */}
                        <div className="grid grid-cols-[1fr_90px] items-center px-5 py-4 hover:bg-gray-50">
                            <div>Inspiration</div>

                            <div className="flex justify-end gap-4">

                                <button>
                                    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-width="1.8" d="M16.862 4.487a2.1 2.1 0 113 3L7 20l-4 1 1-4z"/>
                                    </svg>
                                </button>

                                <button>
                                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-width="1.8" d="M4 7h16M9 7V4h6v3M7 7l1 13h8l1-13"/>
                                    </svg>
                                </button>

                            </div>
                        </div>

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