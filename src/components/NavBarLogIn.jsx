import hamburgerIcon from '../icons/hamburger_icon.png'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import MemberPopUpMenu from './MemberPopUpMenu';
import MemberPopUpNotification from './MemberPopUpNotification';
import MemberPopUpMenuDesktop from './MemberPopUpMenuDesktop';

import bellLightIcon from "../icons/Bell_light.png"

function NavBarLogIn() {

  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktopMenuOpen, setIsDesktopMenuOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

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
          <button 
            onClick={() => setIsNotificationOpen(!isNotificationOpen)}
            className="relative p-2 hover:bg-gray-100 rounded-full transition border-2 border-gray-300">
             <img src={bellLightIcon} alt="notification icon"  className="w-4 h-4 object-contain" />
            {/* Red notification dot */}
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          {/* Notification Popup */}
          {isNotificationOpen && (
            <>
              {/* Backdrop/Overlay */}
              <div 
                className="fixed inset-0 z-40"
                onClick={() => setIsNotificationOpen(false)}
              />
              
              {/* Notification Menu Positioned */}
              <div className="absolute top-full right-0 mt-2 w-96 max-h-96 z-50 bg-white rounded-2xl shadow-xl overflow-hidden">
                <MemberPopUpNotification />
              </div>
            </>
          )}

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
                <MemberPopUpMenuDesktop />
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
          <div className="absolute top-full left-0 right-0 z-50 md:hidden p-4 bg-white">
            <MemberPopUpMenu />
          </div>
        </>
      )}
    </header>
  )
};
export default NavBarLogIn;