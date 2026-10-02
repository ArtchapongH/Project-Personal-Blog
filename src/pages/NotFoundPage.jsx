
import { Link } from "react-router-dom";

import NavBar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";

function NotFoundPage() {
    return (
        <>
        <NavBar />
        <div className="bg-white flex min-h-screen flex-col items-center justify-center p-4 font-sans select-none">

            <div className="flex flex-col items-center text-center">
                {/* Exclamation Icon */}
                <div className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-black mb-6">
                    <span className="text-4xl font-black text-black">!</span>
                </div>

                {/* Heading Text */}
                <h1 className="text-2xl font-bold text-black mb-6 tracking-wide">
                    Page Not Found
                </h1>

                {/* Action Button */}
                <Link to="/" className="inline-block bg-black text-white text-sm font-medium px-8 py-3 rounded-full hover:bg-gray-800 transition-colors duration-200">
                    Go To Homepage
                </Link>
            </div>

        </div>
        <Footer />
        </>
    )

};

export default NotFoundPage;
