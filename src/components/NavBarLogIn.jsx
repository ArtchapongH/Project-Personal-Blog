import hamburgerIcon from '../icons/hamburger_icon.png'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import MemberPopUpMenu from './MemberPopUpMenu';

function NavBarLogIn() {

  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktopMenuOpen, setIsDesktopMenuOpen] = useState(false);

  function handleProfileClick(){
    navigate("/admin/profile");
  };

  function handleResetClick(){
    navigate("/admin/reset");
  };

  return (
    <header className="relative">
      <nav
        className="bg-white px-6 py-4 flex items-center justify-between"
      >
        {/* Logo */}
        <div className="text-gray-700 font-semibold text-lg">
          hh.
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition md:hidden"
        >
          <svg 
            className="w-6 h-6 text-gray-700" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>

        {/* DESKTOP VIEW */}
        <div className="hidden md:flex items-center gap-4 relative">
          {/* Notification Icon */}
          <button className="relative p-2 hover:bg-gray-100 rounded-full transition">
            <svg 
              className="w-5 h-5 text-gray-700" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" 
              />
            </svg>
            {/* Red notification dot */}
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          {/* User Profile - Clickable */}
          <button 
            onClick={() => setIsDesktopMenuOpen(!isDesktopMenuOpen)}
            className="flex items-center gap-2 hover:bg-gray-100 px-3 py-2 rounded-lg transition"
          >
            <img 
              src="https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=150&auto=format&fit=crop&q=60" 
              alt="User profile" 
              className="w-8 h-8 rounded-full object-cover"
            />
            <span className="text-sm font-medium text-gray-700">Moodeng ja</span>
            {/* Dropdown arrow */}
            <svg 
              className={`w-4 h-4 text-gray-500 transition-transform ${isDesktopMenuOpen ? 'rotate-180' : ''}`}
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Desktop Dropdown Menu */}
          {isDesktopMenuOpen && (
            <>
              {/* Backdrop/Overlay */}
              <div 
                className="fixed inset-0 z-40"
                onClick={() => setIsDesktopMenuOpen(false)}
              />
              
              {/* Dropdown Menu Positioned */}
              <div className="absolute top-full right-0 mt-2 w-80 z-50">
                <MemberPopUpMenu />
              </div>
            </>
          )}
        </div>
      </nav>

      {/* Mobile Dropdown Menu - Positioned under navbar */}
      {isOpen && (
        <>
          {/* Backdrop/Overlay */}
          <div 
            className="fixed inset-0 z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown Menu */}
          <div className="absolute top-full left-0 right-0 bg-white z-50 md:hidden">
            {/* User Info Section */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <img 
                  src="https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=150&auto=format&fit=crop&q=60" 
                  alt="User profile" 
                  className="w-10 h-10 rounded-full object-cover"
                />
                <span className="text-sm font-medium text-gray-800">Moodeng ja</span>
              </div>
              
              {/* Notification Icon with Circle */}
              <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-50 transition">
                <svg 
                  className="w-5 h-5 text-gray-600" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" 
                  />
                </svg>
              </button>
            </div>

            {/* Menu Items */}
            <div className="py-2">
              {/* Profile */}
              <button 
                onClick={() => {
                  navigate("/membership");
                  setIsOpen(false);
                }}
                className="flex items-center gap-3 px-6 py-3 hover:bg-gray-50 transition w-full text-left"
              >
                <svg 
                  className="w-5 h-5 text-gray-600" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" 
                  />
                </svg>
                <span className="text-sm text-gray-700">Profile</span>
              </button>

              {/* Reset password */}
              <button 
                onClick={() => {
                  navigate("/reset");
                  setIsOpen(false);
                }}
                className="flex items-center gap-3 px-6 py-3 hover:bg-gray-50 transition w-full text-left"
              >
                <svg 
                  className="w-5 h-5 text-gray-600" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-3.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z" 
                  />
                </svg>
                <span className="text-sm text-gray-700">Reset password</span>
              </button>

              {/* Log out */}
              <button 
                onClick={() => {
                  // Add logout logic here
                  setIsOpen(false);
                }}
                className="flex items-center gap-3 px-6 py-3 hover:bg-gray-50 transition w-full text-left"
              >
                <svg 
                  className="w-5 h-5 text-gray-600" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" 
                  />
                </svg>
                <span className="text-sm text-gray-700">Log out</span>
              </button>
            </div>
          </div>
        </>
      )}
    </header>
  )
};
export default NavBarLogIn;