import hamburgerIcon from '../icons/hamburger_icon.png'

function NavBar(){
  return(
     <header>  
          <nav
              className="bg-white px-6 py-4 flex items-center justify-between"
          >
              {/* Logo */}
              <div className="text-gray-700 font-semibold text-lg">
                  hh.
              </div>


              {/* Actions */}
              {/* Hamburger Menu */}
               <button className="flex items-center justify-center w-12 h-12 md:hidden">
                    <img
                    src={hamburgerIcon}
                    alt="hamburger menu"
                    />
                </button>  

            {/* Login & Sign Up Buttons */}
              <div className="hidden md:flex items-center gap-3">
                  <button
                      className="px-4 py-2 text-sm border border-gray-300 rounded-full hover:bg-gray-100 transition"
                  >
                      Log In
                  </button>

                  <button
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