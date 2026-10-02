import { useState, useEffect, useRef } from "react";
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

import { useAuth } from "../contexts/authenticaition.jsx";

const API_BASE_URL = import.meta.env.DEV
    ? "/api"
    : import.meta.env.VITE_API_BASE_URL || "";

function ArticleEditPage(){
    const [categories, setCategories] = useState([]);

    const [imageUrl, setImageUrl] = useState("");
    const [category, setCategory] = useState("");
    const [author, setAuthor] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [content, setContent] = useState("");
    const [selectedImageFile, setSelectedImageFile] = useState(null);
    const [previewImageUrl, setPreviewImageUrl] = useState("");
    const [isSaving, setIsSaving] = useState(false);
    const fileInputRef = useRef(null);

    const { postId } = useParams();
    const navigate = useNavigate();

    const {logout} = useAuth();

    async function getCategories() {
        try {
            const response = await axios.get(`${API_BASE_URL}/categories`);
            setCategories(response.data.categories ?? []);
        } catch (error) {
            console.error("Failed to fetch categories:", error);
            setCategories([]);
        }
    }

    async function getPostById() {
                const response = await axios.get(`${API_BASE_URL}/posts/${postId}`);
                // รองรับทั้งรูปแบบ response.data.post และ response.data.posts
                const post = response.data.post ?? response.data.posts ?? response.data.data ?? response.data;

                setImageUrl(post?.imageUrl ?? post?.image ?? "");
                setCategory(post?.category ?? "");
                setAuthor(post?.author ?? "");
                setTitle(post?.title ?? "");
                setDescription(post?.description ?? "");
                setContent(post?.content ?? "");
    };    

  useEffect(() => {
    getCategories();
    getPostById()
    }, [postId]);

  useEffect(() => {
    if (!selectedImageFile) return;
    const objectUrl = URL.createObjectURL(selectedImageFile);
    setPreviewImageUrl(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedImageFile]);

  function handleImageSelect(e) {
    const file = e.target.files?.[0];
    if (file) setSelectedImageFile(file);
  }

  async function savePost(statusId) {
    const matchedCategory = categories.find((cat) => cat.name === category);
    if (!matchedCategory?.id) {
        alert("Please select a category");
        return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("content", content);
    formData.append("category_id", String(matchedCategory.id));
    formData.append("status_id", String(statusId));
    if (selectedImageFile) {
        formData.append("imageFile", selectedImageFile);
    } else {
        formData.append("image", imageUrl);
    }

    try {
        setIsSaving(true);
        await axios.put(`${API_BASE_URL}/posts/${postId}`, formData);
        navigate("/admin/article/mgt");
    } catch (error) {
        alert(error.response?.data?.message || "Failed to save article");
    } finally {
        setIsSaving(false);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    savePost(2);
  }

  function handleSaveDraft() {
    savePost(1);
  }
    
    return(
        <>

<input
    ref={fileInputRef}
    type="file"
    accept="image/*"
    className="hidden"
    onChange={handleImageSelect}
/>

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
        <form className="product-form" onSubmit={handleSubmit}>
        <div className="h-20 bg-white border-b px-10 flex items-center justify-between">

            <h2 className="text-2xl font-semibold text-gray-800">
                Create article
            </h2>

            <div className="flex gap-4">

                <button
                    type="button"
                    onClick={handleSaveDraft}
                    disabled={isSaving}
                    className="px-6 py-2 rounded-full border border-gray-300 text-sm hover:bg-gray-50 disabled:opacity-50">
                    Save as draft
                </button>

                <button
                    type="submit"
                    disabled={isSaving}
                    className="px-6 py-2 rounded-full bg-[#26221F] text-white text-sm hover:bg-black disabled:opacity-50">
                    Save
                </button>

            </div>

        </div>

        {/* ข้อมูลเริ่มตรงนี้ */}
        {/* Form */}
        <div className="max-w-5xl px-10 py-8 bg-white">

            {/* Thumbnail */}
            <label className="block text-xs text-gray-500 mb-3">
                Thumbnail image
            </label>

            <div className="flex items-center gap-6 mb-6">

                <div
                    className="w-52 h-36 bg-[#FBFBFA] border rounded overflow-hidden flex items-center justify-center">
                    {previewImageUrl || imageUrl ? (
                        <img className="block w-full h-full object-cover" src={previewImageUrl || imageUrl} alt={title} />
                    ) : (
                        <i data-lucide="image" className="w-7 h-7 text-gray-400"></i>
                    )}

                </div>

                <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
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
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full border rounded px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-orange-200">
                    <option value="" disabled>
                        Select category
                    </option>
                    {categories.map((cat) => (
                        <option key={cat.id} value={cat.name}>
                            {cat.name}
                        </option>
                    ))}
                </select>

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

                <textarea
                    rows={4}
                    value={description}
                    onChange={(e) => { setDescription(e.target.value) }}
                    placeholder="Introduction"
                    className="w-full border rounded px-3 py-2 text-sm resize-none outline-none focus:ring-2 focus:ring-orange-200" />

            </div>

            {/* Content */}
            <div>

                <label className="block text-xs text-gray-500 mb-2">
                    Content
                </label>

                <textarea
                    rows={12}
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

export default ArticleEditPage;