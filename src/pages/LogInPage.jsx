function LogInPage(){
    return(
        <>
        <div className="bg-white min-h-screen flex items-center justify-center p-6">

            {/* Login Card */}
            <div
                className="w-full
                    max-w-sm
                    md:max-w-md
                    lg:max-w-lg
                    bg-[#F5F3F1]
                    rounded-2xl
                    shadow-sm
                    px-6
                    md:px-10
                    py-8
                    md:py-10">

                {/* Title */}
                <h1 className="text-center text-4xl md:text-5xl font-bold text-[#2B2521] mb-8">
                    Log in
                </h1>

                {/* Form */}
                <form className="space-y-5">

                    {/* Email */}
                    <div>
                        <label
                            for="email"
                            className="block text-sm md:text-base text-gray-600 mb-2">
                            Email
                        </label>

                        <input
                            id="email"
                            type="email"
                            value="moodeng.cute@gmail.com"
                            className="w-full h-12 md:h-14 rounded-lg border border-gray-300 bg-white px-4 text-sm md:text-base outline-none focus:ring-2 focus:ring-gray-400 transition"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label
                            for="password"
                            className="block text-sm md:text-base text-gray-600 mb-2">
                            Password
                        </label>

                        <input
                            id="password"
                            type="password"
                            value="password"
                            className="w-full h-12 md:h-14 rounded-lg border border-gray-300 bg-white px-4 text-sm md:text-base outline-none focus:ring-2 focus:ring-gray-400 transition"
                        />
                    </div>

                    {/* Button */}
                    <div className="flex justify-center pt-3">
                        <button
                            type="submit"
                            className="bg-[#2D2723]
                                text-white
                                rounded-full
                                w-40
                                md:w-48
                                h-12
                                md:h-14
                                font-medium
                                text-sm
                                md:text-base
                                hover:bg-black
                                active:scale-95
                                transition-all duration-200">

                            Log up
                        </button>
                    </div>

                </form>

                {/* Footer */}
                <div className="mt-8 text-center text-sm md:text-base text-gray-600">
                    Don't have any account?
                    <a
                        href="#"
                        className="font-medium text-[#2B2521] underline hover:text-black transition">
                        Sign up
                    </a>
                </div>

            </div>

        </div>
        </>
    )
};

export default LogInPage;