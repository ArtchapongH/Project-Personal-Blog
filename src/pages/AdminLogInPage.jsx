function AdminLogInPage(){
    return(
        <>

<div className="bg-white min-h-screen flex items-center justify-center">

    <div className="w-full max-w-2xl bg-[#FBFBFA] rounded-xl shadow-sm px-16 py-12">

        {/* Heading */}
        <div className="text-center mb-8">
            <p className="text-[#529AF6] text-sm font-medium">Admin panel</p>
            <h1 className="text-4xl font-bold text-[#2d2a26] mt-1">Log in</h1>
        </div>

        {/* Form */}
        <form className="max-w-md mx-auto space-y-5">

            {/* Email */}
            <div>
                <label className="block text-xs text-gray-600 mb-2">
                    Email
                </label>
                <input
                    type="email"
                    placeholder="Email"
                    className="w-full h-10 px-4 rounded border border-gray-200 bg-white
                           focus:outline-none focus:ring-2 focus:ring-orange-300"
                />
            </div>

            {/* Password */}
            <div>
                <label className="block text-xs text-gray-600 mb-2">
                    Password
                </label>
                <input
                    type="password"
                    placeholder="Password"
                    className="w-full h-10 px-4 rounded border border-gray-200 bg-white
                           focus:outline-none focus:ring-2 focus:ring-orange-300"
                />
            </div>

            {/* Button */}
            <div className="flex justify-center pt-2">
                <button
                    type="submit"
                    className="bg-[#2d2925] text-white text-sm
                           px-8 py-2 rounded-full
                           hover:bg-black transition"
                >
                    Log in
                </button>
            </div>

        </form>

    </div>

</div>
        </>
    )
};

export default AdminLogInPage;