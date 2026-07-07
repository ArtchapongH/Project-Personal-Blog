function SignUpPage(){
    return(
        <>
        
        <div classNameName="bg-white min-h-screen flex items-center justify-center px-4 py-8">

            <div classNameName="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl">
                <div classNameName="bg-stone-100 rounded-2xl shadow-sm px-6 py-8 sm:px-8 sm:py-10">

                    {/* Heading */}
                    <h1 classNameName="text-4xl sm:text-5xl font-bold text-center text-gray-800 mb-8">
                        Sign up
                    </h1>

                    {/* Form */}
                    <form classNameName="space-y-4">

                        {/* Name */}
                        <div>
                            <label classNameName="block text-sm text-gray-600 mb-1">
                                Name
                            </label>
                            <input
                                type="text"
                                value="Moodeng ja"
                                classNameName="w-full rounded-md border border-gray-300 px-4 py-2.5 bg-white focus:outline-none focus:ring-2 focus:ring-black"
                            />
                        </div>

                        {/* Username */}
                        <div>
                            <label classNameName="block text-sm text-gray-600 mb-1">
                                Username
                            </label>
                            <input
                                type="text"
                                value="moodeng.cute"
                                classNameName="w-full rounded-md border border-gray-300 px-4 py-2.5 bg-white focus:outline-none focus:ring-2 focus:ring-black"
                            />
                        </div>

                        {/* Email -> it was shown in error state (not normal state)*/}
                        <div>
                            <label classNameName="block text-sm text-gray-600 mb-1">
                                Email
                            </label>

                            <input
                                type="email"
                                value="moodeng.cute@gmail.com"
                                classNameName="w-full rounded-md border border-red-400 text-red-500 px-4 py-2.5 bg-white focus:outline-none focus:ring-2 focus:ring-red-400"
                            />
                            {/* this is an error message under email input box */}
                            <p classNameName="mt-1 text-xs text-red-500">
                                Email is already taken, Please try another email.
                            </p>
                        </div>

                        {/* Password */}
                        <div>
                            <label classNameName="block text-sm text-gray-600 mb-1">
                                Password
                            </label>

                            <input
                                type="password"
                                value="password"
                                classNameName="w-full rounded-md border border-gray-300 px-4 py-2.5 bg-white focus:outline-none focus:ring-2 focus:ring-black"
                            />
                        </div>

                        {/* Button */}
                        <div classNameName="pt-4 flex justify-center">
                            <button
                                type="submit"
                                classNameName="bg-stone-900 text-white rounded-full px-10 py-2.5 hover:bg-black transition font-medium"
                            >
                                Sign up
                            </button>
                        </div>

                    </form>

                    {/* Login */}
                    <div classNameName="text-center mt-8 text-gray-600 text-sm">
                        Already have an account?
                        <a href="#" classNameName="font-semibold text-black underline ml-1">
                            Log in
                        </a>
                    </div>

                </div>
           

        
        {/* Sign Up - Registration Success */}
        
                {/* ไม่แน่ใจว่า div นี้ควรอยู่ภายใต้ div ไหน + ลองกลับไปดูไฟล์ quick form น่าจะใช้ concept เดียวกัน */}
                <div
                    className="w-[90%] max-w-xs sm:max-w-sm md:max-w-md
                        bg-[#F6F4F3]
                        rounded-2xl
                        shadow-sm
                        px-6 py-10
                        flex flex-col items-center">

                    {/* Success Icon */}
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#18B86A] flex items-center justify-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-8 h-8 md:w-10 md:h-10 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="3">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M5 13l4 4L19 7"/>
                        </svg>
                    </div>

                    {/* Title */}
                    <h2 className="mt-8 text-xl md:text-2xl font-semibold text-[#2B2521] text-center">
                        Registration success
                    </h2>

                    {/* Button */}
                    <button
                        className="mt-10
                            w-full max-w-[180px]
                            bg-[#2E2824]
                            text-white
                            rounded-full
                            py-3
                            text-sm md:text-base
                            font-medium
                            transition
                            duration-200
                            hover:bg-black
                            active:scale-95">
                        Continue
                    </button>

                </div>
        
            </div>

        </div>


        
        </>
    )
};

export default SignUpPage;