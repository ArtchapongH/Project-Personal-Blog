function MemberProfile(){
    return(
        <>
        <div className="bg-stone-50 min-h-screen flex flex-col font-sans text-stone-800 antialiased">

            {/* Mobile View - Only shown on mobile */}
            <div className="md:hidden">
                {/* Mobile Header */}
                <div className="w-full bg-[#FCFBF8] shadow-lg overflow-hidden">
                    {/* Top Navigation */}
                    <div className="border-b border-gray-200">
                        <div className="flex">
                            {/* Profile */}
                            <button className="flex items-center gap-2 px-6 py-4 text-sm font-medium border-b-2 border-black">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    className="w-4 h-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.8"
                                        d="M16 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2m10-10a4 4 0 11-8 0 4 4 0 018 0z"/>
                                </svg>
                                Profile
                            </button>

                            {/* Reset */}
                            <button className="flex items-center gap-2 px-6 py-4 text-sm text-gray-400 hover:text-black transition">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    className="w-4 h-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.8"
                                        d="M15 7a4 4 0 10-7.9 1H3v3h2v2h2v2h3l2.2-2.2A4 4 0 0015 7z"/>
                                </svg>
                                Reset password
                            </button>
                        </div>
                    </div>

                    {/* Title */}
                    <div className="flex items-center gap-3 px-6 py-6">
                        <div className="w-10 h-10 rounded-full bg-gray-500 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.8"
                                    d="M16 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2m10-10a4 4 0 11-8 0 4 4 0 018 0z"/>
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-700">
                            Moodeng ja
                        </h2>
                        <span className="text-gray-300">|</span>
                        <h3 className="text-2xl font-semibold text-gray-900">
                            Profile
                        </h3>
                    </div>

                    {/* Divider */}
                    <div className="border-b border-gray-200"></div>

                    {/* Content */}
                    <div className="px-6 py-8">
                        {/* Avatar */}
                        <div className="flex flex-col items-center">
                            <div className="w-32 h-32 rounded-full bg-gray-500 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    className="w-16 h-16 text-white"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.8"
                                        d="M16 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2m10-10a4 4 0 11-8 0 4 4 0 018 0z"/>
                                </svg>
                            </div>
                            <button className="mt-5 px-8 py-3 rounded-full border border-gray-400 bg-white hover:bg-gray-100 transition font-medium">
                                Upload profile picture
                            </button>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="border-b border-gray-200"></div>

                    {/* Form */}
                    <div className="px-6 py-8 space-y-5">
                        <div>
                            <label className="block mb-2 text-gray-500 font-medium">
                                Name
                            </label>
                            <input
                                type="text"
                                defaultValue="Moodeng ja"
                                className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-gray-400"
                            />
                        </div>

                        <div>
                            <label className="block mb-2 text-gray-500 font-medium">
                                Username
                            </label>
                            <input
                                type="text"
                                defaultValue="moodeng.cute"
                                className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-gray-400"
                            />
                        </div>

                        <div>
                            <label className="block mb-2 text-gray-300 font-medium">
                                Email
                            </label>
                            <input
                                disabled
                                defaultValue="moodeng.cute@gmail.com"
                                className="w-full rounded-lg bg-gray-100 px-4 py-3 text-gray-400 cursor-not-allowed"
                            />
                        </div>

                        <button
                            className="mt-3 w-full md:w-40 py-3 rounded-full bg-[#2E2723] text-white font-medium hover:bg-black transition">
                            Save
                        </button>
                    </div>
                </div>
            </div>

            {/* Desktop View - Only shown on desktop */}
            <div className="hidden md:block md:max-w-4xl md:mx-auto md:mt-8 md:w-full">
                {/* Top Header with Profile and Title */}
                <div className="bg-white border border-stone-200 rounded-t-xl px-6 py-4 flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden border border-stone-200 bg-gray-500 flex-shrink-0 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            className="w-7 h-7 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.8"
                                d="M16 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2m10-10a4 4 0 11-8 0 4 4 0 018 0z"/>
                        </svg>
                    </div>
                    <span className="font-semibold text-stone-700 text-lg">Moodeng ja</span>
                    <span className="text-stone-400 mx-2">|</span>
                    <h1 className="text-lg font-semibold text-stone-900">Profile</h1>
                </div>

                {/* Main Content Area - Sidebar + Form */}
                <div className="flex border-l border-r border-b border-stone-200 rounded-b-xl overflow-hidden">
                    {/* Left Sidebar Navigation */}
                    <aside className="w-64 bg-white border-r border-stone-200 p-6">
                        <nav className="space-y-1">
                            <a 
                                href="#" 
                                className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-stone-900 bg-stone-100 rounded-lg"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                </svg>
                                Profile
                            </a>
                            <a 
                                href="#" 
                                className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-stone-600 rounded-lg hover:bg-stone-100 transition-colors"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-3.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z" />
                                </svg>
                                Reset password
                            </a>
                        </nav>
                    </aside>

                    {/* Right Form Area */}
                    <div className="flex-1 bg-stone-50 p-8">
                        <form className="space-y-6 max-w-lg" onSubmit={(e) => e.preventDefault()}>
                            {/* Avatar Section */}
                            <div className="flex items-center gap-4">
                                <div className="w-20 h-20 rounded-full bg-gray-500 flex items-center justify-center flex-shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        className="w-10 h-10 text-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.8"
                                            d="M16 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2m10-10a4 4 0 11-8 0 4 4 0 018 0z"/>
                                    </svg>
                                </div>
                                <button 
                                    type="button"
                                    className="px-6 py-2.5 rounded-full border border-stone-400 bg-white hover:bg-stone-100 transition font-medium text-sm">
                                    Upload profile picture
                                </button>
                            </div>

                            {/* Name Field */}
                            <div className="space-y-1.5">
                                <label htmlFor="name" className="block text-sm font-medium text-stone-500">
                                    Name
                                </label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    defaultValue="Moodeng ja"
                                    className="w-full px-4 py-3 rounded-lg border border-stone-300 bg-white text-stone-800 focus:outline-none focus:ring-2 focus:ring-stone-500 focus:border-stone-500 transition-shadow shadow-sm"
                                />
                            </div>

                            {/* Username Field */}
                            <div className="space-y-1.5">
                                <label htmlFor="username" className="block text-sm font-medium text-stone-500">
                                    Username
                                </label>
                                <input 
                                    type="text" 
                                    id="username" 
                                    defaultValue="moodeng.cute"
                                    className="w-full px-4 py-3 rounded-lg border border-stone-300 bg-white text-stone-800 focus:outline-none focus:ring-2 focus:ring-stone-500 focus:border-stone-500 transition-shadow shadow-sm"
                                />
                            </div>

                            {/* Email Field (Disabled) */}
                            <div className="space-y-1.5">
                                <label htmlFor="email" className="block text-sm font-medium text-stone-400">
                                    Email
                                </label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    disabled
                                    defaultValue="moodeng.cute@gmail.com"
                                    className="w-full px-4 py-3 rounded-lg bg-stone-100 text-stone-400 cursor-not-allowed"
                                />
                            </div>

                            {/* Save Button */}
                            <div className="pt-2">
                                <button 
                                    type="submit" 
                                    className="px-6 py-3 bg-[#231f1d] hover:bg-stone-800 text-stone-100 font-medium rounded-full shadow-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-stone-900"
                                >
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
        </>
    )
};

export default MemberProfile;