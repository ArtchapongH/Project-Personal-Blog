function NotificationPage(){
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

                        <a href="#" className="flex items-center gap-3 px-8 py-4 bg-[#E8E4DE] text-gray-800">
                            <ion-icon name="notifications-outline"></ion-icon>
                            <span className="text-sm font-medium">Notification</span>
                        </a>

                        <a href="#" className="flex items-center gap-3 px-8 py-4 text-gray-600 hover:bg-gray-100">
                            <ion-icon name="lock-closed-outline"></ion-icon>
                            <span className="text-sm">Reset password</span>
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

            {/* Main */}
            <main className="flex-1 bg-white">

                {/* Header */}
                <header className="px-8 py-5 border-b border-gray-200">
                    <h2 className="text-2xl font-semibold text-gray-800">
                        Notification
                    </h2>
                </header>

                {/* Notifications */}
                <div className="px-8">

                    {/* Notification Item */}
                    <div className="flex justify-between items-start py-6 border-b border-gray-200">

                        <div className="flex gap-4">

                            <img
                                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&q=80"
                                className="w-10 h-10 rounded-full object-cover"
                                alt="Avatar"/>

                            <div>

                                <p className="text-sm text-gray-700 leading-relaxed">

                                    <span className="font-semibold">
                                        Jacob Lash
                                    </span>

                                    Commented on your article:
                                    <span className="text-gray-600">
                                        The Fascinating World of Cats: Why We Love Our Furry Friends
                                    </span>

                                </p>

                                <p className="text-sm text-gray-600 mt-1 italic">
                                    "I loved this article! It really explains why my cat is so independent yet loving. The purring section was super interesting."
                                </p>

                                <p className="text-xs text-[#D89B6C] mt-2">
                                    4 hours ago
                                </p>

                            </div>

                        </div>

                        <button className="text-sm font-semibold text-gray-700 hover:text-black">
                            View
                        </button>

                    </div>

                    {/* Notification Item */}
                    <div className="flex justify-between items-start py-6 border-b border-gray-200">

                        <div className="flex gap-4">

                            <img
                                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&q=80"
                                className="w-10 h-10 rounded-full object-cover"
                                alt="Avatar"/>

                            <div>

                                <p className="text-sm text-gray-700">

                                    <span className="font-semibold">
                                        Jacob Lash
                                    </span>

                                    liked your article:
                                    <span className="text-gray-600">
                                        The Fascinating World of Cats: Why We Love Our Furry Friends
                                    </span>

                                </p>

                                <p className="text-xs text-[#D89B6C] mt-2">
                                    4 hours ago
                                </p>

                            </div>

                        </div>

                        <button className="text-sm font-semibold text-gray-700 hover:text-black">
                            View
                        </button>

                    </div>

                </div>

            </main>

        </div>

        </div>
        </>
    )
};

export default NotificationPage;