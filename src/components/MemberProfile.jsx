import { useEffect, useRef, useState } from "react"
import axios from "axios"
import { toast } from "sonner"
import { Link } from "react-router-dom"
import { useAuth } from "../contexts/authenticaition.jsx"
import userDuotoneIcon from "../icons/User_duotone.png"
import refreshLightIcon from "../icons/Refresh_light.png"

function MemberProfile(){
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
    const [password, setPassword] = useState("");
    const [profileImage, setProfileImage] = useState(null);
    
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
            const profileImageFromApi =
                profile?.profileImage ??
                profile?.profile_pic ??
                profile?.profilePic ??
                profile?.profile_picture ??
                null;

            setName(name || "");
            setUsername(username || "");
            setEmail(email || "");

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

    const savedAvatarSrc = profileImage || userDuotoneIcon;
    const savedAvatarClassName = profileImage ? "w-full h-full object-cover" : "w-4 h-4 object-contain";
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
        <div className="bg-white min-h-screen flex flex-col font-sans text-stone-800 antialiased">

            {/* Mobile View - Only shown on mobile */}
            <div className="md:hidden">
                {/* Mobile Header */}
                <div className="bg-white border-b border-stone-200">
                    {/* Top Navigation */}
                    <div className="max-w-md mx-auto px-4 flex items-center h-12 gap-6 text-sm text-stone-500 font-medium">
                            {/* Profile */}
                            <Link to="/membership">
                            <button className="flex items-center gap-2 px-6 py-4 text-sm font-medium border-b-2 border-black">
                                 <img src={userDuotoneIcon} alt="Profile icon"  className="w-4 h-4 object-contain" />
                                Profile
                            </button>
                            </Link>

                            {/* Reset */}
                            <Link to="/reset">
                            <button className="flex items-center gap-2 px-6 py-4 text-sm text-gray-400 hover:text-black transition">
                                <img src={refreshLightIcon} alt="Reset icon"  className="w-4 h-4 object-contain" />
                                Reset password
                            </button>
                            </Link>
                    </div>

                    <div className="px-6 py-5 flex items-center justify-between border-b border-stone-200/60">
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 rounded-full overflow-hidden border border-stone-200 bg-stone-100 shrink-0 flex items-center justify-center">
                                <img src={savedAvatarSrc} alt="Profile icon" className={savedAvatarClassName} />
                            </div>
                            <span className="font-semibold text-stone-700 tracking-wide truncate max-w-30">{username}</span>
                        </div>

                        <div className="h-6 w-px bg-stone-300 mx-2"></div>

                        <h1 className="text-xl font-bold text-[#231f20] flex-1 text-left pl-2">
                            Profile
                        </h1>
                    </div>

                    {/* Form */}
                    <form className="p-6 space-y-5 bg-white" onSubmit={(e) => e.preventDefault()}>
                        <div className="flex items-center gap-4">
                            <div className="w-20 h-20 rounded-full border border-stone-200 bg-stone-100 flex items-center justify-center shrink-0 overflow-hidden">
                                <img src={formAvatarSrc} alt="Profile icon" className={formAvatarClassName} />
                            </div>
                            <button
                                type="button"
                                onClick={handleOpenFilePicker}
                                className="px-6 py-2.5 rounded-full border border-stone-400 bg-white hover:bg-stone-100 transition font-medium text-sm"
                            >
                                Upload profile picture
                            </button>
                        </div>

                        <div>
                            <label className="block mb-2 text-stone-500 font-medium">
                                Name
                            </label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full px-4 py-3 rounded-lg border border-stone-300 bg-white text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-500 focus:border-stone-500 transition-shadow shadow-sm"
                            />
                        </div>

                        <div>
                            <label className="block mb-2 text-stone-500 font-medium">
                                Username
                            </label>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full px-4 py-3 rounded-lg border border-stone-300 bg-white text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-500 focus:border-stone-500 transition-shadow shadow-sm"
                            />
                        </div>

                        <div>
                            <label className="block mb-2 text-stone-400 font-medium">
                                Email
                            </label>
                            <input
                                disabled
                                value={email}
                                className="w-full px-4 py-3 rounded-lg bg-stone-100 text-stone-400 cursor-not-allowed"
                            />
                        </div>

                        <button
                            onClick={handleSave}
                            type="button"
                            disabled={isSaving}
                            className="px-6 py-3 bg-[#231f1d] hover:bg-stone-800 text-stone-100 font-medium rounded-full shadow-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-stone-900">
                            {isSaving ? "Saving..." : "Save"}
                        </button>
                    </form>
                </div>
            </div>

            {/* Desktop View - Only shown on desktop */}
            <div className="hidden md:block md:max-w-4xl md:mx-auto md:mt-8 md:w-full">
                {/* Top Header with Profile and Title */}
                <div className="bg-white rounded-t-xl px-6 py-4 flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden border border-stone-200 bg-stone-100 shrink-0 flex items-center justify-center">
                        <img src={savedAvatarSrc} alt="Profile icon"  className={savedAvatarClassName} />
                    </div>
                    <span className="font-semibold text-stone-700 text-lg">{username}</span>
                    <span className="text-stone-400 mx-2">|</span>
                    <h1 className="text-lg font-semibold text-stone-900">Profile</h1>
                </div>

                {/* Main Content Area - Sidebar + Form */}
                <div className="flex rounded-b-xl overflow-hidden">
                    {/* Left Sidebar Navigation */}
                    <aside className="w-64 bg-white p-6">
                        <nav className="space-y-1">
                            <a 
                                href="/membership" 
                                className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-stone-900 bg-stone-100 rounded-lg"
                            >
                                <img src={userDuotoneIcon} alt="Profile icon"  className="w-4 h-4 object-contain" />
                                Profile
                            </a>
                            <a 
                                href="/reset" 
                                className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-stone-600 rounded-lg hover:bg-stone-100 transition-colors"
                            >
                                <img src={refreshLightIcon} alt="Reset icon"  className="w-4 h-4 object-contain" />
                                Reset password
                            </a>
                        </nav>
                    </aside>

                    {/* Right Form Area */}
                    <div className="flex-1 rounded-xl bg-stone-50 p-8">
                        <form className="space-y-5 max-w-lg" onSubmit={(e) => e.preventDefault()}>
                            {/* Avatar Section */}
                            <div className="flex items-center gap-4">
                                <div className="w-20 h-20 rounded-full border border-stone-200 bg-stone-100 flex items-center justify-center shrink-0 overflow-hidden">
                                    <img src={formAvatarSrc} alt="Profile icon"  className={formAvatarClassName} />
                                </div>
                                <button 
                                    type="button"
                                    onClick={handleOpenFilePicker}
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
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
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
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
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
                                    value={email}
                                    className="w-full px-4 py-3 rounded-lg bg-stone-100 text-stone-400 cursor-not-allowed"
                                />
                            </div>

                            {/* Save Button */}
                            <div className="pt-2">
                                <button 
                                    type="button"
                                    onClick={handleSave}
                                    disabled={isSaving}
                                    className="px-6 py-3 bg-[#231f1d] hover:bg-stone-800 text-stone-100 font-medium rounded-full shadow-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-stone-900"
                                >
                                    {isSaving ? "Saving..." : "Save"}
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