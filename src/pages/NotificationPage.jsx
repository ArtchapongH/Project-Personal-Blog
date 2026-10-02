import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import notebookLightIcon from "../icons/notebook_light.png";
import fileLightIcon from "../icons/File_light.png";
import userDuotoneIcon from "../icons/User_duotone.png";
import bellLightIcon from "../icons/Bell_light.png";
import refreshLightIcon from "../icons/Refresh_light.png";
import outLightIcon from "../icons/Out_light.png";
import signOutSquareLightIcon from "../icons/Sign_out_squre_light.png";

import { useAuth } from "../contexts/authenticaition.jsx";

const API_BASE_URL = import.meta.env.DEV
    ? "/api"
    : import.meta.env.VITE_API_BASE_URL || "";

function formatTimeAgo(value, currentTimestamp) {
    const eventTimestamp = new Date(value).getTime();
    if (Number.isNaN(eventTimestamp)) return "";

    const elapsedSeconds = Math.max(0, Math.floor((currentTimestamp - eventTimestamp) / 1000));
    const units = [
        [31536000, "year"],
        [2592000, "month"],
        [86400, "day"],
        [3600, "hour"],
        [60, "minute"],
        [1, "second"],
    ];
    const [unitLength, unitName] = units.find(([length]) => elapsedSeconds >= length) ?? units[units.length - 1];
    const amount = Math.floor(elapsedSeconds / unitLength);

    return `${amount} ${unitName}${amount === 1 ? "" : "s"} ago`;
}

function getInitials(name = "") {
    return name
        .trim()
        .split(/\s+/)
        .slice(0, 2)
        .map((part) => part[0])
        .join("")
        .toUpperCase();
}

function NotificationPage() {
    const navigate = useNavigate();
    const { logout } = useAuth();
    const [notifications, setNotifications] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [loadError, setLoadError] = useState("");
    const [currentTimestamp, setCurrentTimestamp] = useState(0);

    useEffect(() => {
        let isMounted = true;
        const fetchedAtTimestamp = Date.now();

        Promise.all([
            axios.get(`${API_BASE_URL}/comments`),
            axios.get(`${API_BASE_URL}/likes`),
        ])
            .then(([commentsResponse, likesResponse]) => {
                if (!isMounted) return;

                const comments = (commentsResponse.data.comments ?? []).map((comment) => ({
                    ...comment,
                    type: "comment",
                    timestamp: comment.created_at,
                }));
                const likes = (likesResponse.data.likes ?? []).map((like) => ({
                    ...like,
                    type: "like",
                    timestamp: like.liked_at,
                }));

                setNotifications([...comments, ...likes].sort(
                    (first, second) => new Date(second.timestamp) - new Date(first.timestamp)
                ));
                setCurrentTimestamp(fetchedAtTimestamp);
                setIsLoading(false);
            })
            .catch(() => {
                if (isMounted) {
                    setLoadError("Could not load notifications.");
                    setIsLoading(false);
                }
            });

        return () => {
            isMounted = false;
        };
    }, []);

    return(
        <>

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
                            className="flex items-center gap-3 px-8 py-4 text-gray-500 hover:bg-gray-100 text-sm w-full text-left"
                        >
                            <img src={userDuotoneIcon} alt="Profile icon" className="w-4 h-4 object-contain" />
                            Profile
                        </button>
            
                        <button 
                            onClick={() => navigate("/admin/notification")}
                            className="flex items-center gap-3 px-8 py-4 bg-[#C5DDFC] text-gray-900 text-sm font-medium w-full text-left"
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
                    {isLoading && <p className="py-6 text-sm text-gray-500">Loading notifications...</p>}
                    {loadError && <p className="py-6 text-sm text-red-600">{loadError}</p>}
                    {!isLoading && !loadError && notifications.length === 0 && (
                        <p className="py-6 text-sm text-gray-500">No notifications yet.</p>
                    )}
                    {notifications.map((notification) => (
                        <div key={`${notification.type}-${notification.post_id}-${notification.timestamp}-${notification.name}`} className="flex items-start justify-between gap-5 border-b border-gray-200 py-6">
                            <div className="flex min-w-0 gap-4">
                                <div
                                    aria-label={`${notification.name} avatar`}
                                    className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-[#d9e7f7] text-xs font-semibold text-[#345779]"
                                >
                                    {notification.profile_pic ? (
                                        <img
                                            src={notification.profile_pic}
                                            alt={`${notification.name} avatar`}
                                            className="h-10 w-10 rounded-full object-cover"
                                        />
                                    ) : getInitials(notification.name)}
                                </div>
                                <div className="min-w-0">
                                    <p className="text-sm leading-relaxed text-gray-700">
                                        <span className="font-semibold">{notification.name}</span>
                                        {notification.type === "comment"
                                            ? " commented on your article: "
                                            : " liked your article: "}
                                        <span className="text-gray-600">{notification.title}</span>
                                    </p>
                                    {notification.type === "comment" && (
                                        <p className="mt-1 text-sm italic text-gray-600">&quot;{notification.comment_text}&quot;</p>
                                    )}
                                    <p className="mt-2 text-xs text-[#8BBBF9]">
                                        {formatTimeAgo(notification.timestamp, currentTimestamp)}
                                    </p>
                                </div>
                            </div>
                            <Link
                                to={`/post/${notification.post_id}`}
                                className="flex-none text-sm font-semibold text-gray-700 hover:text-black"
                            >
                                View
                            </Link>
                        </div>
                    ))}
                </div>

            </main>

        </div>

        </div>
        </>
    )
};

export default NotificationPage;