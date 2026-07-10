import { useNavigate } from 'react-router-dom';

function SignUpPageSubmit(){

    const navigate = useNavigate();
    function handleContinueClick(){
        navigate("/");
    };

    return(
        <>
        
        <div className="bg-white min-h-screen flex items-center justify-center px-4 py-8">

            <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl">
           
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
                            strokeWidth="3">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                d="M5 13l4 4L19 7"/>
                        </svg>
                    </div>

                    {/* Title */}
                    <h2 className="mt-8 text-xl md:text-2xl font-semibold text-[#2B2521] text-center">
                        Registration success
                    </h2>

                    {/* Button */}
                    <button
                        onClick={handleContinueClick}
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

export default SignUpPageSubmit;