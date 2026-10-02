function ViewAuthor() {
    return (
        <>
            {/* Phone */}
            <div className="bg-white shadow-xl overflow-y-auto">


                {/* Author Card */}
                <div className="mt-6 bg-white rounded-2xl p-4 shadow-sm">

                    <div className=" mb-6 flex items-start gap-3">

                        <img
                            src="https://i.pravatar.cc/80?img=12"
                            className="w-12 h-12 rounded-full object-cover"
                        />

                        <div>

                            <span className="text-gray-400 text-xs">
                                Author
                            </span>

                            <h3 className="font-semibold text-gray-900">
                                Thompson P.
                            </h3>

                        </div>

                    </div>

                    <hr></hr>

                    <p className="mt-4 text-sm text-gray-600 leading-6">
                        I am a pet enthusiast and freelance writer who specializes
                        in animal behavior and care. With a deep love for cats, I
                        enjoy sharing insights on feline companionship and wellness.
                    </p>

                    <p className="mt-4 text-sm text-gray-600 leading-6">
                        When I'm not writing, I spend time volunteering at my local
                        animal shelter, helping cats find loving homes.
                    </p>

                </div>

            </div>

        </>
    )


};

export default ViewAuthor;