import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
import SearchResultBox from "../components/SearchResultBox";

function ArticleManagementPage(){

    const navigate = useNavigate();

    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const [selectedCategory, setSelectedCategory] = useState("");
    const [search, setSearch] = useState("");
    const [suggestion, setSuggestion] = useState([]);

    const filteredPosts = selectedCategory
        ? posts.filter((post) => post.category === selectedCategory)
        : posts;

    useEffect(() => {
        let isMounted = true;

        const getPosts = async () => {
            try {
                const response = await axios.get("https://blog-post-project-api.vercel.app/posts");
                if (isMounted) {
                    setPosts(response.data.posts ?? []);
                }
            } catch (error) {
                console.error("Failed to fetch posts:", error);
                if (isMounted) {
                    setPosts([]);
                }
            } finally {
                if (isMounted) {
                    setIsLoading(false);
                }
            }
        };

        getPosts();

        return () => {
            isMounted = false;
        };
    }, []);

    useEffect(() => {
        const fetchSuggestions = async () => {
            try {
                const response = await axios.get(`https://blog-post-project-api.vercel.app/posts?keyword=${search}`);
                setSuggestion(response.data.posts ?? []);
            } catch (error) {
                console.error("Error fetching search results:", error);
            }
        };

        // Debounce search input to reduce API calls while typing.
        const timeoutId = setTimeout(() => {
            fetchSuggestions();
        }, 300);

        return () => clearTimeout(timeoutId);
    }, [search]);
    
    return(
        <>


<div className="bg-[#FBFBFA] font-sans">

<div className="flex h-screen">

    {/* ================= Sidebar ================= */}
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
                className="flex items-center gap-3 px-8 py-4 bg-[#C5DDFC] text-gray-900 text-sm font-medium w-full text-left"
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
                className="flex items-center gap-3 px-8 py-4 text-gray-500 hover:bg-gray-100 text-sm w-full text-left"
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

    {/* ================= Main ================= */}
    <div className="flex-1 flex flex-col bg-white">

        {/* Top Header */}
        <div className="bg-white border-b h-20 flex items-center justify-between px-10">

            <h2 className="text-3xl font-semibold text-[#2b2b2b]">
                Article management
            </h2>

            <button
                onClick={() => navigate("/admin/article/create")}
                className="bg-[#26221f] text-white rounded-full px-7 py-3 flex items-center gap-2 text-sm hover:bg-black">

                <img src={addRoundLightIcon} alt="Create icon" className="w-4 h-4 object-contain" />

                Create article
            </button>

        </div>

        {/* Content */}
        <section className="p-10 bg-white">

            {/* Filters */}
            <div className="flex justify-between items-center mb-5">

                {/* Search */}
                <div className="relative w-96">

                    <img
                        src={searchLightIcon}
                        alt="Search icon"
                        className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 object-contain"
                    />

                    <input
                        type="text"
                        placeholder="Search..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full bg-white border rounded-lg pl-10 pr-4 py-3 text-sm outline-none focus:ring-2 focus:ring-orange-200"/>

                    {search && suggestion.length > 0 && (
                        <SearchResultBox
                            suggestion={suggestion}
                            getNavigatePath={(item) => {
                                const postId = item.id ?? item._id;
                                return `/admin/article/edit/${postId}`;
                            }}
                        />
                    )}

                </div>

                {/* Right Filters */}
                <div className="flex gap-4">
                    {/* ตรงนี้อาจจะต้องแก้เป็น button เพื่อให้มันเก็บค่าได้หรือเปล่า*/}
                    <select
                        className="w-40 border rounded-lg px-4 py-3 bg-white text-sm text-gray-600">
                        <option>Status</option>
                        <option>Published</option>
                        <option>Draft</option>
                    </select>

                    <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="w-40 border rounded-lg px-4 py-3 bg-white text-sm text-gray-600">
                        <option value="">Category</option>
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

                        <th className="w-20"></th>

                    </tr>

                    </thead>

                    <tbody className="text-sm">
                    {
                        isLoading ? (
                            <tr>
                                <td colSpan={5} className="px-6 py-5 text-center text-gray-500">
                                    Loading articles...
                                </td>
                            </tr>
                        ) : filteredPosts.length === 0 ? (
                            <tr>
                                <td colSpan={5} className="px-6 py-5 text-center text-gray-500">
                                    No articles found.
                                </td>
                            </tr>
                        ) : (
                            filteredPosts.map((post, index) => {
                                const postId = post.id ?? post._id ?? index;
                                const editPostLink = `/admin/article/edit/${postId}`;
                                const deletePostLink = `/admin/article/delete/${postId}`;
                                return (
                                    <tr key={postId} className="border-b hover:bg-gray-50">
                                        <td className="px-6 py-5">
                                            {post.title}
                                        </td>

                                        <td className="px-4">
                                            {post.category}
                                        </td>

                                        <td className="px-4">
                                            <span className="text-[#8BBBF9] font-medium">
                                                • Published
                                            </span>
                                        </td>

                                        <td className="px-4">
                                            <Link to={editPostLink}>
                                                <img src={editLightIcon} alt="Edit icon" className="w-4 h-4 object-contain" />
                                            </Link>
                                        </td>

                                        <td className="px-4">
                                            <Link to={deletePostLink}>
                                                <img src={trashLightIcon} alt="Trash icon" className="w-4 h-4 object-contain" />
                                            </Link>
                                        </td>
                                    </tr>
                                );
                            })
                        )
                    }

                    </tbody>

                </table>

            </div>

        </section>

    </div>

</div>

</div>
        </>
    )
};

export default ArticleManagementPage;