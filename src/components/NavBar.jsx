import hamburgerIcon from '../icons/hamburger_icon.png'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'
import { useNavigate } from 'react-router-dom';

function NavBar() {

  const navigate = useNavigate();
  function handleSignUpClick(){
    navigate("/signup");
  };

  function handleLogInClick(){
    navigate("/login");
  };

  return (
    <header>
      <nav
        className="bg-white px-6 py-4 flex items-center justify-between"
      >
        {/* Logo */}
        <div className="text-gray-700 font-semibold text-lg">
          hh.
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild className="sm:hidden focus:outline-none">
            <button className="flex items-center justify-center w-12 h-12 rounded-full hover:bg-gray-100 transition md:hidden">
              <img
                src={hamburgerIcon}
                alt="Open menu"
              />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" sideOffset={-4} className="sm:hidden w-screen rounded-none mt-2 flex flex-col gap-6 py-10 px-6">
            <div className="px-6 pb-6 flex flex-col gap-3 md:hidden">
              <button onClick={handleLogInClick} className="w-full rounded-full border border-black/10 py-4 text-base font-medium text-black">
                Log in
              </button>
              <button onClick={handleSignUpClick} className="w-full rounded-full bg-black py-4 text-base font-medium text-white">
                Sign up
              </button>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>


        {/* DESKTOP VIEW */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={handleLogInClick}
            className="px-4 py-2 text-sm border border-black rounded-full hover:bg-gray-100 transition"
          >
            Log In
          </button>

          <button
            onClick={handleSignUpClick}
            className="px-5 py-2 text-sm bg-black text-white rounded-full hover:bg-gray-800 transition"
          >
            Sign Up
          </button>
        </div>
      </nav>


    </header>
  )
};
export default NavBar;