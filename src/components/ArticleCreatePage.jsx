import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

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
import imageBoxIcon from "../icons/Img_box_light.png";

import { useAuth } from "../contexts/authenticaition.jsx";

function ArticleCreatePage(){
    const categories = ["Highlight", "Cat", "Inspiration", "General"];
    
    const [imageUrl, setImageUrl] = useState("");
    const [category, setCategory] = useState("");
    const [author, setAuthor] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [content, setContent] = useState("");

    const navigate = useNavigate();

    const {logout} = useAuth();

    async function handleSubmit(e) {
        e.preventDefault();
        const newPost = {
            imageUrl: imageUrl,
            category: category,
            author:author,
            title:title,
            description: description,
            content: content
        };
        await axios.post(`https://blog-post-project-api.vercel.app/post`, newPost);
        navigate("/");
    };

    return(
        <>

<div className="bg-[#FAF8F5]">

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
                    onClick={() => {
                                logout();
                            }}
                    className="flex items-center gap-3 px-8 py-4 text-sm text-gray-500 w-full text-left hover:bg-gray-100"
                >
                    <img src={signOutSquareLightIcon} alt="SignOut icon" className="w-4 h-4 object-contain" />
                    Log out
                </button>
    
            </div>
    
        </aside>

    {/* ================= Main ================= */}
    <div className="flex-1 overflow-y-auto bg-white">

        {/* Header */}
        {/* เราใส่ขอบเขตของ form ถูกหรือยัง */}
        <form className="product-form" onSubmit={handleSubmit}>
        <div className="h-20 bg-white border-b px-10 flex items-center justify-between">

            <h2 className="text-2xl font-semibold text-gray-800">
                Create article
            </h2>

            <div className="flex gap-4">
                {/* ทำยังไงให้ปุ่มมันเก็บค่า draft หรือ publish? */}
                <button
                    type="submit"
                    className="px-6 py-2 rounded-full border border-gray-300 text-sm hover:bg-gray-50">
                    Save as draft
                </button>

                <button
                    type="submit"
                    className="px-6 py-2 rounded-full bg-[#26221F] text-white text-sm hover:bg-black">
                    Save and publish
                </button>

            </div>

        </div>

        {/* Form */}
        
        <div className="max-w-5xl px-10 py-8 bg-white">

            {/* Thumbnail */}
            <label className="block text-xs text-gray-500 mb-3">
                Thumbnail image
            </label>

            <div className="flex items-center gap-6 mb-6">

                <div
                    className="w-52 h-36 bg-[#FBFBFA] border rounded flex items-center justify-center">
                        {/* ทำยังไงให้อัพโหลดรูปได้? */}
                    <img src={imageBoxIcon} alt="Profile icon" className="w-4 h-4 object-contain" />
                    <i data-lucide="image"
                       className="w-7 h-7 text-gray-400">
                       </i>

                </div>
                       {/* ต้องทำ onClick */} 
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

                {/* dynamic buttons with array.map [but how to adjust bg color of only first button]*/}
                {
                categories.map((cat) => {
                    return (
                    <button
                        disabled={category === cat}
                        key={cat}
                        onClick={() => setCategory(cat)}
                        className={`px-4 py-2 transition-colors rounded-sm text-sm font-medium ${category === cat ? 'bg-[#DAD6D1]' : 'hover:bg-muted'}`}
                    >
                        {cat}
                    </button>
                    )
                })
                }
                {/*
                <select
                    className="w-full border rounded px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-orange-200">
                    <option>Select category</option>
                    <option>Cat</option>
                    <option>General</option>
                    <option>Inspiration</option>
                </select>
                */}

            </div>

            {/* Author */}
            <div className="mb-5 max-w-sm">

                <label className="block text-xs text-gray-300 mb-2">
                    Author name
                </label>

                <input
                    disabled
                    value={author}
                    className="w-full bg-gray-100 text-gray-400 border rounded px-3 py-2 text-sm"/>

            </div>

            {/* Title */}
            <div className="mb-5">

                <label className="block text-xs text-gray-500 mb-2">
                    Title
                </label>

                <input
                    type="text"
                    value={title}
                    onChange={(e) => { setTitle(e.target.value) }}
                    placeholder="Article title"
                    className="w-full border rounded px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-orange-200"/>

            </div>

            {/* Introduction */}
            <div className="mb-5">

                <label className="block text-xs text-gray-500 mb-2">
                    Introduction (max 120 letters)
                </label>

                <input
                    value={description}
                    onChange={(e) => { setDescription(e.target.value) }}
                    placeholder="Introduction"
                    className="w-full border rounded px-3 py-2 text-sm resize-none outline-none focus:ring-2 focus:ring-orange-200"/>

            </div>

            {/* Content */}
            <div>

                <label className="block text-xs text-gray-500 mb-2">
                    Content
                </label>

                <input
                    value={content}
                    onChange={(e) => { setContent(e.target.value) }}
                    placeholder="Content"
                    className="w-full border rounded px-3 py-2 text-sm outline-none resize-none focus:ring-2 focus:ring-orange-200"/>

            </div>

        </div>
        </form>

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