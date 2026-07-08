function ArticleCreatePage(){
    return(
        <>

<div className="bg-[#FAF8F5]">

<div className="flex h-screen">

    {/* ================= Sidebar ================= */}
    <aside className="w-64 bg-[#F5F3F0] border-r border-[#E7E3DD] flex flex-col">

        {/* Logo */}
        <div className="px-8 py-8">
            <h1 className="text-5xl font-semibold leading-none">
                hh<span className="text-[#F4A261]">.</span>
            </h1>

            <p className="text-[#F4A261] mt-2 text-lg">
                Admin panel
            </p>
        </div>

        {/* Navigation */}
        <nav className="flex-1">

            <a href="#"
               className="flex items-center gap-3 px-8 py-4 bg-[#E9E5E0] text-sm font-medium">
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
    <div className="flex-1 overflow-y-auto">

        {/* Header */}
        <div className="h-20 bg-white border-b px-10 flex items-center justify-between">

            <h2 className="text-2xl font-semibold text-gray-800">
                Create article
            </h2>

            <div className="flex gap-4">

                <button
                    className="px-6 py-2 rounded-full border border-gray-300 text-sm hover:bg-gray-50">
                    Save as draft
                </button>

                <button
                    className="px-6 py-2 rounded-full bg-[#26221F] text-white text-sm hover:bg-black">
                    Save and publish
                </button>

            </div>

        </div>

        {/* Form */}
        <div className="max-w-5xl px-10 py-8">

            {/* Thumbnail */}
            <label className="block text-xs text-gray-500 mb-3">
                Thumbnail image
            </label>

            <div className="flex items-center gap-6 mb-6">

                <div
                    className="w-52 h-36 bg-[#F4F2EF] border rounded flex items-center justify-center">

                    <i data-lucide="image"
                       className="w-7 h-7 text-gray-400"></i>

                </div>

                <button
                    className="px-6 py-2 border rounded-full text-sm hover:bg-gray-50">
                    Upload thumbnail image
                </button>

            </div>

            {/* Category */}
            <div className="mb-5 max-w-sm">

                <label className="block text-xs text-gray-500 mb-2">
                    Category
                </label>

                <select
                    className="w-full border rounded px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-orange-200">
                    <option>Select category</option>
                    <option>Cat</option>
                    <option>General</option>
                    <option>Inspiration</option>
                </select>

            </div>

            {/* Author */}
            <div className="mb-5 max-w-sm">

                <label className="block text-xs text-gray-300 mb-2">
                    Author name
                </label>

                <input
                    disabled
                    value="Thompson P."
                    className="w-full bg-gray-100 text-gray-400 border rounded px-3 py-2 text-sm"/>

            </div>

            {/* Title */}
            <div className="mb-5">

                <label className="block text-xs text-gray-500 mb-2">
                    Title
                </label>

                <input
                    type="text"
                    placeholder="Article title"
                    className="w-full border rounded px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-orange-200"/>

            </div>

            {/* Introduction */}
            <div className="mb-5">

                <label className="block text-xs text-gray-500 mb-2">
                    Introduction (max 120 letters)
                </label>

                <textarea
                    rows="3"
                    placeholder="Introduction"
                    className="w-full border rounded px-3 py-2 text-sm resize-none outline-none focus:ring-2 focus:ring-orange-200"></textarea>

            </div>

            {/* Content */}
            <div>

                <label className="block text-xs text-gray-500 mb-2">
                    Content
                </label>

                <textarea
                    rows="14"
                    placeholder="Content"
                    className="w-full border rounded px-3 py-2 text-sm outline-none resize-none focus:ring-2 focus:ring-orange-200"></textarea>

            </div>

        </div>

    </div>

</div>

<script>
    lucide.createIcons();
</script>

</div>
        </>
    )
};

export default ArticleCreatePage;