import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useEffect, useRef, useState } from "react"
import axios from "axios"

import notebookLightIcon from "../icons/notebook_light.png";
import fileLightIcon from "../icons/File_light.png";
import userDuotoneIcon from "../icons/User_duotone.png";
import bellLightIcon from "../icons/Bell_light.png";
import refreshLightIcon from "../icons/Refresh_light.png";
import outLightIcon from "../icons/Out_light.png";
import signOutSquareLightIcon from "../icons/Sign_out_squre_light.png";

import { useAuth } from "../contexts/authenticaition.jsx";


function ProfilePage(){
    const navigate = useNavigate();
    const {logout} = useAuth();

    const API_BASE_URL = import.meta.env.DEV
            ? "/api"
            : import.meta.env.VITE_API_BASE_URL || "";
    const { state } = useAuth();
    const userIdFromContext = state?.user?.id ?? state?.user?.userId ?? state?.user?._id ?? state?.user?.sub;
    const userIdFromToken = (() => {
        try {
            const token = localStorage.getItem("token");
            if (!token) return "";

            const payload = token.split(".")[1];
            if (!payload) return "";

            const normalized = payload.replace(/-/g, "+").replace(/_/g, "/");
            const decoded = JSON.parse(atob(normalized));
            return decoded?.id ?? decoded?.userId ?? decoded?._id ?? decoded?.sub ?? "";
        } catch {
            return "";
        }
    })();
    const userId = userIdFromContext || userIdFromToken || "";
    const profileEndpoint = `${API_BASE_URL}/profiles/${userId}`;

    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [profileImage, setProfileImage] = useState(null);
    const [biography, setBiography] = useState("");

    const [selectedImageFile, setSelectedImageFile] = useState(null);
    const [previewImageUrl, setPreviewImageUrl] = useState("");
    const [isSaving, setIsSaving] = useState(false);

    async function getUserProfileById(options = {}) {
        const { suppressAuthRedirect = false } = options;
        if (!userId) return;

        const config = {
            headers: {
                ...(suppressAuthRedirect ? { "X-Skip-Auth-Redirect": "true" } : {}),
            },
        };

        try {
            const response = await axios.get(profileEndpoint, config);

            const profile = response?.data?.data ?? response?.data ?? {};
            const {
                name = "",
                username = "",
                email = "",
            } = profile;
            const biographyFromApi =
                profile?.biography ??
                profile?.bio ??
                profile?.about ??
                "";
            const profileImageFromApi =
                profile?.profileImage ??
                profile?.profile_pic ??
                profile?.profilePic ??
                profile?.profile_picture ??
                null;

            setName(name || "");
            setUsername(username || "");
            setEmail(email || "");
            setBiography(biographyFromApi || "");

            if (typeof profileImageFromApi === "string" && profileImageFromApi.trim()) {
                setProfileImage(profileImageFromApi);
            } else {
                setProfileImage(null);
            }

            // Clear temporary client-side preview after loading server profile data.
            setPreviewImageUrl("");
            setSelectedImageFile(null);
        } catch (error) {
            console.error("Failed to load profile", error);
            toast.error("Failed to load profile", {
                description: error.response?.data?.message || error.message || "Please try again",
            });
        }
    }

    const fileInputRef = useRef(null);

    useEffect(() => {
        if (!selectedImageFile) {
            return;
        }

        const objectUrl = URL.createObjectURL(selectedImageFile);
        setPreviewImageUrl(objectUrl);

        return () => {
            URL.revokeObjectURL(objectUrl);
        };
    }, [selectedImageFile]);

    useEffect(() => {
        if (!userId) return;
        getUserProfileById();
    }, [userId]);

    const handleOpenFilePicker = () => {
        fileInputRef.current?.click();
    };

    const handleImageSelect = (event) => {
        const file = event.target.files?.[0];
        if (!file) return;

        setSelectedImageFile(file);
    };

    const handleSave = async () => {
        try {
            setIsSaving(true);

            if (!userId) {
                throw new Error("User id not found");
            }

            const formData = new FormData();
            formData.append("name", name);
            formData.append("username", username);
            formData.append("email", email);
            formData.append("biography", biography);

            if (selectedImageFile) {
                formData.append("imageFile", selectedImageFile);
            }

            await axios.put(profileEndpoint, formData, {
                headers: {
                    "X-Skip-Auth-Redirect": "true",
                },
            });

            await getUserProfileById({ suppressAuthRedirect: true });

            toast.success("Saved profile", {
                description: "Your profile has been successfully updated",
                style: {
                    background: "#1878F3",
                    borderColor: "#1878F3",
                    color: "#FFFFFF"
                },
            });
        } catch (error) {
            toast.error("Failed to save profile", {
                description: error.response?.data?.message || error.message || "Please try again",
            });
        } finally {
            setIsSaving(false);
        }
    };

    const formAvatarSrc = previewImageUrl || profileImage || userDuotoneIcon;
    const formAvatarClassName = (previewImageUrl || profileImage)
        ? "w-full h-full object-cover"
        : "w-4 h-4 object-contain";

    return(
        <>
        <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageSelect}
        />

        <div className="bg-white">

        <div className="flex h-screen">

            {/* Sidebar */}
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
                            className="flex items-center gap-3 px-8 py-4 text-gray-500 hover:bg-gray-100 text-sm w-full text-left"
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
                            className="flex items-center gap-3 px-8 py-4 bg-[#C5DDFC] text-gray-900 text-sm font-medium w-full text-left"
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

            {/* Main Content */}
            <main className="flex-1 bg-white flex flex-col overflow-hidden">

                {/* Header */}
                <header className="flex items-center justify-between px-8 py-4 border-b border-gray-200 shrink-0">

                    <h2 className="text-2xl font-semibold text-gray-800">
                        Profile
                    </h2>

                    <button
                        type="button"
                        onClick={handleSave}
                        disabled={isSaving}
                        className="bg-[#2B2622] text-white px-8 py-2 rounded-full text-sm hover:bg-black transition">
                        {isSaving ? "Saving..." : "Save"}
                    </button>

                </header>

                {/* Content - Scrollable if needed */}
                <div className="flex-1 overflow-y-auto px-8 py-6">

                    {/* Avatar */}
                    <div className="flex items-center gap-6 mb-6">

                        <div className="w-20 h-20 rounded-full border border-gray-200 bg-gray-50 flex items-center justify-center overflow-hidden">
                            <img
                                src={formAvatarSrc}
                                alt="Profile"
                                className={formAvatarClassName}
                            />
                        </div>

                        <button
                            type="button"
                            onClick={handleOpenFilePicker}
                            className="border border-gray-400 rounded-full px-6 py-2 text-sm hover:bg-gray-100 transition">

                            Upload profile picture

                        </button>

                    </div>

                    <div className="border-t border-gray-200 w-125 mb-6"></div>

                    {/* Form */}
                    <div className="space-y-4 max-w-xl">

                        {/* Name */}
                        <div>

                            <label className="block text-sm text-gray-600 mb-1.5">
                                Name
                            </label>

                            <input
                                type="text"
                                value={name}
                                onChange={(event) => setName(event.target.value)}
                                className="w-full h-11 px-4 rounded-md border border-gray-300 focus:ring-2 focus:ring-gray-400 focus:outline-none"/>

                        </div>

                        {/* Username */}
                        <div>

                            <label className="block text-sm text-gray-600 mb-1.5">
                                Username
                            </label>

                            <input
                                type="text"
                                value={username}
                                onChange={(event) => setUsername(event.target.value)}
                                className="w-full h-11 px-4 rounded-md border border-gray-300 focus:ring-2 focus:ring-gray-400 focus:outline-none"/>

                        </div>

                        {/* Email */}
                        <div>

                            <label className="block text-sm text-gray-600 mb-1.5">
                                Email
                            </label>

                            <input
                                type="email"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                className="w-full h-11 px-4 rounded-md border border-gray-300 focus:ring-2 focus:ring-gray-400 focus:outline-none"/>

                        </div>

                        {/* Bio */}
                        <div>

                            <label className="block text-sm text-gray-600 mb-1.5">
                                Bio (max 120 letters)
                            </label>

                            <textarea
                                rows="4"
                                maxLength={120}
                                value={biography}
                                onChange={(event) => setBiography(event.target.value)}
                                className="w-full px-4 py-3 rounded-md border border-gray-300 resize-none focus:ring-2 focus:ring-gray-400 focus:outline-none">
                            </textarea>

                            <p className="mt-1 text-xs text-gray-500 text-right">
                                {biography.length}/120
                            </p>

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