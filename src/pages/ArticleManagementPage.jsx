function ArticleManagementPage(){
    return(
        <>


<div className="bg-[#faf8f5] font-sans">

<div className="flex h-screen">

    {/* ================= Sidebar ================= */}
    <aside className="w-64 bg-[#F5F3F0] border-r border-[#e7e3dd] flex flex-col">

        {/* Logo */}
        <div className="px-8 py-10">
            <h1 className="text-5xl font-semibold tracking-tight">
                hh<span className="text-[#f4a261]">.</span>
            </h1>

            <p className="text-[#F4A261] text-lg mt-1">
                Admin panel
            </p>
        </div>

        {/* Navigation */}
        <nav className="flex-1">

            <a href="#"
               className="flex items-center gap-3 px-8 py-4 bg-[#E9E5E0] text-gray-900 text-sm font-medium">
                <i data-lucide="file-text" className="w-4 h-4"></i>
                Article management
            </a>

            <a href="#"
               className="flex items-center gap-3 px-8 py-4 text-gray-500 hover:bg-gray-100 text-sm">
                <i data-lucide="folder" className="w-4 h-4"></i>
                Category management
            </a>

            <a href="#"
               className="flex items-center gap-3 px-8 py-4 text-gray-500 hover:bg-gray-100 text-sm">
                <i data-lucide="user" className="w-4 h-4"></i>
                Profile
            </a>

            <a href="#"
               className="flex items-center gap-3 px-8 py-4 text-gray-500 hover:bg-gray-100 text-sm">
                <i data-lucide="bell" className="w-4 h-4"></i>
                Notification
            </a>

            <a href="#"
               className="flex items-center gap-3 px-8 py-4 text-gray-500 hover:bg-gray-100 text-sm">
                <i data-lucide="key-round" className="w-4 h-4"></i>
                Reset password
            </a>

        </nav>

        {/* Bottom */}
        <div className="border-t">

            <a href="#"
               className="flex items-center gap-3 px-8 py-4 text-sm text-gray-500">
                <i data-lucide="external-link" className="w-4 h-4"></i>
                hh.website
            </a>

            <a href="#"
               className="flex items-center gap-3 px-8 py-4 text-sm text-gray-500">
                <i data-lucide="log-out" className="w-4 h-4"></i>
                Log out
            </a>

        </div>

    </aside>

    {/* ================= Main ================= */}
    <div className="flex-1 flex flex-col">

        {/* Top Header */}
        <div className="bg-white border-b h-20 flex items-center justify-between px-10">

            <h2 className="text-3xl font-semibold text-[#2b2b2b]">
                Article management
            </h2>

            <button
                className="bg-[#26221f] text-white rounded-full px-7 py-3 flex items-center gap-2 text-sm hover:bg-black">

                <i data-lucide="plus" className="w-4 h-4"></i>

                Create article
            </button>

        </div>

        {/* Content */}
        <section className="p-10">

            {/* Filters */}
            <div className="flex justify-between items-center mb-5">

                {/* Search */}
                <div className="relative w-96">

                    <i data-lucide="search"
                       className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"></i>

                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full bg-white border rounded-lg pl-10 pr-4 py-3 text-sm outline-none focus:ring-2 focus:ring-orange-200"/>

                </div>

                {/* Right Filters */}
                <div className="flex gap-4">

                    <select
                        className="w-40 border rounded-lg px-4 py-3 bg-white text-sm text-gray-600">
                        <option>Status</option>
                        <option>Published</option>
                        <option>Draft</option>
                    </select>

                    <select
                        className="w-40 border rounded-lg px-4 py-3 bg-white text-sm text-gray-600">
                        <option>Category</option>
                        <option>Cat</option>
                        <option>General</option>
                        <option>Inspiration</option>
                    </select>

                </div>

            </div>

            {/* Table */}
            <div className="bg-white rounded-lg border overflow-hidden">

                <table className="w-full">

                    <thead className="bg-[#fafafa] text-gray-500 text-sm">

                    <tr className="border-b">

                        <th className="text-left px-6 py-4 font-medium">
                            Article title
                        </th>

                        <th className="text-left px-4 py-4 font-medium w-32">
                            Category
                        </th>

                        <th className="text-left px-4 py-4 font-medium w-36">
                            Status
                        </th>

                        <th className="w-20"></th>

                    </tr>

                    </thead>

                    <tbody className="text-sm">

                    <tr className="border-b hover:bg-gray-50">

                        <td className="px-6 py-5">
                            Understanding Cat Behavior: Why Your Feline Friend Acts the Way They Do
                        </td>

                        <td className="px-4">
                            Cat
                        </td>

                        <td className="px-4">
                            <span className="text-green-500 font-medium">
                                • Published
                            </span>
                        </td>

                        <td className="px-4">
                            <div className="flex gap-4 justify-end">

                                <i data-lucide="pencil" className="w-4 h-4 text-gray-500 cursor-pointer"></i>

                                <i data-lucide="trash-2" className="w-4 h-4 text-gray-400 cursor-pointer"></i>

                            </div>
                        </td>

                    </tr>

                    <tr className="border-b hover:bg-gray-50">

                        <td className="px-6 py-5">
                            The Fascinating World of Cats: Why We Love Our Furry Friends
                        </td>

                        <td className="px-4">Cat</td>

                        <td className="px-4">
                            <span className="text-green-500 font-medium">
                                • Published
                            </span>
                        </td>

                        <td className="px-4">

                            <div className="flex gap-4 justify-end">

                                <i data-lucide="pencil" className="w-4 h-4 text-gray-500"></i>

                                <i data-lucide="trash-2" className="w-4 h-4 text-gray-400"></i>

                            </div>

                        </td>

                    </tr>

                    <tr className="border-b hover:bg-gray-50">

                        <td className="px-6 py-5">
                            Finding Motivation: How to Stay Inspired Through Life's Challenges
                        </td>

                        <td className="px-4">General</td>

                        <td className="px-4">
                            <span className="text-green-500 font-medium">
                                • Published
                            </span>
                        </td>

                        <td className="px-4">

                            <div className="flex gap-4 justify-end">

                                <i data-lucide="pencil" className="w-4 h-4 text-gray-500"></i>

                                <i data-lucide="trash-2" className="w-4 h-4 text-gray-400"></i>

                            </div>

                        </td>

                    </tr>

                    <tr className="border-b hover:bg-gray-50">

                        <td className="px-6 py-5">
                            The Science of the Cat's Purr: How It Benefits Cats and Humans Alike
                        </td>

                        <td className="px-4">Cat</td>

                        <td className="px-4">
                            <span className="text-green-500 font-medium">
                                • Published
                            </span>
                        </td>

                        <td className="px-4">

                            <div className="flex gap-4 justify-end">

                                <i data-lucide="pencil" className="w-4 h-4 text-gray-500"></i>

                                <i data-lucide="trash-2" className="w-4 h-4 text-gray-400"></i>

                            </div>

                        </td>

                    </tr>

                    <tr className="border-b hover:bg-gray-50">

                        <td className="px-6 py-5">
                            Top 10 Health Tips to Keep Your Cat Happy and Healthy
                        </td>

                        <td className="px-4">Cat</td>

                        <td className="px-4">
                            <span className="text-green-500 font-medium">
                                • Published
                            </span>
                        </td>

                        <td className="px-4">

                            <div className="flex gap-4 justify-end">

                                <i data-lucide="pencil" className="w-4 h-4 text-gray-500"></i>

                                <i data-lucide="trash-2" className="w-4 h-4 text-gray-400"></i>

                            </div>

                        </td>

                    </tr>

                    <tr className="hover:bg-gray-50">

                        <td className="px-6 py-5">
                            Unlocking Creativity: Simple Habits to Spark Inspiration Daily
                        </td>

                        <td className="px-4">Inspiration</td>

                        <td className="px-4">
                            <span className="text-green-500 font-medium">
                                • Published
                            </span>
                        </td>

                        <td className="px-4">

                            <div className="flex gap-4 justify-end">

                                <i data-lucide="pencil" className="w-4 h-4 text-gray-500"></i>

                                <i data-lucide="trash-2" className="w-4 h-4 text-gray-400"></i>

                            </div>

                        </td>

                    </tr>

                    </tbody>

                </table>

            </div>

        </section>

    </div>

</div>

<script>
    lucide.createIcons();
</script>

</div>
        </>
    )
};

export default ArticleManagementPage;