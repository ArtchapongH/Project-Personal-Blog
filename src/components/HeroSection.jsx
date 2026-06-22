
function HeroSection(){
  return(
    // Hero Section
<div
    className="mt-6 bg-white p-10"
>
    <div
        className="grid md:grid-cols-3 items-center gap-10 min-h-\[420px\]"
    >

        {/* Left Content */}
        <div className="text-center md:text-right">
            <h1
                className="text-5xl font-bold text-gray-900 leading-tight"
            >
                Stay<br />
                Informed,<br />
                Stay Inspired
            </h1>

            <p className="mt-6 text-gray-500 text-sm leading-relaxed">
                Discover a World of Knowledge at Your Fingertips.
                Your daily dose of inspiration and information.
            </p>
        </div>

        {/* Center Image */}
        <div className="flex justify-center">
            <img
                src="https://res.cloudinary.com/dcbpjtd1r/image/upload/v1728449784/my-blog-post/xgfy0xnvyemkklcqodkg.jpg"
                alt="Author"
                className="w-72 h-96 object-cover rounded-md"
            />
        </div>

        {/* Right Content */}
        <div>
            <span className="text-xs uppercase text-gray-400 tracking-wider">
                Author
            </span>

            <h2 className="mt-2 text-xl font-bold text-gray-800">
                Thompson P.
            </h2>

            <p className="mt-4 text-gray-600 leading-relaxed">
                I am a pet enthusiast and freelance writer who
                specializes in animal behavior and care. With a deep
                love for cats, I enjoy sharing insights on feline
                companionship and wellness.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
                When I'm not writing, I spend time volunteering at my
                local animal shelter, helping cats find loving homes.
            </p>
        </div>

    </div>
</div>
    )
};
export default HeroSection;